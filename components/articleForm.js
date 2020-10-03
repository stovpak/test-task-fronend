import React from "react";
import {useMutation} from "@apollo/client";
import UPDATE_ARTICLE from "../apollo/queries/updateArticle";
import CREATE_ARTICLE from "../apollo/queries/createArticle";
import ADD_ARTICLES_TO_BLOG from "../apollo/queries/addArticleToBlog";
import articleFromRequest from "../containers/articleFormRequest";

const ArticleForm = props => {
    let {id, title, content, imgId, type, articleIds} = props;
    let img;
    let buttonValue = type === 'create' ? 'Create' : 'Update';
    const [updateArticleQuery] = useMutation(UPDATE_ARTICLE);
    const [createArticleQuery] = useMutation(CREATE_ARTICLE);
    const [addArticleToBlogQuery] = useMutation(ADD_ARTICLES_TO_BLOG);
    return(
    <div className='update-or-create-article'>
        <form
            onSubmit={e => {
                e.preventDefault();
                articleFromRequest(id, content, title, imgId, img, articleIds, updateArticleQuery, createArticleQuery, addArticleToBlogQuery, type);
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

export default ArticleForm;
