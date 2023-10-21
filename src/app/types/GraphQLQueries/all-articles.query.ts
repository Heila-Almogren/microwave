import gql from "graphql-tag";

const ALL_ARTICLES_QUERY = gql`
query($offset: Int) {
  articles(sort: "id:asc", pagination: { limit: 4, start: $offset}) {
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
`
;
export default ALL_ARTICLES_QUERY;


