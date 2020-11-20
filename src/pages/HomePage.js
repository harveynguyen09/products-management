import '../App.css';
import { Component } from 'react';
import Menu from '../components/Menu/menu'

class HomePage extends Component {
    render() {
        return (
            <>
                <Menu/>


                <div class="container">
                    <h1>Đây là trang chủ</h1>
                </div>
            </>
        );
    }
}

export default HomePage;
