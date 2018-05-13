import React from 'react';
import GearDropdown from './dropdown'

const user_homepage = (props) => {

  return (
    <header className='user-page-navbar'>

      <section className='user-nav-left'>
        search here
      </section>


      <GearDropdown user={props.current_user} logout={props.logout}/>


    </header>
  )
}
export default user_homepage;
