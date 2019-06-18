import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import CTA from './CTA';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

const CTAImages = () => {
    const {
        edges: {
            node,
        },
    } = useStaticQuery(graphql`
        query {
            allWcProducts (
              filter: {
                featured: { eq: true}
              }
              limit: 3
            ){
              edges {
                node {
                  id
                  wordpress_id
                  name
                  categories {
                    wordpress_id
                  }
                  sku
                  price
                  images {
                    src
                    alt
                  }
                  permalink
                  short_description
                }
              }
            }
          }
    `)
    console.log('CTA: ', node);
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <CTA
                            image={node.images[0].src}
                            link={node.permalink}
                            text={node.short_dexcription}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default CTAImages;
