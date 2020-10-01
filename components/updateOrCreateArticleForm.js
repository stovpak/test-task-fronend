import React from "react";
import updateOrCreateArticle from "./updateOrCreateArticle";
import {useMutation} from "@apollo/client";
import UPDATE_ARTICLE from "../apollo/queries/updateArticle";
import CREATE_ARTICLE from "../apollo/queries/createArticle";
import ADD_ARTICLES_TO_BLOG from "../apollo/queries/addArticleToBlog";
import addArticleToBlog from "./addArticleToBlog";
import addPhoto from "./addPhoto";
import deletePhoto from "./deleteOldPhoto";

const UpdateOrCreateArticleForm = props => {
    let {id, title, content, imgId, type, articleIds} = props;
    let img;
    let input = {};
    let buttonValue = type === 'create' ?'Create' : 'Update';
    const [updateArticleQuery] = useMutation(UPDATE_ARTICLE);
    const [createArticleQuery] = useMutation(CREATE_ARTICLE);
    const [addArticleToBlogQuery] = useMutation(ADD_ARTICLES_TO_BLOG);
    return(
    <div>
        <form
            onSubmit={e => {
                e.preventDefault();
                if(content.value.length === 0 || title.value.length === 0 || (img.files.length === 0 && imgId === null)) {
                    alert("Wrong data")
                }
                else if (imgId !== null && img.files.length === 0){
                    input = {
                        "where": {
                            "id": id
                        },
                        "data": {
                            "title": title.value,
                            "content": content.value,
                            "image": imgId
                        }
                    }
                    updateOrCreateArticle(input,updateArticleQuery);
                }
                else{
                    let bodyFormData = new FormData();
                    bodyFormData.append('files',img.files[0])
                   addPhoto(bodyFormData).then((response) =>{
                        let newImgId = response.data[0].id;
                        input = {
                            "data": {
                                "title": title.value,
                                "content": content.value,
                                "image": newImgId,
                            }
                        }
                        if(type === 'create'){
                            updateOrCreateArticle(input,createArticleQuery).then(response =>{
                                addArticleToBlog(input,response.data.createArticle.article.id, articleIds, addArticleToBlogQuery);
                                window.location.reload(false);
                            }).catch(err => {
                                console.log(err)
                            });

                        }
                        else{
                            deletePhoto(imgId).then(function (){
                                let whereInput = {
                                    "where": {
                                        "id": id
                                    }
                                };
                                Object.assign(input, whereInput);
                               updateOrCreateArticle(input,updateArticleQuery);
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
            }}>
            <input
                defaultValue={title}
                ref={node => {
                    title = node;
                }}
            />
            <input
                defaultValue={content}
                ref={node => {
                    content = node;
                }}
            />
            <input
                type='file'
                ref={node => {
                    img = node;
                }}
            />
            <button type="submit">{buttonValue}</button>
        </form>
    </div>
    )
}

export default UpdateOrCreateArticleForm;
