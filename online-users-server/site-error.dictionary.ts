export interface ISiteError {
  Code: number;
  Message: string;
}

export const SiteErrorDictionary = {
  IDIOT: {
    Code: 123,
    Message: 'you are an idiot',
  },
  IDIOT235235: {
    Code: 123,
    Message: 'you are an idiot',
  },
} satisfies Record<string, ISiteError>;
