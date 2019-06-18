import React from 'react';
import {
    Link,
    useStaticQuery,
    graphql,
} from 'gatsby';
import { Overlay } from '../styles/OverlayMenuStyles';
import Cross from '../../images/close.png';
import Logo from '../../images/logo_wh.png';

const OverlayMenu = ({
    menuOpen,
    callback,
}) => {
    const { menu: { edges: [ { node: menu } ] }} = useStaticQuery(
        graphql`
            query OverlyaMenu {
                menu: allWordpressWpApiMenusMenusItems(
                    filter: { wordpress_id: { eq: 3 }}
                ) {
                    totalCount
                    edges {
                        node {
                            items {
                                title
                                url
                            }
                        }
                    }
                }
            }
        `
    )
    return (
        <Overlay menuOpen={menuOpen}>
            <div className="inner">
                <img className="whiteLogo" src={Logo} alt="Logo" />
                <ul className="overlayMenu">
                    {menu.items.map((item, i) => (
                        <li key={i}>
                            <Link to={item.url} activeClassName="overlayActive">
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div
                    className="closeButton"
                    onClick={callback}
                    role="button"
                    tabIndex="0"
                    onKeyDown={callback}
                >
                    <img src={Cross} alt="close" />
                </div>
            </div>
        </Overlay>
    )
}
export default OverlayMenu;
