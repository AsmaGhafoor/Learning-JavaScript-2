console.log('Project 3');

//32729b282be64ebea1612f4a3eb82547
//https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=32729b282be64ebea1612f4a3eb82547

// Intialize the news api parameters
let source = 'bbc-news';
let apiKey = '32729b282be64ebea1612f4a3eb82547';

//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//Create a ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// 2nd method ye hai k source or api variable nhi banaya jaye or direct string likh di jaye.
//xhr.open('POST',https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=32729b282be64ebea1612f4a3eb82547',true);

//What to do when responce is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        //console.log(articles);
        for (let news in articles) {
            //console.log(articles[news]);
            let newsHTML="";
            articles.forEach(function(element, index) {
                console.log(element, index)
                let news = `<div class="card">
                                <div class="card-header" id="heading${index}">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${index}"
                                            aria-expanded="true" aria-controls="collapse${index}">
                                            <b>Breaking News ${index+1} </b> ${element["title"]}
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                    <div class="card-body"> ${element["content"]} </div> <a href="${element['url']} target="_blank">Read more here.</a> </div>
                                </div>`;
                newsHTML += news;
        });
        newsAccordion.innerHTML=newsHTML;
        }    
    }
}
xhr.send();

