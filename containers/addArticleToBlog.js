import React from "react";

function addArticleToBlog(articleId,articleIds, functionType){
    articleIds.push(articleId)
    let input = {
        "data": {
            "articles":articleIds
        }
    }
    functionType({variables: {input}});
}

export default addArticleToBlog;
