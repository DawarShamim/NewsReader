let Mainaccordion = document.getElementById('Mainaccordion');


let apiKey = '27740761089547dd941f781501c7bc63'
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=27740761089547dd941f781501c7bc63', true);
// xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=00cf7949e4b143e0aa1d0655ce46ca8b', true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        
        let newsHeadline = "";
        articles.forEach(function(element,index){
            let publish = element["publishedAt"].replace('T', ' ');
            publish = publish.replace('Z', ' ');

            let news = `<div class="accordion-item">
    <h2 class="accordion-header" id = "heading${index}" >
        <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
            aria-expanded="true" aria-controls="collapse${index}">
            ${index+1}- ${element["title"]}
        </button>
    </h2 >
    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
        <div class="block"><img src="${element["urlToImage"]}" alt="No Image" onerror="this.onerror=null;this.src='no_image.png';" width="200" height="200">
            </div>
            <div class="block2">            <p>${publish}</p><hr>
        ${element["description"]}.
        <a href="${element["url"]}" target="_blank">Read More:</a>
        </div>
        </div>
        
    </div></div><hr>`;
            newsHeadline += news;
            
        });
        Mainaccordion.innerHTML = newsHeadline;
    }
    else {
        console.log("Error")
    }
}
xhr.send()
