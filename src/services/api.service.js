const baseUrl = 'https://jsonplaceholder.typicode.com';

const getUsers = () => fetch(`${baseUrl}/users`).then(response => response.json());

const getUserById = (userId) => fetch(`${baseUrl}/users/${userId}`).then(response => response.json());

const getPosts = () => fetch(`${baseUrl}/posts`).then(response => response.json());

const getPostById = (postId) => fetch(`${baseUrl}/posts/${postId}`).then(response => response.json());

export {getUsers, getUserById, getPosts, getPostById};
