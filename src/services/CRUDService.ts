import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { Response } from '../types/Response';
export class CRUDService<SingleResponse> {
  url: string;
  constructor(url: string) {
    this.url = url;
  }

  async getAll(params?: AxiosRequestConfig): Promise<Response> {
    return axios
      .get(this.url, params)
      .then(response => {
        return response.data as unknown as Promise<Response>;
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  async getOne(index: string, url = this.url): Promise<SingleResponse> {
    return axios
      .get(`${this.url}/${index}`)
      .then(response => {
        return response.data as unknown as Promise<SingleResponse>;
      })
      .then(data => {
        return data;
      });
  }
}
