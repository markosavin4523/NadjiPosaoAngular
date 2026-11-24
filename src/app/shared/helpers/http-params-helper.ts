import { HttpParams } from '@angular/common/http';

export function buildHttpParams(data?: Record<string, any> | null): HttpParams {
  let params = new HttpParams();

  if (!data) {
    return params;
  }

  Object.keys(data).forEach((key) => {
    const value = data[key];
    if (value !== null && value !== undefined && value !== '') {
      params = params.set(key, String(value));
    }
  });

  return params;
}