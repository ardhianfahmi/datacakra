import axios, { Axios, AxiosRequestConfig } from "axios";

export interface Tourist {
  $id?: any | "";
  createdate?: any | "";
  id?: any | "";
  tourist_email: string;
  tourist_profilepicture?: any | "";
  tourist_location: string;
  tourist_name: string;
}

export interface TouristInterface {
  page: number;
  per_page: number;
  totalrecord: string;
  total_pages: number;
  data: Tourist[];
}
