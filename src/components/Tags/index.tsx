import React, { useState } from 'react';
import { TagInput } from 'evergreen-ui';
import styled from 'styled-components';
interface TagsProps {
  values?: string[];
  onChange?: (tags: string[]) => void;
  inputProps?: object;
  variant?:
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'secondary'
    | 'danger'
    | 'info'
    | 'tertiary';
  sm?: boolean;
  isRemovable?: boolean;
}
const StyledTagInput = styled(TagInput)`
  &.tag-input-style{
    border:none;
  }
  strong{
    padding-left: 15px;
    padding-right: 10px;
  }
`

const Tags = ({
  values,
  onChange,
  inputProps,
  variant,
  sm,
  isRemovable,
}: TagsProps): JSX.Element => {
  const [valuez, setValues] = useState(['Label']);
  const sharedProps = {
    color:
      variant === 'default'
        ? '#021434'
        : variant === 'secondary'
        ? '#940FFB'
        : variant === 'primary'
        ? '#00B53F'
        : variant === 'warning'
        ? '#FF4E35'
        : variant === 'tertiary'
        ? '#00B0F0'
        : '#17a2b8',
    background:
      variant === 'default'
        ? '#021434'
        : variant === 'tertiary'
        ? '#00B0F0'
        : variant === 'primary'
        ? '#00B53F'
        : variant === 'secondary'
        ? '##940FFB'
        : variant === 'warning'
        ? '#FF4E35'
        : '#17a2b8',
    height: sm ? '25px' : '32px',
    fontSize: sm ? '14px' : '16px',
    paddingX: sm ? '15px' : '20px',
    paddingRight: sm ? '15px' : '20px',
    borderRadius: '25px',
    fontWeight: 'bold',
    isRemovable: isRemovable,
  };
  return (
    <StyledTagInput
      className="tag-input-style"
      inputProps={{
        display: 'none',
        //remove input border
      }}
      values={valuez}
      tagProps={sharedProps}
      onChange={(tags: string[]) => {
        setValues(tags);
      }}
    />
  );
};

export default Tags;
