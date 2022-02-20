import gql from "graphql-tag";

const Articles_ids = gql`
query {
  articles {
    data {
      id
    }
  }
}
`
;

export default Articles_ids;
