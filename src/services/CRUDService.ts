import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { Response } from '../types/Response';
export abstract class CRUDService<SingleResponse> {
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

  async getOne(index: string): Promise<SingleResponse> {
    return axios
      .get(`${this.url}/${index}`)
      .then(response => {
        return response.data as unknown as Promise<SingleResponse>;
      })
      .then(data => {
        return data;
      });
  }

  async getRandom(): Promise<SingleResponse> {
    const response = await this.getAll();
    const randomIndex = Math.floor(Math.random() * response.count);
    const random = response.results[randomIndex]?.index;
    if (random) {
      return this.getOne(random);
    } else {
      throw new Error('No random index found');
    }
  }

  // Move? or why is this here?
  async get(url: string): Promise<Response> {
    return axios
      .get(url)
      .then(response => {
        return response.data as unknown as Promise<Response>;
      })
      .then(data => {
        return data;
      });
  }
}
