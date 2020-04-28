import React from 'react'
import {Route} from 'react-router-dom'
import Homepage from '../components/pages/Home'
import Aboutpage from '../components/pages/About'
import Userspage from '../components/users/Users'

export default [
    <Route exact key="Home" path="/" component={Homepage} />,
    <Route key="About" path="/about" component={Aboutpage} />,
    <Route key="Users" path="/users" component={Userspage} />
]