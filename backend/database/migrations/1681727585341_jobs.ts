import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'jobs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('type')
      table.string('location')
      table.string('making')
      table.string('description')
      table.float('budget')
      table.string('size') 
      table.integer('num_of_quotations')
      table.integer('user_id')
      table.integer('accepted_bid').nullable()
      table.specificType('bids', 'numeric[]')
      table.specificType('colors', 'text []')
    
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
