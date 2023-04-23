export interface Job{
    id:number,
    type:Cloth,
    num_of_quotations:number,
    location:string,
    making:string,
    description:string,
    budget:number
    colors:string[],
    size:string,
    bids:Bid[],
    acceptedBid?:Bid
}
export interface Bid{
    id:number,
    job?:Job,
    price:number,
    description:string,
    status:Status,
}
export enum Cloth{
    SHIRT = "Shirt",
    PANTS = "Pants",
    DRESS = "Dress",
    SKIRT = "Skirt",
    JACKET = "Jacket",
    COAT = "Coat",
    HAT = "Hat",
    SHOES = "Shoes",
    SOCKS = "Socks",
    UNDERWEAR = "Underwear",
    BLOUSE = "Blouse",
    ETHNIC = "Ethnic wear"
}
export enum Status{
    PENDING = "Pending",
    IN_PRODUCTION = "In production",
    READY = "Ready",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
    CANCELLED = "Cancelled",
    POSTED = "Posted"
}

export interface IAuth {
    accessToken: Object;
  }
  export type AuthContextType = {
    user: IAuth;
    login: (data: IAuth) => Promise<void>;
    logout: () => void;
  };
