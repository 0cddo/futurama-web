export interface CharacterData {
  age: string;
  gender: string;
  homePlanet: string;
  id: number;
  images: {
    "head-shot": string;
    main: string;
  };
  name: {
    first: string;
    middle: string;
    last: string;
  };
  occupation: string;
  sayings: [string];
  species: string;
}
