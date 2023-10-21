import gql from "graphql-tag";

const ABOUT_CHEF = gql`
query {
   aboutChef {
        data {
      attributes {
        summary
      }
      }
    }
  }
`
;
export default ABOUT_CHEF;
