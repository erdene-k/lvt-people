/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('register', 'AuthController.register').as('auth.register')
Route.post('login', 'AuthController.login').as('auth.login')
Route.post('logout', 'AuthController.logout').as('auth.logout')

Route.group(() => {
  Route.resource('jobs', 'JobsController')
  Route.resource('bids', 'BidsController')
  Route.resource('users', 'UsersController')
  Route.put('/bids/:id/changeStatus','BidsController.changeStatus')
  Route.put('/bids/:id/confirmBid','BidsController.confirmBid')
  Route.put('/jobs/:id/acceptBid','JobsController.acceptBid')
  Route.get('/filterJobs','JobsController.filterJobs')
}).middleware("auth");