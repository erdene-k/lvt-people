import { DateTime } from 'luxon'
import {  BaseModel, belongsTo, BelongsTo, column, hasOne, HasOne  } from '@ioc:Adonis/Lucid/Orm'
import Job from './Job'

export default class Bid extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public price:number
  @column({ columnName: 'job_id' })
  public jobId: number;
  @column()
  public user_id: number;
  @column()
  public description:string
  @column()
  public  status:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Job)
  public job: BelongsTo<typeof Job>
}
