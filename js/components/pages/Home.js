import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { changePage, timeClicked } from '../../redux/actions'
import Seo from '../../classes/Seo'
import HomeUsers from './HomeUsers'

class Home extends React.Component {
    constructor(props) {
        super(props)
        new Seo().setTitle('Home Page')
        this.props.changePage('Open Home page')
        this.props.timeClicked('Clicked time home')
    }

    render() {
        return (
            <div>
                <h1>I am homepage</h1>
                <div><Link to="/about">Go to about page</Link></div>
                <div><Link to="/users">Go to users page</Link></div>
                <p>Current page: {this.props.myPageIs}</p>
                <p>Time clicked: {this.props.myTimeIs}</p>
                <HomeUsers type="specialTypeUsers" />
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

export default connect(mapStateToProps, { changePage, timeClicked })(Home)