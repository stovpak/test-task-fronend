import React from "react";
import { useMutation } from '@apollo/client';
import DELETE_ARTICLE from '../apollo/queries/deleteArticle';
import deleteArticle from "../containers/deleteArticle";

const DeleteArticleButton = props => {
    let id = props.id;
    const [deleteArticleQuery] = useMutation(DELETE_ARTICLE);
    return (
        <div className='delete-article'>
            <form
                onSubmit={e => {
                    e.preventDefault();
                   deleteArticle({"where": {"id": id}}, deleteArticleQuery);
                }}
            >
                <button type="submit">Delete article</button>
            </form>
        </div>
    );
};

export default DeleteArticleButton;
