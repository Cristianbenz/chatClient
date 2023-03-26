import { SignInRequest } from "./singInRequest";

export interface SingUpRequest extends SignInRequest {
  name: string | null;
  confirmPassword: string | null;
  picture: string | null;
}