import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { fetchData } from '../action/fetchAction'
import Dashboard from '../component/Dashboard/dashboard'

class App extends Component {
    render() {
        return (<Dashboard />)
    }
}

const mapStateToProps = (state) => ({

})

export default connect(
  mapStateToProps
)(App)
