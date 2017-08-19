import React from 'react';
import PropTypes from 'prop-types';

const Tab = props =>
  <div>
    {props.children}
  </div>;

Tab.PropTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  label: PropTypes.string
};

export default Tab;
