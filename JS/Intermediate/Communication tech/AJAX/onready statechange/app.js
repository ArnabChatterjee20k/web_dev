const xhr = new XMLHttpRequest(),
    method = "GET",
    url = "local.txt";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
    // In local files, status is 0 upon success in Mozilla Firefox
    if (xhr.readyState === XMLHttpRequest.DONE) {
        // XMLHttpRequest.DONE means reayState is 4  means response is ready
        var status = xhr.status;
        if (status === 0 || (status >= 200 && status < 400)) {
            // The request has been completed successfully
            console.log(xhr.response)
            console.log(xhr.responseText);
            console.log(xhr.getAllResponseHeaders())
        } else {
            // Oh no! There has been an error with the request!
        }
    }
};
xhr.send()