import gql from "graphql-tag";

const MAIN_ARTICLES_QUERY = gql`
query {
  articles(sort: "publish_date:desc", pagination: { limit: 5 }) {
    data {
      id
      attributes {
        slug
        article_title
        preamble
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

export default MAIN_ARTICLES_QUERY;
