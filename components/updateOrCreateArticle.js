import React from "react";

function updateOrCreateArticle(input, functionType){
    console.log(input);
    return functionType({ variables: {input} });
};

export default updateOrCreateArticle;
