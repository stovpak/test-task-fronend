import gql from "graphql-tag";

const CONTENT_QUERY = gql`
  query Content {
    blog {
      articles {
        id,
        title, 
        content,
        image {
           id
           url
        }
      }
    }
 }
  
`;

export default CONTENT_QUERY;
