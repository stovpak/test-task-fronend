import React from "react";
import Query from "../components/query";
import CONTENT_QUERY from "../apollo/queries/content";
import PopUpMenu from "./popUpMenu";
import DeleteArticleButton from "./deleteArticleForm";

const Blog = () => {
    return (
        <div className="row justify-content-center align-items-center">
            <Query query={CONTENT_QUERY} id={null}>
                {({ data:  {blog}  }) => {
                    const articles = blog.articles;
                    const articleIds = [];
                        return (
                            <div className='content'>
                                <PopUpMenu id = {null} title = {null} content = {null} imgId={null} buttonValue={"Create article"} type={'create'} articleIds={articleIds} submitButtonValue={'Create'}/>
                                {articles.map(article => {
                                    {articleIds.push(article.id)}
                                    return(
                                    <div key={article.id} className='article'>
                                        <h2 className='article-title'>{article.title}</h2>
                                            <p className='article-content'>{article.content}</p>
                                            <img className='article-img' src={'http://localhost:1337' + article.image[0].url}></img>
                                            <PopUpMenu id = {article.id} title = {article.title} content = {article.content} imgId={article.image[0].id} buttonValue={"Update article"} type={'update'} submitButtonValue={'Update'}/>
                                            <DeleteArticleButton id = {article.id}/>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                }}
            </Query>
        </div>
    );
};

export default Blog;
