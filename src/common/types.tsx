export type MainCardProps = {
    price: number,
    title: string,
    days: number,
    difficulty: string,
    photoSrc: string,
    id:string
}

export type TripOption = {
    id: string;
    title: string;
    description: string;
    level: string;
    duration: number;
    price: number;
    image: string;
    createdAt: string;
    }
  

export type FiltersAppliedState = {
        SEARCH: string|null;
        DURATION: string|null;
        DIFFICULTY: string|null;
      };
      
export enum FILTER_OPTIONS{
        DURATION='DURATION',
        DIFFICULTY='DIFFICULTY',
        SEARCH='SEARCH'
}
      
export type MyBooking = {
  title:string,
  date:string,
  price: number,
  level:string,
  guests: number,
  id: string
}