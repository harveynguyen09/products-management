import '../App.css';
import { Component } from 'react';
import Menu from '../components/Menu/menu'
import Product_list from '../components/ProductList/Product_list'
import Product_item from '../components/ProductItem/Product_item';
import callAPI from '../utils/apiCaller'
import { Link } from 'react-router-dom';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }
    componentDidMount() {
        let { match } = this.props
        if (match) {
            let id = match.params.id
            callAPI(`/products/${id}`, 'GET', null).then(res => {
                let data = res.data
                this.setState({
                    id: data.id,
                    txtName: data.name,
                    txtPrice: data.price,
                    chkbStatus: data.status
                })
            })

        }
    }
    render() {
        let products = []

        return (
            <>
                <Menu />
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                    <form onSubmit={this.onSave}>
                        <div class="form-group">
                            <label >Product's name</label>
                            <input type="text" class="form-control" name='txtName' onChange={this.onChange} value={this.state.txtName} />
                        </div>
                        <div class="form-group">
                            <label >Product's price</label>
                            <input type="number" class="form-control" name='txtPrice' onChange={this.onChange} value={this.state.txtPrice} />
                        </div>
                        <div class="form-group">
                            <label >Product's status</label>

                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name='chkbStatus' onChange={this.onChange} checked={this.state.chkbStatus} />
                                    Instock
                                </label>
                            </div>

                        </div>
        <button type="submit" class="btn btn-primary mr-10" >{this.state.id===''?'Submit':'Update'}</button>
                        <Link to="/product" className="btn btn-danger">Go back</Link>
                    </form>

                </div>

            </>
        );
    }
    onChange = (e) => {
        let target = e.target
        let name = target.name
        let value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        })
    }
    onSave = (e) => {
        e.preventDefault();
        let {id, txtName, txtPrice, chkbStatus } = this.state
        if(id!==""){
            callAPI(`products/${id}`, 'PUT', {
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }).then((res) => {
                let { history } = this.props
                history.push('/product')
            })
        }else{
            callAPI('products','POST', {
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }).then((res) => {
                let { history } = this.props
                history.push('/product')
            })
        }
        
    }
}

export default ProductActionPage;
