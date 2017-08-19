import React from 'react';
import styled from 'styled-components';
import LabeledContainer from './LabeledContainer';
import PropTypes from 'prop-types';
import withStyle from './Base';

const StyledAccordion = styled.div`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #ddd;
`;

const StyledAccordionHead = withStyle(styled.div`
  cursor: pointer;
  display: flex;
  box-sizing: border-box;
  font-size: ${props => props.theme.fontSizes[1]};
  font-weight: ${props => props.theme.fontWeights[1]};
  outline: none;
  padding: 12px;
  border-bottom: 1px solid #ddd;
`);

const StyledAccordionBody = withStyle(styled.div`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`);

class Accordion extends React.Component {
  static propTypes = {
    /** Array of LabeledContainers */
    children: PropTypes.arrayOf(PropTypes.instanceOf(LabeledContainer)),
    /** Active accordion item, otherwise all will be closed */
    active: PropTypes.number
  };
  static defaultProps = {
    active: -1
  };

  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    };
  }
  onChangeActive = i => {
    let nextI = i;
    if (i === this.state.active) {
      nextI = -1;
    }
    this.setState({
      active: nextI
    });
  };
  render() {
    const { children } = this.props;
    const entries = children.map((child, i) =>
      <div key={i}>
        <StyledAccordionHead onClick={() => this.onChangeActive(i)}>
          {child.props.label}
        </StyledAccordionHead>
        {this.state.active === i
          ? <StyledAccordionBody>
              {child.props.children}{' '}
            </StyledAccordionBody>
          : ''}
      </div>
    );
    return (
      <StyledAccordion>
        {entries}
      </StyledAccordion>
    );
  }
}

export default Accordion;
