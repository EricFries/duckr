import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer, FeedContainer, LogoutContainer } from 'containers'

export default function getRoputes (checkAuth) {
  return (
      <Router history={hashHistory}>
          <Router path='/' component ={MainContainer}>
              <route path='auth' component={AuthenticateContainer} onEnter={checkAuth}/>
              <route path='feed' component={FeedContainer} onEnter={checkAuth}/>
              <route path='logout' component={LogoutContainer} />
              <IndexRoute component={HomeContainer} onEnter={checkAuth}/>
          </Router>
      </Router>
  )
}
