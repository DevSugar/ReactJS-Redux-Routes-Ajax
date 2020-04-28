import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { changePage, timeClicked } from '../../redux/actions'
import Seo from '../../classes/Seo'

class About extends React.Component {
    constructor(props) {
        super(props)
        new Seo().setTitle('About Us Page')
        this.props.changePage('Open About page')
        this.props.timeClicked('Clicked time about')
    }

    render() {
        return (
            <div>
                <h1>I am aboutpage</h1>
                <Link to="/">Go to home page</Link>
            </div>
        );
    }
}

export default connect(
    null,
    { changePage, timeClicked }
)(About)
  