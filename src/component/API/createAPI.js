import Axios from "./axios";


function getData (data){

    return Axios.get(`/${data}`)
}
function getName (){

    return Axios.get(`/`)
}

export { getData, getName}