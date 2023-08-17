from flask import Flask, render_template, request

app = Flask(__name__)

def calculate_interest(principal, rate, period):
    interest = (principal * rate * period) / 100
    total_amount = principal + interest
    return interest, total_amount

@app.route("/", methods=["GET", "POST"])
def Home_page():
    calculated_interest = None
    calculated_total_amount = None

    if request.method == "POST":
        principal = float(request.form["principal"])
        rate = float(request.form["rate"])
        period = float(request.form["period"])

        calculated_interest, calculated_total_amount = calculate_interest(principal, rate, period)

    return render_template("index.html", 
                           calculated_interest=calculated_interest, 
                           calculated_total_amount=calculated_total_amount)


@app.route('/about')
def About_page():
    return render_template('about.html')


@app.route('/blog')
def Blog_page():
    return render_template('blog.html')

if __name__ == "__main__":
    app.run(debug=True)
