import '../../App.css';
import React,{ Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Home',
        exact: true,
        to: '/'
    },
    {
        name: 'Products',
        exact: false,
        to: '/product'
    }
]
const MenuLink = ({label, to, activeWhenExact}) => {
    return <Route
        path={to}
        exact={activeWhenExact}
        children={({ match }) => {
            let active = match ? 'active' : ''
            return (
                <li className={active}>
                    <Link to={to}>
                        {label}
                    </Link>
                </li>
            )
        }}
    />
}

class Menu extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-inverse">
                    <ul className="nav navbar-nav">
                        {this.showMenu(menus)}
                    </ul>
                </nav>
            </>
        );
    }
    showMenu=(menus)=>{
        let result = '';
        if(menus.length>0){
            result = menus.map((menu,index)=>{
                return <MenuLink
                    key={index}
                    label={menu.name}
                    to={menu.to}
                    activeWhenExact={menu.exact}
                />
            })
        }
        return result
    }
}

export default Menu;
