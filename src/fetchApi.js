import axios from 'axios';

export const myListApi = () => {
    return axios.get('http://localhost:3003/mylist').then(resp => resp.data)
}

export const recommendationsApi = () => {
    return axios.get('http://localhost:3003/recommendations').then(resp => resp.data)
}
