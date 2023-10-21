import gql from "graphql-tag";

const GET_ARTICLES_BY_IDS = gql`
query($ids: [ID]) {
  articles (filters: {id: {in: $ids}}) {
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
export default GET_ARTICLES_BY_IDS;
