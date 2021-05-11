import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',     
    headers: {
        Authorization : 
        'Client-ID fW9bow2WEsBKcr9glLgy4xQzsAdM8Lyym1-Z8q56xZA'
    }

});
