
//hash d15e0441c607b3698ea81d884dbb0a63
// url = "https://gateway.marvel.com:443/v1/public/characters?apikey=e96f679ac4fad530bea9f5dac9dae437";

const marvel = {
    render: () => {
        const url = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e96f679ac4fad530bea9f5dac9dae437&hash=d15e0441c607b3698ea81d884dbb0a63";
        
        fetch(url)
        .then(res => res.json())
        .then((json) => {
            console.log(json)
        })

    }
};

marvel.render();