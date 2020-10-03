import React from "react";

function updateOrCreateArticle(title, content, imgId, where, functionType){
    let input = {
        "data": {
            "title": title,
            "content": content,
            "image": imgId
        }
    }
    Object.assign(input, where);
    return functionType({ variables: {input} });
}

export default updateOrCreateArticle;
