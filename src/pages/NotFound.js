import '../App.css';
import { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <>
                
                <div className="alert">
                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>Page's not found</strong> Alert body ...
                </div>
                
            </>
        );
    }
}

export default NotFound;
