import { gql } from '@apollo/client';

const UPDATE_ARTICLE = gql`
 mutation UpdateArticle($input: updateArticleInput!){
    updateArticle(input: $input){
      article{    
          id
          content
          title
          image{
            id
          }
      }
    }
  }
 `

export default UPDATE_ARTICLE;
