import axios from 'axios';
export class CRUDService<ManyResponse, SingleResponse> {
    private url: string;
    constructor(url: string) {
        this.url = url;
    }

    async GetAll(): Promise<ManyResponse> {
        return axios.get(this.url)
            .then(response => {
                return response.data as unknown as Promise<ManyResponse>;
            })
            .then(data => {
                return data
            })
            .catch(error => {
                throw new Error(error);
            });
    }

    async GetOne(index: string): Promise<SingleResponse> {
        return axios.get(`${this.url}/${index}`)
            .then(response => {
                return response as unknown as Promise<SingleResponse>;
            })
            .then(data => {
                return data
            })
    }
}