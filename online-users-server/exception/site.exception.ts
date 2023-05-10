import { ISiteError } from 'site-error.dictionary';

interface SiteException {
  name: string;
  message: string;
  stack?: string;
  Code: number;
}
class SiteException extends Error {
  constructor(error: ISiteError) {
    super(error.Message);
    Error.captureStackTrace(this, this.constructor);
    this.Code = error.Code;
    this.name = this.constructor.name;
  }
  getCode() {
    return this.Code;
  }
}

export { SiteException };
