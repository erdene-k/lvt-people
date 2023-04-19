export interface Job{
    id:number,
    type:Cloth,
    numOfQuotations:number,
    status:Status,
    location:string,
    typesOfMaking:string,
    making:string,
    description:string,
    budget:number
    colors:string[],
    size:string
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


