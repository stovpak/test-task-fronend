import React from "react";
import updateOrCreateArticle from "./updateOrCreateArticle";
import addPhoto from "./addPhoto";
import addArticleToBlog from "./addArticleToBlog";
import deletePhoto from "./deleteOldPhoto";

function isCorrectData(content, title, img, imgId){
    return (content.value.length === 0 || title.value.length === 0 || (img.files.length === 0 && imgId === null))
}

function isNewImg(img, imgId){
    return (imgId !== null && img.files.length === 0)
}

function articleFromRequest(id, content, title, imgId, img, articleIds, updateArticleQuery, createArticleQuery, addArticleToBlogQuery, type){
    if(!!isCorrectData(content, title, img, imgId)){
        alert("Wrong data")
    }
    else if (type === 'update' && !!isNewImg(img, imgId)){
        updateOrCreateArticle(title.value, content.value, imgId, {"where": {"id": id}}, updateArticleQuery);
    }
    else{
        let bodyFormData = new FormData();
        bodyFormData.append('files',img.files[0])
        addPhoto(bodyFormData).then((response) =>{
            if(type === 'create'){
                updateOrCreateArticle(title.value, content.value, response.data[0].id, null, createArticleQuery).then(response =>{
                    addArticleToBlog(response.data.createArticle.article.id, articleIds, addArticleToBlogQuery);
                    window.location.reload(false);
                }).catch(err => {
                    console.log(err)
                });
            }
            else{
                deletePhoto(imgId).then(function (){
                    updateOrCreateArticle(title.value, content.value, response.data[0].id, {"where": {"id": id}},updateArticleQuery);
                    window.location.reload(false);
                }).catch(function (response) {
                    console.log(response);
                });
            }
        })
            .catch(function (response) {
                console.log(response);
            });
    }
}

export default articleFromRequest;
