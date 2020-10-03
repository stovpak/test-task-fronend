import { gql } from '@apollo/client';

const ADD_ARTICLES_TO_BLOG = gql`
 mutation UpdateBlog($input: updateBlogInput!){
    updateBlog(input : $input){
    blog{
      articles{
        id
      }
    }
    }
}
 `

export default ADD_ARTICLES_TO_BLOG;
