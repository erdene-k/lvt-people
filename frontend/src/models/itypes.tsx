export interface Job {
  id: number;
  type: string;
  num_of_quotations: number;
  location: string;
  making: string;
  description: string;
  budget: number;
  colors: string[];
  size: string;
  bids: Bid[];
  accepted_bid?:number;
  images: string[];
  user_id:number
}
export interface Bid {
  id: number;
  job?: Job;
  price: number;
  description: string;
  status: string;
  user_id:number
}

export const statuses:string[]= [
  "Pending",
  "In production",
  "Ready",
  "Accepted",
  "Confirmed",
]

export interface IAuth {
  accessToken: Object;
  email: string;
  id:number
}
export type AuthContextType = {
  user: IAuth;
  login: (data: IAuth) => Promise<void>;
  logout: () => void;
};
export const types: string[] = [
  "Shirt",
  "Pants",
  "Dress",
  "Skirt",
  "Jacket",
  "Coat",
  "Hat",
  "Shoes",
  "Socks",
  "Underwear",
  "Blouse",
  "Ethnic wear",
];

export const cities = [
    "Sydney",
    "Melbourne",
    "Brisbane",
    "Perth",
    "Adelaide",
    "Gold Coast",
    "Canberra",
    "Hobart",
    "Darwin",
    "Cairns",
  ];