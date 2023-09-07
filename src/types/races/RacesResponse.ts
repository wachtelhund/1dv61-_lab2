export interface RacesResponse {
  count: number;
  results: [
    {
      index: string;
      name: string;
      url: string;
    },
  ];
}

export interface RaceResponse {
  index: string;
  name: string;
  url: string;
  speed: number;
  age: string;
  size: string;
}
