from flask import Flask,request,redirect
app = Flask(__name__)

@app.route('/',methods=['GET', 'POST'])
def hello():
    if request.method == "POST":
        # print(request.headers)
        
        # # a=bytes(a)
        # # with open("new.txt","wb") as f:
        # #     f.write(a)
        # print(request.json)
        # return "donw"
        return redirect("http://google.com")
    return "done"

if __name__ == '__main__':
    app.run(debug=True,port=80)