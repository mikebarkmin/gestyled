import React from 'react';
import styled from 'styled-components';
import { darken, transparentize } from 'polished';
import withStyle from './Base';
import PropTypes from 'prop-types';
import LabeledContainer from './LabeledContainer';

const StyledTabs = styled.div`
  display: flex;
  white-space: nowrap;
  background-color: ${props => props.theme.colors.primary};
  width: 100%;
`;

const StyledTabButton = withStyle(styled.button.attrs({
  type: 'button'
})`
    box-sizing: border-box;
    border: 10px;
    height: 48px;
    outline: none;
    background: none;
    cursor: pointer;
    color: ${props =>
      props.active
        ? props.theme.colors.primaryText
        : transparentize(0.5, props.theme.colors.primaryText)};
    font-size: ${props => props.theme.fontSizes[1]}px;
    font-weight: ${props => props.theme.fontWeights[1]};
    display: inline-block;
    width: ${props => props.width * 100}%;
    shadow-box: none;
    border-radius: 0;
    border-bottom: ${props =>
      props.active ? `4px solid ${props.theme.colors.secondary}` : ''};

    &:hover {
        background-color: ${props => darken(0.08, props.theme.colors.primary)};
    }
`);

class Tabs extends React.Component {
  static propTypes = {
    /** Array of LabeledContainers */
    children: PropTypes.arrayOf(PropTypes.instanceOf(LabeledContainer)),
    /** activate a specific tab, otherwise the first one will be opened */
    active: PropTypes.number
  };
  static propTypes = {
    active: 0
  };
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }
  onChangeActive = i => {
    this.setState({
      active: i
    });
  };
  render() {
    const { children } = this.props;
    const tabWidth = 1 / children.length;
    const tabButtons = children.map((child, i) =>
      <StyledTabButton
        key={i}
        active={i === this.state.active}
        width={tabWidth}
        onClick={() => this.onChangeActive(i)}
      >
        {child.props.label}
      </StyledTabButton>
    );
    return (
      <div>
        <StyledTabs>
          {tabButtons}
        </StyledTabs>
        {children[this.state.active]}
      </div>
    );
  }
}

export default Tabs;
