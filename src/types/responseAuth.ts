export interface ResponseAuth {
  message?: string;
  error?: string;
  stack?: string;
  role?: string;
  authenticated?: boolean;
}