
/*
DICTIONARY APPLICATION
let searchBox = document.querySelector(".search-box");
let searchBtn = document.querySelector(".search-btn");
async function search(word){
    
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    let response = await fetch(`${apiUrl}`);
    let data = await response.json();
    if(response.status == 404){
        
        document.querySelector(".error").style.display = "block";
        document.querySelector(".result").style.display = "none";
    }
    else{
   document.querySelector(".meaning").innerHTML = data[0].meanings[0].synonyms[0] ;
   document.querySelector(".phonetic").innerHTML = data[0].phonetic;
   document.querySelector(".defination").innerHTML = data[0].meanings[1].definitions[0].definition;

   document.querySelector(".error").style.display = "none";
   document.querySelector(".result").style.display = "block";
    //console.log(data);
    }
}
searchBtn.addEventListener("click" , ()=>{
    search(searchBox.value);
})
*/



/* -----------------------------------IMAGE SERACH APP--------------------------------------------------- */


const accessKey = "gcIsVkuHeTmDk4KdVZJcFS-qQbrTF7qS0D2OFlD2RuQ";


const searchForm =  document.getElementById("search-form");
const searchBox =  document.getElementById("search-box");
const searchResult =  document.getElementById("search-result");
const showMoreBtn=  document.getElementById("show-more-btn");

let keyword = "";
let page =1;

async function searchImages(){
    keyword= searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();


    if(page ==1){
        searchResult.innerHTML ="";
    }
    console.log(data);
   const results = data.results;

   results.map( (result) =>{
    const image = document.createElement("img");
    image.src = result.urls.small ;             
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html ;
    imageLink.target = "_blank" ;

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
   })
   showMoreBtn.style.display = "block";

}
searchForm.addEventListener("submit" , (e) =>{
    e.preventDefault();
    page =1;
    searchImages();
})

showMoreBtn.addEventListener("click" , ()=>{
    page++;
    searchImages();
})
