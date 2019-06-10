import Vue from 'vue';
import Axios from 'axios';
import Config from '../utils/config';

Axios.defaults.baseURL = Config.HTTPAPIURL;
Axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';

class Http{

    post(url, data){
        return Axios({
            url:url,
            data:data,
            method:'POST',
            dataType:'json'
        }).then((res)=>{
            let data = res.data;
            return data
        }).catch((err)=>{
            let data = err.data
            alert(data.reMsg)
        })
    }
    get(url, params={}){
        return Axios({
            url:url,
            params:params,
            method:'GET',
            dataType:'json'
        }).then((res)=>{
            let data = res.data;
            return data
        }).catch((err)=>{
            let data = err.data
            alert(data.reMsg)
        })
    }
}

export default Http