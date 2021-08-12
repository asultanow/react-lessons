const baseUrl = 'https://jsonplaceholder.typicode.com/';

function getUsers() {
    return fetch(`${baseUrl}users`).then(response => response.json());
}

function getPosts(userId) {
    return fetch(`${baseUrl}users/${userId}/posts`)
        .then(response => response.json());
}

function getComments(postId) {
    return fetch(`${baseUrl}posts/${postId}/comments`)
        .then(response => response.json());
}

export { getUsers, getPosts, getComments };
