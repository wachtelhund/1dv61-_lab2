// https://www.dnd5eapi.co/api/classes/

export interface ClassesResponse {
    count: number,
    results: [{
        index: string,
        name: string,
        url: string
    }]
}

export interface ClassResponse {
    index: string,
    name: string,
    hit_die: number,
}