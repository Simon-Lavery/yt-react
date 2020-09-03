import axios from 'axios';

const Key = 'AIzaSyCPe8IypeVYmR2uhtMxn1VE1R21a6gorw8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: Key
    }
})