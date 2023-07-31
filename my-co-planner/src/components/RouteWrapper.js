import React from "react";

const RouteWrapper = ({ component: Component, ...rest }) => {
    return <Component {...rest} />;
  }

export default RouteWrapper;


