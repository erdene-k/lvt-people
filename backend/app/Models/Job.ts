import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Job extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public type:string;
  @column()
  public numOfQuotations:number;
  @column()
  public location:string;
  @column()
  public making:string;
  @column()
  public description:string;
  @column()
  public budget:number;
  @column()
  public colors:string[];
  @column()
  public size:string;
  @column()
  public bids:number[];
  @column()
  public acceptedBid:string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
