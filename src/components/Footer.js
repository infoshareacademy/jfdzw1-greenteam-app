import React, {Component} from 'react';
import {connect} from 'react-redux';

import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render () {
        return (
            <div>
                <hr/>

                <ul className="list-inline">
                    <li>
                        <NavLink exact to={"/"} activeClassName="bg-success">
                            Log in
                        </NavLink>
                    </li>



                    {this.props.user.isLoged ?
                        <li>
                            <NavLink activeClassName="bg-success" to={"/inspiration"}>
                                Inspiration
                            </NavLink>
                        </li>
                        :
                        null
                    }

                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.login
    }
};

const connectedItems = connect(mapStateToProps)(Footer);

export {connectedItems as Footer};