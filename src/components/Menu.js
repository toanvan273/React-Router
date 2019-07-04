import React from 'react';
import { Route, Link } from "react-router-dom";

const menus = [
    {
        name: 'Trang Chủ',
        to: "/",
        exact: true
    },
    {
        name: 'Giới thiệu',
        to: "/about",
        exact: false
    },
    {
        name: 'Liên hệ',
        to: "/contact",
        exact: false
    },
    {
        name: 'Sản phẩm',
        to: "/products",
        exact: false
    },
    {
        name: 'Đăng nhập',
        to: "/login",
        exact: false
    }
]
const MenuLink = ({ label, to, activeWhenExact }) => {
    return (
        <Route path={to} exact={activeWhenExact} children={({ match }) => {
            var active = match ? 'active abc' : '';
            return (
                <li className={`my-li ${active}`}>
                    <Link to={to}>{label}</Link>
                </li>
            )
        }} />
    )
}
class Menu extends React.Component {
    showMenu = menus => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={index} label={menu.name} to={menu.to} activeWhenExact={menu.exact} />
                )
            })
        }
        return result
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    { this.showMenu(menus)}
                </ul>
            </nav>
        )
    }
}

export default Menu;
