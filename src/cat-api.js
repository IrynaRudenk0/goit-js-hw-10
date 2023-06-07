const BASE_URL = "https://api.thecatapi.com/v1/";

export default class NewApiService {
    constructor() {
        this.selectQuery = '';
    }

    fetchBreed() {
        const options = {
            headers: {
                'x-api-key': "live_Cd4WCvTNS9snZjnbTUM8sxCFmhfIUvjKEyCSUDCTfMDTsKl0n9rciDP10csq9xa",
            },
        };
        const url = "`${BASE_URL}`/breeds";

        fetch(url, options)
            .then((response) => {
                return response.json();
            })
    }

fetchCatByBreed(breedId) {
    const breedUrl = `${BASE_URL}/images/search`;
        
        fetch(breedUrl, options).then((response) => {
            alert(loadMsg);
        return response.json();
    }).then((data) => {
        storedBreeds = data;

        for (let i = 0; i < storedBreeds.length; i++) {
            const breed = storedBreeds[i];
            let option = document.createElement('option');
            option.value = i;
            option.innerHTML = `${breed.name}`;
            document.getElementById('breed_selector').appendChild(option);
    
            showBreedImage(0)
        }
    })
.catch(function(error) {
    alert(errorMsg);
});

function showBreedImage(index)
{ 
  document.getElementById("breed_image").src= storedBreeds[index].image.url;
  
  document.getElementById("breed_json").textContent= storedBreeds[index].temperament
  
  
  document.getElementById("wiki_link").href= storedBreeds[index].wikipedia_url
  document.getElementById("wiki_link").innerHTML= storedBreeds[index].wikipedia_url
}
}

    get query() {
            return this.selectQuery;
        }

    set query(newQuery) {
            this.selectQuery = newQuery;
        }

}
