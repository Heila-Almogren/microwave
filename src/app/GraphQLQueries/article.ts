import gql from "graphql-tag";

const ARTICLE = gql`
query($id: ID) {
  article (id: $id) {
    data {
      attributes {
        article_title
        article_body
        publish_date
      }
    }
  }
}
`
;

export default ARTICLE;
