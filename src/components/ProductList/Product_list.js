import '../../App.css';
import { Component } from 'react';
import Product_item from '../ProductItem/Product_item'

class Product_list extends Component {
    render() {
        return (
            <>
                <div className="panel panel-danger">
                    <div class="panel-heading">
                        <h3 className="panel-title">Products's List</h3>
                    </div>
                    <div className="panel-body">

                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Product's name</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.children}
                            </tbody>
                        </table>

                    </div>
                </div>

            </>
        );
    }
}

export default Product_list;
