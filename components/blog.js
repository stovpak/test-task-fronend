import React from "react";
import Query from "../components/query";
import CONTENT_QUERY from "../apollo/queries/content";

const Blog = () => {
    return (
        <div>
            <Query query={CONTENT_QUERY} id={null}>
                {({ data: { blog } }) => {
                    const articles = blog.articles;
                        return (
                            <div className='content'>
                                {articles.map(article => {
                                    return(
                                        <div className='article'>
                                            <h2 className='article-title'>{article.title}</h2>
                                            <p className='article-content'>{article.content}</p>
                                            <img className='article-img' src={'http://localhost:1337' + article.image[0].url}></img>
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
