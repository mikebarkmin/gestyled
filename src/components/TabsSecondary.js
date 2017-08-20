import React from 'react';
import styled from 'styled-components';
import { withTheme } from 'styled-components';

import Tabs from './Tabs';

const TabsSecondary = props =>
  <Tabs
    bg={props.theme.colors.secondary}
    color={props.theme.colors.secondaryText}
    activeColor={props.theme.colors.primary}
    {...props}
  />;

export default withTheme(TabsSecondary);
