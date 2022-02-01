import gql from "graphql-tag";
const MAIN_ARTICLE_QUERY = gql`
query {
  articles(sort: "publish_date:desc", pagination: { limit: 1 }) {
    data {
      attributes {
        article_title
        article_body
        main_image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
`;

export default MAIN_ARTICLE_QUERY;
