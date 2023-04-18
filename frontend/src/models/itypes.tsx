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
    color:string,
    size:string
}
enum Cloth{
    SHIRT = "shirt",
    PANTS = "pants",
    DRESS = "dress",
    SKIRT = "skirt",
    JACKET = "jacket",
    COAT = "coat",
    HAT = "hat",
    SHOES = "shoes",
    SOCKS = "socks",
    UNDERWEAR = "underwear",
    BLOUSE = "blouse",
    ETHNIC = "ethnic wear"
}
enum Status{
    PENDING = "pending",
    IN_PRODUCTION = "in_production",
    READY = "ready",
    SHIPPED = "shipped",
    DELIVERED = "delivered",
    CANCELLED = "cancelled",
    POSTED = "posted"
}


