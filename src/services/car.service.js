const baseUrl = 'http://91.201.233.14/api/v1/cars';

function getCars() {
    return fetch(baseUrl).then(response => response.json());
}

function createCar(car) {
    return fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    }).then(response => response.json());
}

export {getCars, createCar};
