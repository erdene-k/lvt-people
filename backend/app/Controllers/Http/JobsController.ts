import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema} from '@ioc:Adonis/Core/Validator'
import Job from "App/Models/Job";

export default class JobsController {
    public async index(){
        return Job.all()
    }
    public async handle(){
        return Job.all()
    }
    public async store({request, response}:HttpContextContract){
        const newJobSchema = schema.create({
            name:schema.string({trim:true}),
        })
        const payload = await request.validate({schema:newJobSchema});
          
        const job = await Job.create(payload)
        response.status(201)
        return job;
    }
    public async show({params}:HttpContextContract){
        return Job.findOrFail(params.id);
    }
    public async update({request, params}:HttpContextContract){
        const body = request.body()
        const job = await Job.findOrFail(params.id);
        job.name = body.name
        return job.save();
    }
    public async destroy({params, response}:HttpContextContract){
        const job = await Job.findOrFail(params.id);
        response.status(204)
        await job.delete();
        return job;
    }
}

