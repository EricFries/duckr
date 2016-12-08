import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Modal } from 'components'
import * as modalActionCreators from 'redux/modules/modal'

function mapStateToProps ({ modal, users }, props) {
  const duckTextLength = modal.duckText.length
  return {
    user: users[users.authedId] ? users[users.authedId].info : {},
    duckText: modal.duckText,
    isOpen: modal.isOpen,
    isSubmitDisabled: duckTextLength <= 0 || duckTextLength > 140,
  }
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators(modalActionCreators, dispatch)
}

//We don't need the container because it no longer has any lifecycle events.
//and because we can direclty pass the props to Modal using connect.
//We can simply pass everything to Modal.

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal)
