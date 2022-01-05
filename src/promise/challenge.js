const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    .then(data => {
        console.log(`There is: ${data.info.count} characters in the list`);
        return fetchData(`${API}${data.results[0].id}`);
    })
    .then (data => {
        console.log(`The name of the first one is: ${data.name}`);
        return fetchData(data.origin.url);
    })
    .then (data => {
        console.log(`And his dimension is: ${data.dimension}`);
    })
    .catch (err => console.error(err));
