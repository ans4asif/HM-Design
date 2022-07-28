export interface Question {
  uuid: string; // for internal tracking only, use any dummy data
  label: string;
  instructions: string;
  prompt?: string;
  options?: Array<{ value: string; label: string }>;
  type:
    | 'freeForm'
    | 'freeFormMultiline'
    | 'toggle'
    | 'singleSelection'
    | 'multipleSelection';
  validation:
    | {
        // freeForm and freeFormMultiline
        required?: boolean;
        maxLength?: number; // limit max length of single line text field + client side validation
        masked?: boolean; // if true, make this a password field
      }
    | {
        // singleSelection
        required?: boolean;
      }
    | {
        // multiSelection
        required?: boolean;
        minItems?: number;
        maxItems?: number;
      };
}

export interface Questionnaire {
  uuid: string; // for internal tracking only, use any dummy data
  slug: string; // for internal tracking only, use any dummy data
  questions: Question[];
}

export interface validation {
  // freeForm and freeFormMultiline
  required?: boolean;
  maxLength?: number; // limit max length of single line text field + client side validation
  masked?: boolean; // if true, make this a password field
  // singleSelection

  minItems?: number;
  maxItems?: number;
}
