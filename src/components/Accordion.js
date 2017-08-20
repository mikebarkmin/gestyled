import React from 'react';
import styled from 'styled-components';
import LabeledContainer from './LabeledContainer';
import PropTypes from 'prop-types';
import withStyle from './Base';
import Paper from './Paper';

const StyledAccordion = styled(Paper)`
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

const StyledAccordionBodyAnimated = withStyle(styled.div`
  border-bottom: 1px solid #ddd;
  transform-origin: top;
  overflow: hidden;
  padding: ${props => (props.active ? '12px' : '0')};
  padding-left: 12px;
  max-height: ${props => (props.active ? '2000px' : '0')};
`);

const StyledAccordionBody = withStyle(styled.div`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  transform-origin: top;
  overflow: hidden;
`);

class Accordion extends React.Component {
  static propTypes = {
    /** Array of LabeledContainers */
    children: PropTypes.arrayOf(
      (propValue, key, componentName, location, propFullName) => {
        if (!propValue[key].props.hasOwnProperty('label')) {
          return new Error(
            'Invalid prop `' +
              propFullName +
              '` supplied to' +
              ' `' +
              componentName +
              '`. Validation failed. Child components need a label prop.'
          );
        }
      }
    ),
    /** Active accordion item, otherwise all will be closed */
    active: PropTypes.number,
    /** Shadow level of Paper component */
    level: PropTypes.number,
    /** If the accordion should be animated. Caution this uses the css max-height hack for animation */
    animated: PropTypes.bool
  };
  static defaultProps = {
    active: -1,
    level: -1,
    animated: false
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
    const { children, level } = this.props;
    const entries = children.map((child, i) =>
      <div key={i}>
        <StyledAccordionHead onClick={() => this.onChangeActive(i)}>
          {child.props.label}
        </StyledAccordionHead>
        {this.props.animated
          ? <StyledAccordionBodyAnimated active={i === this.state.active}>
              {child.props.children}
            </StyledAccordionBodyAnimated>
          : this.state.active === i
            ? <StyledAccordionBody>
                {child.props.children}
              </StyledAccordionBody>
            : ''}
      </div>
    );
    return (
      <StyledAccordion level={level}>
        {entries}
      </StyledAccordion>
    );
  }
}

export default Accordion;
