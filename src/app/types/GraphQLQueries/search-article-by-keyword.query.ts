import gql from "graphql-tag";

const SEARCH_ARTICLES_BY_KEYWORD = gql`
            query SearchArticle($filters:ArticleFiltersInput!){
                articles(filters: $filters) {
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
export default SEARCH_ARTICLES_BY_KEYWORD;
