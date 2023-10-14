import axios from 'axios'



console.log(process.env.REACT_APP_URL)
const Axios = axios.create({
    baseURL : 'https://tailwindserver.onrender.com',
    headers :{
        "Content-Type": 'application/json',
    }
})


export default Axios