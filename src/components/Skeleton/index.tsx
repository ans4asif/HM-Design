import React from 'react';
import { css } from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';

interface Props {
  type: string;
}
const StyledSkeleton: React.FC<Props> = ({ type }): JSX.Element => {
  return (
    <>
      {type === 'tags' && (
        <Skeleton
          count={1}
          width={110}
          height={30}
          borderRadius={25}
        ></Skeleton>
      )}
    </>
  );
};

export default StyledSkeleton;
