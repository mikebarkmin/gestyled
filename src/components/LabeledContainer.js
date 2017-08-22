import React from 'react';
import PropTypes from 'prop-types';
import withStyle from './Base';

const LabeledContainer = props =>
  <div>
    {props.children}
  </div>;

LabeledContainer.propTypes = {
  /** Label which will be used for the tab */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default withStyle(LabeledContainer);
