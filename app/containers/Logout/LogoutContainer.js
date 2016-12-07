import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Logout } from 'components'
import { logoutAndUnauth } from 'redux/modules/users'

const LogoutContainer = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired,
  },

  componentDidMount () {
    this.props.dispatch(logoutAndUnauth())
  },

  render () {
    return (
     <Logout />
    )
  },
})
// Because there is only 1 argument the container gets dispatch as a prop automatically(?)
export default connect()(LogoutContainer)
