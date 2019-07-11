import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const NavLinks = (props) => {
  return(
    <>
      <Menu.Item>
        <Link className="item font-heading" to="/#skills"  onClick={props.toggleSidebar}> SKILLS </Link>
      </Menu.Item>
      <Menu.Item>
        <Link className="item font-heading" to="/#jobs"    onClick={props.toggleSidebar}> JOBS   </Link>
      </Menu.Item>
      <Menu.Item>
        <Link className="item font-heading" to="/#github"  onClick={props.toggleSidebar}> GITHUB </Link>
      </Menu.Item>
      <Menu.Item>
        <Link className="item font-heading" to="/#contact" onClick={props.toggleSidebar}> CONTACT</Link>
      </Menu.Item>
    </>
  )
}

export default NavLinks