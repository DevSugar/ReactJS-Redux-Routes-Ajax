import React from 'react';
import { connect } from 'react-redux'
import './Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'world'
        }
    }
    
    render() {
        return (
            <div className="header">
                <h1>Header</h1>
                <p>Current page: {this.props.myPageIs}</p>
                <p>Time clicked: {this.props.myTimeIs}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return Object.assign({}, state, {
        myPageIs: state.pages.pageName,
        myTimeIs: state.timeClicked.time
    });
};

export default connect(mapStateToProps)(Header)