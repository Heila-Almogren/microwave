import gql from "graphql-tag";

const ARTICLE = gql`
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

export default ARTICLE;
