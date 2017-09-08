import React from 'react';
import styled from 'styled-components';
import A from './A';
import withStyle from './Base';
import InlineBox from './InlineBox';
import { transparentize } from 'polished';
import PropTypes from 'prop-types';

const StyledBreadcrumb = styled(A)`
  text-decoration: none;
  color: ${props =>
    props['data-active'] ? props.color : transparentize(0.4, props.color)};

  &:first-child:before {
      content: '';
      margin: 0 0;
  }

  &:before {
    content: '>';
    color: ${props => transparentize(0.4, props.color)};
    vertical-align: top;
    display: inline-block;
    margin: 0 10px 0 8px;
  }
`;

const Breadcrumbs = ({ breadcrumbs, color, ...props }) => {
  return (
    <InlineBox {...props}>
      {breadcrumbs.map((breadcrumb, i) =>
        <StyledBreadcrumb
          key={i}
          data-active={breadcrumb.active}
          color={color}
          href={breadcrumb.href}
          onClick={() =>
            breadcrumb.onClick ? breadcrumb.onClick(breadcrumb.label) : null}
        >
          {breadcrumb.label}
        </StyledBreadcrumb>
      )}
    </InlineBox>
  );
};

Breadcrumbs.propTypes = {
  /** color of the breadcrumbs */
  color: PropTypes.string,
  /** breadcrumbs which should be displayed */
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      /** label for breadcrumb */
      label: PropTypes.string.isRequired,
      /** link url */
      href: PropTypes.string,
      /** boolean for active breadcrumb */
      active: PropTypes.bool,
      /** is called when breadcrumb is clicked. It will return the label */
      onClick: PropTypes.func
    })
  )
};

Breadcrumbs.defaultProps = {
  color: 'black'
};

export default Breadcrumbs;
