export interface Auth {
  email: string;
  password?: string;
  newPass?: string;
  recoveryCode?: string;
}