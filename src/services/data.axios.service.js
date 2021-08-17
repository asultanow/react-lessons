import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/' });

function getUsersAxios() {
    return axiosInstance('users').then(response => response.data);
}

function getPostsAxios(userId) {
    return axiosInstance(`users/${userId}/posts`).then(response => response.data);
}

function getCommentsAxios(postId) {
    return axiosInstance(`posts/${postId}/comments`).then(response => response.data);
}

export { getUsersAxios, getPostsAxios, getCommentsAxios };
