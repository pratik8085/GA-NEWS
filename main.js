//1ea9bd8fb1194ad7a2a9c19974e12b42



const generalBtn = document.getElementById("general");
const buisnessBtn = document.getElementById("buisness");
const sportsBtn = document.getElementById("sports");
const technologyBtn = document.getElementById("technology");
const entertainmentBtn = document.getElementById("entertainment");
const searchBtn = document.getElementById("search");


const newsQuerry = document.getElementById("newsQuerry");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

//Arrays
var newsDataArr = [];


//api
const API_KEY = "1ea9bd8fb1194ad7a2a9c19974e12b42";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apikey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apikey=";
const BUISNESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=buisness&apikey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apikey=";
const ENTERTAINMENT_NEWS ="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apikey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apikey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?e=";

//-------------------

window.onload = function() { 
  newsType.innerHTML="<h4>HEADLINES</h4>"; fetchHeadlines();
};


//function
generalBtn.addEventListener('click',function(){
  newsType.innerHTML="<h4>GENERAL NEWS</h4>";
  fetchGeneralNews();
});
buisnessBtn.addEventListener('click', function() {
  newsType.innerHTML="<h4>BUISNESS NEWS</h4>";
  fetchBuisnessNews();
});
sportsBtn.addEventListener('click', function() {
  newsType.innerHTML="<h4>SPORTS NEWS</h4>";
  fetchSportsNews();
});
technologyBtn.addEventListener('click', function() {
  newsType.innerHTML="<h4>TECHNOLOGY NEWS</h4>";
  fetchTechnologyNews();
});
entertainmentBtn.addEventListener('click', function() {
  newsType.innerHTML="<h4>ENTERTAINMENT NEWS</h4>";
  fetchEntertainmentNews();
});
searchBtn.addEventListener('click', function() {
  newsType.innerHTML="<h4>SEARCH :"+newsQuery.value+"</h4>";
  fetchQuerryNews();
});



const fetchGeneralNews = async () => {
  const response =  await fetch(GENERAL_NEWS+API_KEY);
  newsDataArr = [];
  if ( response.status >=200 && response.status < 300 ) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else{
    //handle errors 
    console.log(response.status, response.statusText);
  }
  
  displayNews();
}

const fetchBuisnessNews = async () => {
  const response = await fetch(BUISNESS_NEWS+API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    //handle errors 
    console.log(response.status, response.statusText);
    
  }

  displayNews();
}

const fetchSportsNews = async () => {
  const response = await fetch(SPORTS_NEWS+API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    //handle errors 
    console.log(response.status, response.statusText);
  }

  displayNews();
}

const fetchTechnologyNews = async () => {
  const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    //handle errors 
    console.log(response.status, response.statusText);
  }

  displayNews();
}

const fetchEntertainmentNews = async () => {
  const response = await fetch(ENTERTAINMENT_NEWS+API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    //handle errors 
    console.log(response.status, response.statusText);
  }

  displayNews();
}

const fetchQueryNews = async () => {
encodeURIComponent
if (newsQuerry.value == null) 
  return;

const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);

newsDataArr = [];

if(response.status >= 200 && response.status < 380) {

const myJson = await response.json();

newsDataArr = myJson.articles;

} else {

//error handle

console.log(response.status, response.statusText);
 }
 displayNews();
}

const fetchHeadlines = async () => {
  const response =  await fetch(HEADLINES_NEWS+API_KEY);
  newsDataArr = [];
  if ( response.status >=200 && response.status < 300 ) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else{
    //handle errors 
    console.log(response.status, response.statusText);
  }
  
  displayNews();
}

//---------------

function displayNews() {
  
  newsdetails.innerHTML="";
  
  if (newsDataArr.length == 0) {
    newsdetails.innerHTML="<h5>NO DATA FOUND.</h5>"
    return;
  }
  
  newsDataArr.forEach(news => {
    
    var date = news.publishedAt.split("T")

var col = document.createElement('div'); col.className="col-sm-12 col-md-4 col-lg-3 p-2 cand";

var card = document.createElement('div'); card.className = "p-2";

var image = document.createElement('img'); 
image.setAttribute("height", "matchparnt"); 
image.setAttribute("width", "100%");

image.src=news.urlToImage;

var cardBody = document.createElement('div');

var newsHeading = document.createElement('h5'); newsHeading.className = "card-title";
  newsHeading.innerHTML = news.title;
  
  var dateHeading = document.createElement('h6'); dateHeading.className = "text-primary"; dateHeading.innerHTML = date[0];

var discription = document.createElement('p'); discription.className="text-muted"; discription.innerHTML = news.description;

var link = document.createElement('a'); link.className="btn btn-dark"; link.setAttribute("target", "_blank");

link.href= news.url;

link.innerHTML="Read more";

cardBody.appendChild(newsHeading);

cardBody.appendChild(dateHeading);

cardBody.appendChild(discription); cardBody.appendChild(link);

card.appendChild(image); card.appendChild(cardBody);

col.appendChild(card);

newsdetails.appendChild(col);


    
  });
  
}