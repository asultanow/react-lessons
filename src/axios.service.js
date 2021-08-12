import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

function getUsers() {
    return axiosInstance('users');
}

function getPosts(userId) {

}

function getComments(postId) {

}

export { getUsers, getPosts, getComments };
