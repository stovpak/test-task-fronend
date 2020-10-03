import React from "react";

function deleteArticle(where, deleteArticleQuery){
    let input = where;
    deleteArticleQuery({ variables: {input} });
    window.location.reload(false);
}

export default deleteArticle;
