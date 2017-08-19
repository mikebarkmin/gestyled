import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledEmbed = styled.div`
  height: 0;
  padding: 0;
  position: relative;
  padding-bottom: ${props => props.ratio * 100}%;
  overflow: hidden;
  & > iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border: 0;
  }
`;

const Embed = props => <StyledEmbed {...props} />;

Embed.propTypes = {
  /** Ratio of the embeded content. */
  ratio: PropTypes.number
};

Embed.defaultProps = {
  ratio: 9 / 16
};

export default Embed;
