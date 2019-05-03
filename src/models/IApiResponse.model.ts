export interface IApiResponse {
  success: boolean;
  message: string;
  data?: Object;
  possibleCauses?: string[];
}
