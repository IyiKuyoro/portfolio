export interface IApiResponse {
  success: boolean;
  message: string;
  data?: Object;
  possibleCauses?: string[];
}

export interface IAuthApiResponse {
  success: boolean;
  message: string;
  data?: {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    token: string;
  };
  possibleCauses?: string[];
}
