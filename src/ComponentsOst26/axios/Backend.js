import axios from "axios";

export default axios.create({
    baseURL: 'http://54.242.195.138:8080/api/v1'
});