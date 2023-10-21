import gql from "graphql-tag";

const GET_ARTICLE_BY_ID = gql`
query($id: ID) {
  article (id: $id) {
    data {
      attributes {
        article_title
        preamble
        article_body
        publish_date
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

export default GET_ARTICLE_BY_ID;
