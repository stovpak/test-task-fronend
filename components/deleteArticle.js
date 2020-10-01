import React from "react";
import { useMutation } from '@apollo/client';
import DELETE_ARTICLE from '../apollo/queries/deleteArticle';

const DeleteArticleButton = props => {
    let id = props.id;
    let input = {};
    const [deleteArticle] = useMutation(DELETE_ARTICLE);
    return (
        <div>
            <form
                onSubmit={e => {
                    console.log(id);
                    e.preventDefault();
                    input = {
                        "where": {
                            "id": id
                        }
                    }
                    deleteArticle({ variables: {input} });
                    window.location.reload(false);
                }}
            >
                <button type="submit">Delete article</button>
            </form>
        </div>
    );
};

export default DeleteArticleButton;
