import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import withStyle from './Base';
import ButtonFlat from './ButtonFlat';

class Stepper extends React.Component {
  static propTypes = {
    disableBack: PropTypes.bool,
    disableNext: PropTypes.bool,
    active: PropTypes.number,
    steps: PropTypes.number,
    onBack: PropTypes.func,
    onNext: PropTypes.func,
    onChange: PropTypes.func,
    backLabel: PropTypes.string,
    nextLabel: PropTypes.string,
    stepper: PropTypes.element
  };

  static defaultProps = {
    disableBack: false,
    disableNext: false,
    active: 0,
    steps: 1,
    onBack: () => {},
    onNext: () => {},
    onChange: () => {},
    stepper: () => <div style={{ display: 'inline' }} />,
    backLabel: '< Back',
    nextLabel: 'Next >'
  };

  constructor(props) {
    super(props);
    this.state = {
      active: props.active
    };
  }

  onBack = () => {
    const active = this.state.active - 1;
    this.setState(
      {
        active: active > 0 ? active : 0
      },
      () => {
        this.props.onBack(this.state.active);
        this.props.onChange(this.state.active);
      }
    );
  };

  onNext = () => {
    const active = this.state.active + 1;
    this.setState(
      {
        active: active < this.props.steps ? active : this.props.steps - 1
      },
      () => {
        this.props.onBack(this.state.active);
        this.props.onChange(this.state.active);
      }
    );
  };

  onClick = step => {
    this.setState({
      active: step
    });
  };

  render() {
    const Stepper = this.props.stepper;
    return (
      <div>
        <ButtonFlat disabled={this.props.disableBack} onClick={this.onBack}>
          {this.props.backLabel}
        </ButtonFlat>
        <Stepper
          onClick={this.onClick}
          steps={this.props.steps}
          active={this.state.active}
        />
        <ButtonFlat disabled={this.props.disableNext} onClick={this.onNext}>
          {this.props.nextLabel}
        </ButtonFlat>
      </div>
    );
  }
}

export default withStyle(Stepper);
