import axios from "axios";

const api = axios.create({
    baseURL:"https://api-fake-fitness-express.herokuapp.com/",
});


export default api;