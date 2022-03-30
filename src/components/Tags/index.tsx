import React, { useState } from 'react';
import { StyledTagInput } from './Tags.styles';
interface TagsProps {
  value?: string | number;
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
    | 'success'
    | 'skeleton'
    | 'tertiary-light';
  sm?: boolean;
  isRemovable?: boolean;
  disabled?: boolean;
}

const Tags: React.FC<TagsProps> = ({
  value,
  onChange,
  inputProps,
  variant,
  sm,
  isRemovable,
  disabled,
}): JSX.Element => {
  const [values, setValues] = useState([value]);
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
        : variant === 'success'
        ? '#00B53F'
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
        : variant === 'success'
        ? '#00B53F'
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
      values={values}
      tagProps={sharedProps}
      onChange={(tag: string[]) => {
        setValues(tag);
      }}
    />
  );
};

export default Tags;
