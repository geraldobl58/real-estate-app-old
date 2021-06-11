import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ClipLoader from 'react-spinners/ClipLoader';

import { LoadingContainer } from './styled';

export default function Loading({ isLoading }) {
  const [color] = useState('#00414c');
  return (
    isLoading && (
      <LoadingContainer>
        <ClipLoader color={color} size={150} />
      </LoadingContainer>
    )
  );
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
