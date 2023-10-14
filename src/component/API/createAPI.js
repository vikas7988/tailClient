import Axios from "./axios";


function getData (data){

    return Axios.get(`/${data}`)
}

export default getData