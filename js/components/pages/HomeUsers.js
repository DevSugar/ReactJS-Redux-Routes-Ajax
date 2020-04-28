import React from 'react'

class HomeUsers extends React.Component {
    constructor(props) {
        super(props)
        console.log(props.type)
    }

    render() {
        return <p>{this.props.type}</p>;
    }
}

export default HomeUsers
