import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'
export default class AuthController {
    public async register({auth,request,response}:HttpContextContract){
        const userSchema = schema.create({
            email: schema.string({trim:true}, [rules.email(),rules.unique({table:'users', column:'email', caseInsensitive:true})]),
            password: schema.string({}, [rules.minLength(8)]),
        })
         const data = await request.validate({schema:userSchema})
         const user = await User.create(data)
         await auth.login(user)
         return response.status(200)
    } 
    public async login({auth, request, response, session}:HttpContextContract){
        console.log("login")
        const loginSchema = schema.create({
            email: schema.string({trim:true}, [rules.email()]),
            password: schema.string({}, [rules.minLength(8)]),
            rememberMe: schema.boolean.optional()
        })
        const {email, password, rememberMe} = await request.validate({schema:loginSchema})
        console.log(email, password, rememberMe)
        try {
            await auth.attempt(email, password, !!rememberMe)
        } catch (error) {
            session.flash('form', 'email is incorrect')
            return response.status(404)
        }
        return response.status(200)
    } 
    public async logOut({auth, response,}:HttpContextContract){
        await auth.logout();
        return response.status(200)
    } 
}
 