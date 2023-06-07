import NewApiService from "./cat-api";

const refs = {
    selectEl: document.querySelector('.breed-select'),
    BASE_URL: "https://api.thecatapi.com/v1/",
    loadMsg: document.querySelector("loader"),
    errorMsg: document.querySelector("error")
}

const newApiService = new NewApiService();

refs.selectEl.addEventListener('submit', onSelect);

function onSelect(e) {
    e.preventDefault();
    newApiService.query = e.currentTarget.elements.query.value;
}