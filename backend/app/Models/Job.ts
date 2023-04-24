import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Bid from './Bid';

export default class Job extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public type:string;
  @column()
  public num_of_quotations:number;
  @column()
  public location:string;
  @column()
  public making:string;
  @column()
  public description:string;
  @column()
  public budget:number;
  @column()
  public user_id:number;
  @column()
  public colors:string[];
  @column()
  public size:string;
  @column()
  public accepted_bid: number | null;
  @column()
  public images:string[];

  @hasMany(() => Bid)
  public bids: HasMany<typeof Bid>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
