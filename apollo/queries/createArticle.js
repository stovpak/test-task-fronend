import { gql } from '@apollo/client';

const CREATE_ARTICLE = gql`
mutation CreateArticle($input: createArticleInput!){
    createArticle(input : $input){
    article{
      id
      title
      content
      image{
        id
      }
    }
  }
}
  
 `

export default CREATE_ARTICLE;
