import Axios from 'axios';
import { DOMEN } from './DOMEN';

export const getUsers = Axios.get(`${DOMEN}/users`)
    .then(function (res) {
        const data = res.data.data[0];
        return data;
    })
    .catch(function (error) {
        console.log(error);
    });


    export async function getCollection(id) {
        try {
            let response = await Axios.get(`${DOMEN}/collections/${id}`);      
            let result =  response.data.data;;
            return result;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    //     await Axios.get(`${DOMEN}/collections/${id}`)
    // .then(function (res) {
    //     const data = res.data.data;
    //     console.log(data);
    //     return data;
    };