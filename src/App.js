import './App.css';
import { Component } from 'react';
import Menu from './components/Menu/menu'
import Product_list from './components/ProductList/Product_list'
import routes from './routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <>
                <Router>
                    {/* <Menu /> */}
                    {/* <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                         <button type="button" className="btn btn-warning mb-10">Add product</button>
                         <Product_list/>  
                    </div> */}
                    {this.showContent(routes)}
                </Router>
            </>
        );
    }
    showContent = (routes) => {
        let result = '';
        result = routes.map((route, index) => {
            return <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
            />
        })
        return <Switch>{result}</Switch>
    }
}

export default App;
