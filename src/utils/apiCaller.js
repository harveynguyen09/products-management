import axios from 'axios'
import * as config from '../constains/config'

export default function callAPI(endpoint,method="GET",body){
    return axios({
        method: method,
        url: `${config.API_URL}/${endpoint}`,
        data: body
    })
        // .then(function (response) {
        //     let products = response.data
        //     return products
        // })
        .catch(err=>{
            console.log(err)
        })
}