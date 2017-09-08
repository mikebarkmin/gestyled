import React from 'react';
import withStyle from './Base';

let reactRouterDom;
try {
  reactRouterDom = require('react-router-dom');
} catch (e) {}

const A = ({ href, ...props }) => {
  if (reactRouterDom && Link in reactRouterDom && !('http' in href)) {
    const Link = reactRouterDom.Link;
    return <Link to={href} {...props} />;
  }
  return <a href={href} {...props} />;
};

export default withStyle(A);
