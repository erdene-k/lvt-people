import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'
export default class AuthController {
    public async register({auth,request,response}:HttpContextContract){
        const userSchema = await schema.create({
            email: schema.string({trim:true}, [rules.email(),rules.unique({table:'users', column:'email', caseInsensitive:true})]),
            password: schema.string({}, [rules.minLength(8)]),
        })
         const data = await request.validate({schema:userSchema})
         const user = await User.create(data)
         await auth.login(user)
         return response.status(200)
    } 
    public async login({auth, request, response, session}:HttpContextContract){
        const loginSchema = schema.create({
            email: schema.string({trim:true}, [rules.email()]),
            password: schema.string({}, [rules.minLength(8)]),
        })
        const {email, password} = await request.validate({schema:loginSchema})
        try {
             const token = await auth.attempt(email, password);
             return token
        } catch (error) {
            session.flash('form', 'email is incorrect')
            return response.status(404)
        }
    } 
    public async logOut({auth, response,}:HttpContextContract){
        await auth.logout();
        return response.status(200)
    } 
}
 