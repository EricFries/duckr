import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { container, navContainer, link } from './styles.css'
import { ModalContainer } from 'containers'

Navigation.propTypes = ActionLinks.propTypes = NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
}

function NavLinks ({ isAuthed }) {
  return isAuthed === true
    ? <ul>
        <li><Link className={link} to='/'>{'Home'}</Link></li>
      </ul>
    : null
}

function ActionLinks ({isAuthed}) {
  return isAuthed === true
    ? <ul>
        <li><ModalContainer /></li>
        <li><Link to='/logout' className={link}>{'Logout'}</Link></li>
      </ul>
    : <ul>
        <li><Link to='/' className={link}>{'Home'}</Link></li>
        <li><Link to='/auth' className={link}>{'Authenticate'}</Link></li>
      </ul>
}

export default function Navigation (props) {
  return (
    <div className={container}>
        <nav className={navContainer}>
            <NavLinks isAuthed={props.isAuthed} />
            <ActionLinks isAuthed={props.isAuthed} />
        </nav>
    </div>
  )
}
