import { InputProps } from '@mui/material';

export interface Question {
  uuid: string; // for internal tracking only, use any dummy data
  label: string | InputProps['aria-label'];
  instructions: string;
  prompt?: string;
  options?: Array<{ value: string; label: string }>;
  type:
    | 'freeForm'
    | 'freeFormMultiline'
    | 'toggle'
    | 'singleSelection'
    | 'multipleSelection';
  validation: validation;
  // | {
  //     // freeForm and freeFormMultiline
  //     required?: boolean | undefined;
  //     maxLength?: number | undefined; // limit max length of single line text field + client side validation
  //     masked?: boolean | undefined; // if true, make this a password field
  //   }
  // | {
  //     // singleSelection
  //     required?: boolean | undefined;
  //   }
  // | {
  //     // multiSelection
  //     required?: boolean | undefined;
  //     minItems?: number | undefined;
  //     maxItems?: number | undefined;
  //   };
}

export interface Questionnaire {
  uuid: string; // for internal tracking only, use any dummy data
  slug: string; // for internal tracking only, use any dummy data
  questions: Question[];
}

export interface validation {
  // freeForm and freeFormMultiline
  required?: boolean | undefined;
  maxLength?: number | undefined; // limit max length of single line text field + client side validation
  masked?: boolean | undefined; // if true, make this a password field
  // singleSelection

  minItems?: number | undefined;
  maxItems?: number | undefined;
}
