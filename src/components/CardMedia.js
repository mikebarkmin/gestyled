import React from 'react';
import PropTypes from 'prop-types';
import Relative from './Relative';
import Absolute from './Absolute';
import Box from './Box';
import Title from './Title';
import Caption from './Caption';
import withStyle from './Base';

const CardMedia = props => {
  return (
    <Relative>
      {props.children}
      <Absolute left right top bottom>
        <Relative style={{ height: '100%' }}>
          <Absolute bottom right left>
            {props.title || props.subtitle
              ? <Box pt={2} bg="rgba(0,0,0,0.54)">
                  <Box p={3}>
                    <Box>
                      <Title color="rgba(255,255,255,0.84)">
                        {props.title}
                      </Title>
                    </Box>
                    <Box>
                      <Caption color="rgba(255,255,255,0.54)">
                        {props.subtitle}
                      </Caption>
                    </Box>
                  </Box>
                </Box>
              : ''}
          </Absolute>
        </Relative>
      </Absolute>
    </Relative>
  );
};

CardMedia.propTypes = {
  /** Title displayed in an overlay */
  title: PropTypes.string,
  /** Subtitle displayed under the title in an overlay */
  subtitle: PropTypes.string
};

export default withStyle(CardMedia);
