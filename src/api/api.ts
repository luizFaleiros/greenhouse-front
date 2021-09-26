import axios from "axios";

export default  axios.create({
    baseURL: "https://wcsgreenhouse.azurewebsites.net",
    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE', 
    }
})