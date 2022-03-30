import styled, { css } from 'styled-components';
import { TagInput } from 'evergreen-ui';

export const StyledTagInput = styled(TagInput)`
  &.tag-input-style {
    border: none;
  }
  // &.tag-input-style:focus{
  //    border: 1px solid blue;
  // }
  strong {
    ${({ $variant }) =>
      $variant && $variant === 'skeleton'
        ? css`
            color: #fff;
            width: 80px;
            height: 25px;
          `
        : $variant && $variant === 'default'
        ? css`
            color: #fff;
          `
        : $variant === 'secondary'
        ? css`
            color: #fff;
          `
        : $variant === 'primary'
        ? css`
            color: #fff;
          `
        : $variant === 'warning'
        ? css`
            color: #fff;
          `
        : $variant === 'success'
        ? css`
            color: #fff;
          `
        : $variant === 'tertiary'
        ? css`
            color: #fff;
          `
        : $variant === 'secondary-light'
        ? css`
            color: #940ffb;
            background: rgba(148, 15, 251, 0.15);
          `
        : $variant === 'primary-light'
        ? css`
            color: #00b53f;
            background: rgba(0, 181, 63, 0.15);
          `
        : $variant === 'warning-light'
        ? css`
            color: #ff4e35;
            background: rgba(255, 78, 53, 0.15);
          `
        : $variant === 'tertiary-light'
        ? css`
            color: #00b0f0;
            background: rgba(0, 176, 240, 0.15);
          `
        : css`
            color: #021434;
            background: rgba(2, 20, 52, 0.1);
          `}
  }
  strong[disabled] {
    ${({ $variant }) =>
      $variant && $variant === 'default'
        ? css`
            color: #021434;
            opacity: 0.3;
            background: #fff;
            border: 1px solid #021434;
            cursor: not-allowed;
            pointer-events: none;
          `
        : $variant === 'secondary'
        ? css`
            color: #940ffb;
            opacity: 0.3;
            background: #fff;
            border: 1px solid #940ffb;
            cursor: not-allowed;
            pointer-events: none;
          `
        : $variant === 'primary'
        ? css`
            color: #00b53f;
            opacity: 0.3;
            background: #fff;
            border: 1px solid #00b53f;
            cursor: not-allowed;
            pointer-events: none;
          `
        : $variant === 'warning'
        ? css`
            color: #ff4e35;
            opacity: 0.3;
            background: #fff;
            border: 1px solid #ff4e35;
            cursor: not-allowed;
            pointer-events: none;
          `
        : $variant === 'tertiary'
        ? css`
            color: #00b0f0;
            opacity: 0.3;
            background: #fff;
            border: 1px solid #00b0f0;
            cursor: not-allowed;
            pointer-events: none;
          `
        : $variant === 'secondary-light'
        ? css`
            color: #940ffb;
            background: #fff;
            opacity: 0.3;
            background: #fff;
            border: 1px solid #940ffb;
            cursor: not-allowed;
            pointer-events: none;
          `
        : $variant === 'primary-light'
        ? css`
            color: #00b53f;
            background: #fff;
            opacity: 0.3;
            background: #fff;
            border: 1px solid #00b53f;
            cursor: not-allowed;
            pointer-events: none;
          `
        : $variant === 'warning-light'
        ? css`
            color: #ff4e35;
            opacity: 0.3;
            background: #fff;
            border: 1px solid #ff4e35;
            cursor: not-allowed;
            pointer-events: none;
          `
        : $variant === 'tertiary-light'
        ? css`
            color: #00b0f0;
            opacity: 0.3;
            background: #fff;
            border: 1px solid #00b0f0;
            cursor: not-allowed;
            pointer-events: none;
          `
        : $variant === 'success'
        ? css`
            color: rgba(2, 20, 52);
            opacity: 0.25;
            background: #fff;
            border: 1px solid rgba(2, 20, 52);
            cursor: not-allowed;
            pointer-events: none;
            &:hover {
              background: #fff !important;
            }
          `
        : css`
            color: #021434;
            background: rgba(2, 20, 52, 0.1);
            opacity: 0.3;
            background: #fff;
            border: 1px solid #021434;
            cursor: not-allowed;
            pointer-events: none;
          `}
  }
  strong:hover {
    ${({ $variant }) =>
      $variant &&
      $variant === 'success' &&
      css`
        background: #12572a !important;
        opacity: 1;
      `}
  }
  strong:focus {
    ${({ $variant }) =>
      $variant &&
      $variant === 'success' &&
      css`
        opacity: 1;
        border: 1px solid #0088ff;
        box-shadow: 0px 0px 8px #0088ff;
      `}
  }
`;
