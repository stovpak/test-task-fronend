import React from "react";
import axios from "axios";

function addPhoto(bodyFormData){
    return axios({
            method: 'post',
            url: 'http://localhost:1337/upload/',
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data'}
        }).then(response => response).catch(e =>{
        console.log(e)
    })


}

export default addPhoto;
