import React from 'react';
import styled from 'styled-components';
import withStyle from './Base';

const StyledContainer = styled.div``;

const Container = props => <StyledContainer {...props} />;

export default withStyle(Container);
