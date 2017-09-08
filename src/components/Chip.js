import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import withStyle from './Base';
import { transparentize } from 'polished';
import PropTypes from 'prop-types';

const StyledChip = withStyle(styled.button`
  height: 32px;
  width: fit-content;
  font-size: ${props => props.theme.fontSizes[0]}px;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  outline: none;
`);

const StyledChipClickable = styled(StyledChip)`
    cursor: pointer;
    &:hover {
        background-color: ${props => transparentize(0.6, props['data-color'])};
    }
`;

const StyledChipText = withStyle(styled.span`
  display: flex;
  align-items: center;
  user-select: none;
  white-space: nowrap;
  padding: 0 12px;
`);

const StyledChipDelete = styled.div`
  display: inline-block;
  height: 24px;
  width: 24px;
  font-size: 14px;
  cursor: pointer;
  color: ${props => props['data-bg']};
  background-color: ${props => transparentize(0.5, props['data-color'])};
  font-weight: 800;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${props => transparentize(0.6, props['data-color'])};
  }
`;

const Chip = ({ children, onClick, onDelete, bg, color, ...props }) => {
  let deleteButton = null;
  if (onDelete) {
    deleteButton = (
      <StyledChipDelete data-bg={bg} data-color={color} onClick={onDelete}>
        ❌
      </StyledChipDelete>
    );
  }
  if (onClick) {
    return (
      <StyledChipClickable
        data-color={color}
        onClick={onClick}
        bg={bg}
        {...props}
      >
        <StyledChipText color={color}>{children}</StyledChipText> {deleteButton}
      </StyledChipClickable>
    );
  }
  return (
    <StyledChip bg={bg} {...props}>
      <StyledChipText color={color}>{children}</StyledChipText> {deleteButton}
    </StyledChip>
  );
};

Chip.defaultProps = {
  bg: 'lightgrey',
  color: 'black'
};

Chip.propTypes = {
  /** background color */
  bg: PropTypes.string,
  /** text color */
  color: PropTypes.string,
  /** is called when the chip is clicked */
  onClick: PropTypes.func,
  /** is called when the delete button is clicked */
  onDelete: PropTypes.func
};

export default Chip;
