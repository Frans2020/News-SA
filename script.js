let general = document.querySelector('#nav-home'); 
let technology = document.querySelector('#nav-technology');
let healths = document.querySelector('#nav-sports');
let tab = document.querySelector('#nav-tab');
let articles = [];
window.addEventListener('DOMContentLoaded',(e)=>{
    Generals();
});
function Healths(){ 
    while (general.hasChildNodes()) {
        general.removeChild(general.lastChild)
    }
    const request = new XMLHttpRequest();
    request.open("GET",'http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=za&category=health&apiKey=32ba5b8c899f4c398208cbc11c6081b9',true)
    
    request.onload = function(){
        let news = JSON.parse(request.responseText);
        articles = news.articles;  
        articles.forEach(article => {
            let card = document.createElement('div');
            card.classList.add('card'); 
            card.style.width = '70%'; 
            card.style.margin = '5% 0 0 0'
            card.style.border = '1px solid #CFD8DC'
            card.style.borderRadius = '5px';
            let cardImage = document.createElement('img'); 
            cardImage.classList.add('card-img-top'); 
            cardImage.src = article.urlToImage;
            cardImage.style.width = '100%';
            card.appendChild(cardImage);
            let cardBodyTitle = document.createElement('h6');
            cardBodyTitle.classList.add('card-title'); 
            cardBodyTitle.textContent = article.title;
            cardBodyTitle.style.padding
            let cardBodyText = document.createElement('h6');
            cardBodyText.classList.add('card-text'); 
            cardBodyText.textContent = article.content;
            let cardBody = document.createElement('div');
            cardBody.classList.add = "card-body";
            cardBody.style.margin = '0.5em';
            // cardBody.style.textAlign = 'center';
            let button = document.createElement('a');
            button.style.textAlign = 'center';
            button.href = article.url;
            button.style.position = 'absolute'; 
            button.style.bottom = 0;
            button.style.textDecoration = 'underline';
            button.innerHTML = '<i class="fas fa-link"></i>'+'Read more';
            cardBody.appendChild(cardBodyTitle);
            cardBody.appendChild(cardBodyText);  
            cardBody.appendChild(button);
            card.appendChild(cardBody);
            
           healths.append(card);
        });
    
    }
    
    request.send(null);
}
function Technology(platform){
    while (technology.hasChildNodes()) {
        technology.removeChild(technology.lastChild)
    }
    const request = new XMLHttpRequest();
    request.open("GET",'http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=za&category=technology&apiKey=32ba5b8c899f4c398208cbc11c6081b9',true)
    
    request.onload = function(){
        let news = JSON.parse(request.responseText);
        articles = news.articles;  
        articles.forEach(article => {
            let card = document.createElement('div');
            card.classList.add('card'); 
            card.style.width = '70%'; 
            card.style.margin = '5% 0 0 0'
            card.style.border = '1px solid #CFD8DC'
            card.style.borderRadius = '5px';
            let cardImage = document.createElement('img'); 
            cardImage.classList.add('card-img-top'); 
            cardImage.src = article.urlToImage;
            cardImage.style.width = '100%';
            card.appendChild(cardImage);
            let cardBodyTitle = document.createElement('h6');
            cardBodyTitle.classList.add('card-title'); 
            cardBodyTitle.textContent = article.title;
            cardBodyTitle.style.padding
            let cardBodyText = document.createElement('h6');
            cardBodyText.classList.add('card-text');  
            cardBodyText.textContent = article.content;
            let cardBody = document.createElement('div');
            cardBody.classList.add = "card-body";
            cardBody.style.margin = '0.5em';
            // cardBody.style.textAlign = 'center';
            let button = document.createElement('a');
            button.href = article.url;
            button.style.position = 'absolute'; 
            button.style.bottom = 0;
            button.style.textDecoration = 'underline'; 
            button.innerHTML = '<i class="fas fa-link"></i>'+'Read more';
            cardBody.appendChild(cardBodyTitle);
            cardBody.appendChild(cardBodyText); 
            cardBody.appendChild(button);
            card.appendChild(cardBody);
            
            technology.append(card);
        });
    
    }
    
    request.send(null);
}
function Generals() {
    while (general.hasChildNodes()) {
        general.removeChild(general.lastChild)
    }
    const request = new XMLHttpRequest();
    request.open("GET",'http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=za&category=general&apiKey=32ba5b8c899f4c398208cbc11c6081b9',true)

    request.onload = function(){
        let news = JSON.parse(request.responseText);
        articles = news.articles;  
        articles.forEach(article => {
            let card = document.createElement('div');
            card.classList.add('card'); 
            card.style.width = '70%'; 
            card.style.margin = '5% 0 0 0'
            card.style.border = '1px solid #CFD8DC'
            card.style.borderRadius = '5px';
            let cardImage = document.createElement('img'); 
            cardImage.classList.add('card-img-top'); 
            cardImage.src = article.urlToImage;
            cardImage.style.width = '100%';
            card.appendChild(cardImage);
            let cardBodyTitle = document.createElement('h6');
            cardBodyTitle.classList.add('card-title'); 
            cardBodyTitle.textContent = article.title; 
            let cardBodyText = document.createElement('h6');
            cardBodyText.classList.add('card-text'); 
            cardBodyText.textContent = article.description;
            let cardBody = document.createElement('div');
            cardBody.classList.add = "card-body";
            cardBody.style.margin = '0.5em';
            // cardBody.style.textAlign = 'center';
            let button = document.createElement('a');
            button.href = article.url;
            button.style.position = 'absolute'; 
            button.style.bottom = 0;
            button.style.textDecoration = 'underline'; 
            button.innerHTML = '<i class="fas fa-link"></i>'+'Read more';
            cardBody.appendChild(cardBodyTitle);
            cardBody.appendChild(cardBodyText); 
            cardBody.appendChild(button);
            card.appendChild(cardBody);
            
            general.append(card);
        });

    }

    request.send(null);
}



