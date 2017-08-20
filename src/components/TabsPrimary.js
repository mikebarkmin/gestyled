import React from 'react';
import styled from 'styled-components';
import { withTheme } from 'styled-components';

import Tabs from './Tabs';

const TabsPrimary = props =>
  <Tabs
    bg={props.theme.colors.primary}
    color={props.theme.colors.primaryText}
    activeColor={props.theme.colors.secondary}
    {...props}
  />;

export default withTheme(TabsPrimary);
