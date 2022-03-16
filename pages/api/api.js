import axios from "axios";

const api = axios.create({
    baseURL:"https://api-fitness-express.herokuapp.com",
});

export default api;
