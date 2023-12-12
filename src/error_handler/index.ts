import { AxiosError } from "axios";

export function errorHandler(error: any): Error {
  console.error(error);

  if(error instanceof(AxiosError)){
    return Error(error?.message ?? error ?? "An error occured");

  } 
    return Error(error?.message ?? error?.data ?? "An error occured");
  }
  