import gql from "graphql-tag";

const Articles_ids = gql`
query {
  articles(pagination: { limit: 100 }) {
    data {
      id
    }
  }
}
`
;

export default Articles_ids;
