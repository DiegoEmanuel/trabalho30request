import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.tvmaze.com/search/shows?q='
});

export default api;


// {"image":"https://foodish-api.herokuapp.com/images/pizza/pizza70.jpg"}