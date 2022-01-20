let news_ac = document.getElementById("news_accrodion")

const src = "bbc-news"
const key = "5e7a8ec386ee44b292ebeb2437cba363"

let url = `https://newsapi.org/v2/top-headlines?sources=${src}&apiKey=${key}`

const xhr = new XMLHttpRequest();
xhr.onload = function(){
    if(this.status==200){
        let json = JSON.parse(this.responseText)
        let articles = json.articles
        let news_html="";
        
        articles.forEach(function(element,index) {
            
            let news_result = `<div class="accordion-item">
            <h2 class="accordion-header search_header" id="heading${index}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                    ${element["title"]}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    ${element["content"]}. <a href="${element["url"]}" target="_blank">Read More...</a>
                </div>
            </div>
            </div>`
            
            news_html+=news_result

        news_ac.innerHTML=news_html

        });
    }
    else{
        console.log("Some Error occured")
    }
}
xhr.open("GET",url ,true)
xhr.send()

// let search = document.getElementById("search")
// search.oninput = function(){
//     let items = document.querySelectorAll(".search_header")
//     items.forEach(function(element){
//         if(element.innerText[0].includes(search.value)){
//             console.log(element.innerText[0])
//         }
//         else{
//             console.log("no")
//         }
//     })
// }