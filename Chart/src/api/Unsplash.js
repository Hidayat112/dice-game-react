import Axios from 'axios';

export default Axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID KBN7JCsfdXH3Y9VFDCnab5aNPN24IcY2aGchAp-NCxs'
    },
})
