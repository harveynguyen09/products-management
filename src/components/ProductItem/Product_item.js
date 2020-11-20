import '../../App.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class Product_item extends Component {
    render() {
        let { product } = this.props
        let statusName = product.status ? 'InStock' : 'OutStock'
        let statusClass = product.status?"label label-danger":'label label-info'
        return (
            <>
                <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>

                        <span class={statusClass}>{statusName}</span>

                    </td>
                    <td>

                        <Link to={`/product/${product.id}/edit`} class="btn btn-success mr-10" >Edit</Link>

                        <button type="button" class="btn btn-primary" onClick={()=>this.onDelete(product.id)}>Delete</button>


                    </td>
                </tr>

            </>
        );
    }
    onDelete = (id)=>{
        if(confirm('Are you sure to delete')){//eslint-disable-line
            this.props.onDelete(id)
        }
    }
}

export default Product_item;
