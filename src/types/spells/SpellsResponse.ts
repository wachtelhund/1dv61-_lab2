export interface SpellResponse {
    index: string,
    name: string,
    desc: string[],
    higher_level: string[],
    range: string,
    duration: string,
    casting_time: string,
    level: number,
    school: {
        index: string,
        name: string,
        url: string
    },
    url: string
}