import gql from "graphql-tag";

const ALL_ARTICLES_IDS = gql`
query {
  articles(pagination: { limit: 100 }) {
    data {
      id
    }
  }
}
`
;

export default ALL_ARTICLES_IDS;
