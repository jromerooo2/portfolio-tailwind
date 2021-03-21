
//hash d15e0441c607b3698ea81d884dbb0a63
// url = "https://gateway.marvel.com:443/v1/public/characters?apikey=e96f679ac4fad530bea9f5dac9dae437";


const jikan = () => {
        const url = "https://api.jikan.moe/v3/search/anime?q=baki&page=1";
        
        fetch(url)
        .then(data => data.json())
        .then(data => console.log(data))
        .then(updateDom)
    

};

function updateDom () {

     //document.getElementById("anime-title").innerHTML = 
     //" <h6>'${data.results}'</h6> " ;
}

jikan();



//narutos id results[0].mal_id
