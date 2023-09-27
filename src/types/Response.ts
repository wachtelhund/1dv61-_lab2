export interface Response {
  count: number;
  results: ResponseResult[];
}

export interface ResponseResult {
  index: string;
  name: string;
  url: string;
}

// Response? abstract...
