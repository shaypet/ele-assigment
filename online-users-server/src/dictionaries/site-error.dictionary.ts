export interface ISiteError {
  Code: number;
  Message: string;
}

export const SiteErrorDictionary = {
  EMAIL_EXISTS: {
    Code: 101,
    Message: 'Email is already exists',
  },
  REGISTER_Fill_ALL_FIELDS: {
    Code: 102,
    Message: 'FILL ALL FIELDS',
  },
  LOGIN_INFO_INCORRECT: {
    Code: 103,
    Message: 'LOGIN INFO INCORRECT',
  },
} satisfies Record<string, ISiteError>;
