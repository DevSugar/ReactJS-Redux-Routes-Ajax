import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {persons: []}
        this.getUsers()
    }

    getUsers() {
       axios.get('http://react.localhost/backend/get_users.php')
      .then(res => {
        const result = res.data;
        this.setState({ persons: [result] });
      })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
                </ul>
                <div><Link to="/">Back to homepage</Link></div>
            </div>
        )
    }

}

export default Users