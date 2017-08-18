import React from 'react';
import styled from 'styled-components';
import withStyle from './Base';

const StyledRelative = styled.div`position: relative;`;

const Relative = props => <StyledRelative {...props} />;

export default withStyle(Relative);
