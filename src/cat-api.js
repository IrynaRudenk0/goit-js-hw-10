const BREEDS_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_Cd4WCvTNS9snZjnbTUM8sxCFmhfIUvjKEyCSUDCTfMDTsKl0n9rciDP10csq9xa';

function fetchBreeds() {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });
  return fetch(`${BREEDS_URL}/breeds?${params}`).then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  return fetch(
    `${BREEDS_URL}/images/${breedId}?api_key=${API_KEY}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
