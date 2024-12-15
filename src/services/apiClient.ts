import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '79188eb4ff5e4adabcdbaac8a60c015e'
    }
})