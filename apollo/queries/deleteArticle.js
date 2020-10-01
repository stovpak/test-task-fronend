import { gql } from '@apollo/client';

const DELETE_ARTICLE = gql`
 mutation DeleteArticle($input: deleteArticleInput!){
    deleteArticle(input: $input){
    article{
      id
    }
  }
}
  
 `

export default DELETE_ARTICLE;
