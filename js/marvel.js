    const jikan = () => {
            const url = "https://api.jikan.moe/v3/search/anime?q=baki&page=1";
            
            fetch(url)
            .then(data => data.json())
            .then(data => console.log(data))
            .then()

    };

function reload(){
        location.reload()
}


    jikan();



    //narutos id results[0].mal_id
