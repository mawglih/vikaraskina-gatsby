import React from 'react';
import {
    graphql,
    Link,
    useStaticQuery,
} from 'gatsby';
import Navigation from '../Navigation';
import logo from '../../images/logo_blue.png';
import { HeaderWrapper } from '../styles/HeaderStyles';

const Header = () => {
    const {
        site,
        menu: {
            edges: [{ node: menu }],
        },
    } = useStaticQuery(graphql`
        query HeaderQuery {
            site {
                siteMetadata {
                    title
                }
            }
            menu: allWordpressWpApiMenusMenusItems(
                filter: { wordpress_id: { eq: 3 }}
            ) {
                totalCount
                edges {
                    node {
                        items {
                            title
                            url
                            wordpress_children {
                                title
                                url
                            }
                        }
                        name
                    }
                }
            }
        }
    `)
    return (
        <HeaderWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/">
                            <img src={logo} alt={site.siteMetadata.title} />
                        </Link>
                    </div>
                    <div className="col-md-8 menu">
                        <Navigation menu={menu} />
                    </div>
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default Header;
