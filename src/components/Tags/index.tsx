import React, { useState } from 'react';
import { StyledTagInput } from './Tags.styles';
interface TagsProps {
  values?: string[];
  onChange?: (tags: string[]) => void;
  inputProps?: object;
  variant?:
    | 'default'
    | 'primary'
    | 'warning'
    | 'secondary'
    | 'tertiary'
    | 'default-light'
    | 'primary-light'
    | 'warning-light'
    | 'secondary-light'
    | 'tertiary-light';
  sm?: boolean;
  isRemovable?: boolean;
  disabled?: boolean;
}

const Tags = ({
  values,
  onChange,
  inputProps,
  variant,
  sm,
  isRemovable,
  disabled,
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
    disabled: disabled,
  };
  return (
    <StyledTagInput
      className="tag-input-style"
      $variant={variant}
      inputProps={{
        display: 'none',
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
