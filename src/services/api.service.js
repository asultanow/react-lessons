const baseUrl = 'https://jsonplaceholder.typicode.com/';

const getUsers = () => fetch(baseUrl + 'users').then(response => response.json());

const getPosts = () => fetch(baseUrl + 'posts').then(response => response.json());

const getComments = () => fetch(baseUrl + 'comments').then(response => response.json());

export {getUsers, getPosts, getComments};
