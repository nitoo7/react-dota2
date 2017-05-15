import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { fetchUserData, userLogout } from '../action/loginAction'
import { fetchData } from '../action/fetchAction'
import Login from '../component/login/login'
import Dashboard from '../component/Dashboard/dashboard'

const PrivateRouter = ({path, Component, isloggedIn, actions, history}) => {
    console.log('FFFFFFFFFF++++++>', actions)
    return (<Route path={path} render={() => isloggedIn ? <Component
    actions= {actions} onSubmit={actions} history={history}/>
    : <Redirect to="/login"/>} />)
}

class App extends Component {
    static propTypes = {
        isloggedIn: PropTypes.bool.isRequired,
        history: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }
    handleLogin = (username, password) => {
        const {dispatch} = this.props
        dispatch(fetchUserData(username, password))
    }
    handleLogout = () => {
        const {dispatch} = this.props
        dispatch(userLogout())
    }
    
    fetchDotaData = () => {
        console.log('triggered.')
        const {dispatch} = this.props;
        dispatch(fetchData())
    }
    
    componentWillMount() {
        this.fetchDotaData();
    }
    
    render() {
        const {isloggedIn, history} = this.props
        return (
            <div>
                <Redirect from="/" to="/login"/>
                <Route path='/login' render={() =>
                    <Login onSubmit={this.handleLogin} isLoggedIn={isloggedIn} history={history}/>
                } />
                <PrivateRouter path="/dashboard" Component={Dashboard} 
                    actions={this.fetchDotaData} isloggedIn={isloggedIn} history={history}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isloggedIn: state.login.isloggedIn
})

export default connect(
  mapStateToProps
)(App)
