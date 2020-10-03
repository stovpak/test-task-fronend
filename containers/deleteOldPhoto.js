import React from "react";
import axios from "axios";

function deletePhoto(imgId){
   return axios({
        method: 'delete',
        url: 'http://localhost:1337/upload/files/' + imgId,
    }).then()
        .catch(e =>{
        console.log(e)
    })


}

export default deletePhoto;
