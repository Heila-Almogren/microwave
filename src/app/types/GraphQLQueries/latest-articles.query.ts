import gql from "graphql-tag";

const LATEST_ARTICLES_QUERY = gql`
    query($max:Int) {
        articles(sort: "publish_date:desc", pagination: { limit: $max }) {
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
`;

export default LATEST_ARTICLES_QUERY;
