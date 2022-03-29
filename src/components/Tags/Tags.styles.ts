import styled ,{css} from "styled-components"
import { TagInput } from "evergreen-ui"

export const StyledTagInput = styled(TagInput)`
&.tag-input-style{
  border:none;
}
strong{
  ${({$variant})=> $variant && 
  $variant === 'default' ? css` 
     color: #fff;
  ` : $variant === 'secondary' ? css`
     color: #fff;
    `: $variant === 'primary'
    ? css`
    color:#fff;
    `
    : $variant === 'warning'
    ? css`
    color:#fff;
    `
    : $variant === 'tertiary'
    ? css`
    color:#fff;
    `
    :  $variant === 'secondary-light'
    ? css`
    color:#940FFB;
    background: rgba(148, 15, 251, 0.15);
    `
    : $variant === 'primary-light'
    ? css`
    color: #00B53F;
    background: rgba(0, 181, 63, 0.15);
    `
    : $variant === 'warning-light'
    ?  css`
    color:#FF4E35;
    background: rgba(255, 78, 53, 0.15);
    `
    : $variant === 'tertiary-light'
    ? css`
    color:#00B0F0;
    background: rgba(0, 176, 240, 0.15);
    `
    : css`
    color:#021434;
    background: rgba(2, 20, 52, 0.1);
    `}
}
strong[disabled]{
    ${({$variant})=> $variant && 
    $variant === 'default' ? css` 
       color: #021434;
       opacity:0.3;
       background: #fff;
       border: 1px solid #021434;
       cursor: not-allowed;
    ` : $variant === 'secondary' ? css`
       color: #940FFB;
       opacity:0.3;
       background: #fff;
       border: 1px solid #940FFB;
       cursor: not-allowed;
      `: $variant === 'primary'
      ? css`
      color: #00B53F;
      opacity:0.3;
      background: #fff;
      border: 1px solid #00B53F;
      cursor: not-allowed;
      `
      : $variant === 'warning'
      ? css`
      color:#FF4E35;
      opacity:0.3;
      background: #fff;
      border: 1px solid #FF4E35;
      cursor: not-allowed;
      `
      : $variant === 'tertiary'
      ? css`
      color:#00B0F0;
      opacity:0.3;
      background: #fff;
      border: 1px solid #00B0F0;
      cursor: not-allowed;
      `
      :  $variant === 'secondary-light'
      ? css`
      color:#940FFB;
      background:#fff;
      opacity:0.3;
      background: #fff;
      border: 1px solid #940FFB;
      cursor: not-allowed;
      `
      : $variant === 'primary-light'
      ? css`
      color: #00B53F;
      background: #fff;
      opacity:0.3;
      background: #fff;
      border: 1px solid #00B53F;
      cursor: not-allowed;
      `
      : $variant === 'warning-light'
      ?  css`
      color:#FF4E35;
      opacity:0.3;
      background: #fff;
      border: 1px solid #FF4E35;
      cursor: not-allowed;
      `
      : $variant === 'tertiary-light'
      ? css`
      color:#00B0F0;
      opacity:0.3;
      background: #fff;
      border: 1px solid #00B0F0;
      cursor: not-allowed;`
      : css`
      color:#021434;
      background: rgba(2, 20, 52, 0.1);
      opacity:0.3;
      background: #fff;
      border: 1px solid #021434;
      cursor: not-allowed;
      `}
  }
`