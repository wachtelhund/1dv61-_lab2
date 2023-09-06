import fetch from 'node-fetch';
export class CRUDService<ManyResponse, SingleResponse> {
    private url: string;
    constructor(url: string) {
        this.url = url;
    }

    async GetAll(): Promise<ManyResponse> {
        return fetch(this.url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json() as Promise<ManyResponse>;
            })
            .then(data => {
                return data
            })
    }

    async GetOne(index: string): Promise<SingleResponse> {
        return fetch(`${this.url}/${index}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json() as Promise<SingleResponse>;
            })
            .then(data => {
                return data
            })
    }
}