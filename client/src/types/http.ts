export interface GetRequestConfig {
  params: any
}

export interface FetchedNote {
  id: number,
  label: string,
  is_checked: boolean,
  created_at: number
}

export enum HTTPMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"
}