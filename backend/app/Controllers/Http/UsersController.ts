// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User"

export default class UsersController {
    public async handle(){
        return User.all()
    }
    public async index(){
        return User.all()
    }
}
