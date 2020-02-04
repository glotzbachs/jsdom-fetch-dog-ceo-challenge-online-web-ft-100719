console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    getRandomDogs()
    getBreeds()

    document.getElementById('breed-dropdown').addEventListener('change', (event) => {
        renderBreed(event)
    })
})

    // let resourceObject = {name: "Nancy"}

    // let configObject = {
    //     method: 'POST', // or patch or delete
    //     headers: {
    //         //content type and accept
    //     }, //end of delete
    //     body: JSON.stringify(resourceObject)
    // }

function getRandomDogs() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(data => {
            const dogContainer = document.getElementById('dog-image-container')
            data.message.forEach( (dog) => {
                const dogImage= document.createElement('img')
                dogImage.setAttribute("src", dog)
                dogContainer.appendChild(dogImage)
            })
        });
}

function getBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(data => {
            const breedContainer = document.getElementById('dog-breeds')
            Object.keys(data.message).forEach( (breed) => {
                const dogBreed= document.createElement('li')
                dogBreed.innerText = breed
                breedContainer.appendChild(dogBreed)
                dogBreed.addEventListener('click', () => {
                    dogBreed.style.color = "red"
                })
            })
        })
}

function renderBreed(event) {
    event.preventDefault()
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(data => {
            const breedContainer = document.getElementById('dog-breeds')
            breedContainer.innerHTML = ""
            Object.keys(data.message).filter( (breed) => breed.charAt(0) === event.target.value ).forEach((b) => {
                const dogBreed= document.createElement('li')
                dogBreed.innerText = b
                breedContainer.appendChild(dogBreed)
            })
        })
}


//cors.. let back end system know that front end request is ok. 
