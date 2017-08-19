import React from 'react';
import PropTypes from 'prop-types';

const LabeledContainer = props =>
  <div>
    {props.children}
  </div>;

LabeledContainer.propTypes = {
  /** Label which will be used for the tab */
  label: PropTypes.string
};

export default LabeledContainer;
