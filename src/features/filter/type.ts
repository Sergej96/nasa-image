import { AxiosError } from "axios";

export interface FilterSliceStore {
  startDate?: string;
  endDate: string;
  items: AstronomyImg[];
  status: Status;
  error?: AxiosError;
}

export interface AstronomyImg {
  title: string;
  explanation: string;
  url: string;
  date: string;
}

export interface DateArgs {
  startDate?: string;
  endDate: string;
}

export enum Status {
  SUCCESS = "success",
  LOADING = "loading",
  ERROR = "error",
}
