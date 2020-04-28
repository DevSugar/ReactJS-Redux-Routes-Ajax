import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import routes from '../../routes/common'
import Header from '../_parts/Header'
import Footer from '../_parts/Footer'

class LayoutPublic extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header />
                <Router>
                    {routes}
                </Router>
                <Footer />
            </div>
        )
    }
}

export default LayoutPublic