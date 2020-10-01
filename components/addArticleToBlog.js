import React from "react";

function addArticleToBlog(input,articleId,articleIds, functionType){
    articleIds.push(articleId)
    input = {
        "data": {
            "articles":articleIds
        }
    }
    functionType({variables: {input}});
};

export default addArticleToBlog;
