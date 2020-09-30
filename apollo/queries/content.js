import gql from "graphql-tag";

const CONTENT_QUERY = gql`
  query Content {
    blog {
      articles {
        title, 
        content,
        image {
           url
        }
      }
    }
 }
  
`;

export default CONTENT_QUERY;
