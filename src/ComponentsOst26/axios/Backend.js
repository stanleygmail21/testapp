import axios from "axios";

export default axios.create({
    baseURL: 'http://3.95.231.42:8080/api/v1'
});