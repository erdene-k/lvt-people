import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'
export default class AuthController {
    public async register({auth,request,response}:HttpContextContract){
        const userSchema = schema.create({
            username: schema.string({trim:true}, [rules.unique({table:'users', column:'username', caseInsensitive:true})]),
            email: schema.string({trim:true}, [rules.email(),rules.unique({table:'users', column:'username', caseInsensitive:true})]),
            password: schema.string({}, [rules.minLength(8)])
        })
         const data = await request.validate({schema:userSchema})
         const user = await User.create(data)
         await auth.login(user)
         return response.status(200)
    } 
    public async login({auth, request, response, session}:HttpContextContract){
        const {uid, password} = request.only(['uid', 'password']);
        try {
            await auth.attempt(uid, password)
        } catch (error) {
            session.flash('form', 'email is incorrect')
            return response.status(404)
        }
        return response.status(200)
    } 
}
 