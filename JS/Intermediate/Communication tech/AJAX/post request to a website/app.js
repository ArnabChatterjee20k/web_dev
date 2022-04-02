let xhr = new XMLHttpRequest;
const method = "POST";
const url = "http://dummy.restapiexample.com/api/v1/create"
xhr.open(method , url , true);
xhr.setRequestHeader("Content-type",'application/json');

xhr.onload = function(){
    if (this.status===200){
        const res = this.responseText ;
        console.log(res);
        var elem = document.createTextNode(res);
        var node = document.createElement("p");
        node.appendChild(elem);
        document.body.appendChild(node)
    }
    else{
        console.error("some problems in the server")
    }
}

const params = `{"name":"test34sad545dfdf","salary":"8596596","age":"23"}`;
xhr.send(params);