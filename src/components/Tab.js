import React from 'react';
import PropTypes from 'prop-types';

const Tab = props =>
  <div>
    {props.children}
  </div>;

Tab.propTypes = {
  /** Label which will be used for the tab */
  label: PropTypes.string
};

export default Tab;
