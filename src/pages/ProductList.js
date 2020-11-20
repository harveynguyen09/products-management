import '../App.css';
import { Component } from 'react';
import Menu from '../components/Menu/menu'
import Product_list from '../components/ProductList/Product_list'
import Product_item from '../components/ProductItem/Product_item';
import { connect } from 'react-redux'
import axios from 'axios'
import callAPI from '../utils/apiCaller'
import products from '../reducers/products';
import { Link } from 'react-router-dom';

class ProductListPage extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        callAPI('products','GET',null).then((response)=>{
                let products = response.data
                this.setState({
                    products: products
                })
            })
    }
    onDelete=(id)=>{
        let {products} = this.state
        callAPI(`products/${id}`,'DELETE',null).then((res)=>{
            if(res.status===200){
                let index = this.findIndex(products,id)
                products.splice(index,1)
            }
        })
        .then((res)=>{
            this.setState({
                products:products
            })
        })
    }
    findIndex= (products,id)=>{
        let index = -1;
        for(let i=0;i<products.length;i++){
            if(products[i].id===id){
                index=i
            }
        }
        return index
    }
    render() {
        let {products} = this.state
        return (
            <>
                <Menu />
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Link to="/product/add" className="btn btn-warning mb-10" >Add product</Link>
                    <Product_list>
                        {this.showItem(products)}
                    </Product_list>
                </div>
            </>
        );
    }
    showItem = (products)=>{
        let result = null
        result = products.map((product, index) => {
            return <Product_item
                onDelete={this.onDelete}
                key={index}
                product={product}
                index={index}
            />
        })
        return result
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps, null)(ProductListPage);
