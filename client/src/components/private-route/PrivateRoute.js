import React from "react";
import { Router, Redirect } from "react-router-dom";
import { connect } from "rect-redux";
import PropTypes from "prop-types";
import { Component } from "react";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props => auth.isAuthenticated === true ? (
            <Component {...props} />
        ) : (
            <Redirect to="/login" />
        )
      }
   />
);

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
    auth: state.auth
});

export default connect(mapStatetoProps)(PrivateRoute);
