import React, { PropTypes } from 'react'
import { Authenticate } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// Creates an object with everything exported form file as a property
import * as userActionCreators from 'redux/modules/users'

const AuthenticateContainer = React.createClass({
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    fetchAndHandleAuthUser: PropTypes.func.isRequired,
  },

  contextTypes: {
    router: PropTypes.object.isRequired,
  },

  handleAuth (e) {
    e.preventDefault();
    this.props.fetchAndHandleAuthUser()
      .then(() => { this.context.router.replace('feed') })
  },

  render () {
    console.log(this.props.isFetching)
    return (
      <Authenticate
        isFetching={false}
        error=''
        onAuth={this.handleAuth}/>
    )
  },
})

function mapStateToProps (state) {
  console.log(state)
  return {
    isFetching: state.isFetching,
    error: state.error,
  }
}

// This binds the dispatch function to the userActionCreators object and makes
// the resulting function available as props.
// The first argument must be an object whose values are
// action creators.  that's why we import like we do above.
function mapDispatchToProps (dispatch) {
  return bindActionCreators(userActionCreators, dispatch)
}
// Connect returns a function, that functiono accepts
// a component as an argument.
// mapStateToProps just passes in the parts of the state the component
// needs as props.
export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer)
