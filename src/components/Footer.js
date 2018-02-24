import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

const Footer = (props) => {
  return (
    <div>
      <hr/>
      <ul className='list-inline'>
        {!props.user.isLoged
          ? <li>
            <NavLink exact to='/' activeClassName='bg-success'>
              Log in
            </NavLink>
            </li>
          : null}
        {props.user.isLoged
          ? <li>
            <NavLink activeClassName='bg-success' to='/inspiration'>
              Inspiration
            </NavLink>
            </li>
          : null}
        {props.user.isLoged
          ? <li>
            <NavLink activeClassName='bg-success' to='/favorites'>
              Favorites
            </NavLink>
            </li>
          : null}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.login
  }
};

const connectedItems = connect(mapStateToProps)(Footer);

export {connectedItems as Footer};