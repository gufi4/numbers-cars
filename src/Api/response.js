import Axios from 'axios';
import {DOMEN} from './DOMEN';

let config = {
    headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
    }
}

export const getUsers = Axios.get(`${DOMEN}/users`, config)
    .then(function (res) {
        return res.data.data[0];
    })
    .catch(function (error) {
        console.log(error);
    });


export async function getCollection(id) {
    try {
        let response = await Axios.get(`${DOMEN}/collections/${id}`, config);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    //     await Axios.get(`${DOMEN}/collections/${id}`)
    // .then(function (res) {
    //     const data = res.data.data;
    //     console.log(data);
    //     return data;
}

export async function getItemsRange(collectionId, numberName) {
    try {
        let response = await Axios.get(`${DOMEN}/collection/items?array=${numberName}&collection_id=${collectionId}`, config);
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}