import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema} from '@ioc:Adonis/Core/Validator'
import Job from "App/Models/Job";

export default class JobsController {
    public async index(){
        const jobs = await Job.query().preload('bids')
        return jobs
    }
    public async handle(){
        return Job.all()
    }
    public async store({request, response}:HttpContextContract){
        const newJobSchema = schema.create({
            type:schema.string(),
            num_of_quotations:schema.number(),
            location:schema.string(),
            making:schema.string(),
            description:schema.string(),
            budget:schema.number(),
            user_id:schema.number(),
            colors:schema.array().members(schema.string()),
            size:schema.string(),
            bids:schema.array().members(schema.number()),
            accepted_bid:schema.number.optional(),
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
        job.merge(body)
        return job.save();
    }
    public async destroy({params, response}:HttpContextContract){
        console.log('delete')
        const job = await Job.findOrFail(params.id);
        response.status(204)
        await job.delete();
        return job;
    }
    public async acceptBid({params, request}:HttpContextContract){
        const bidId = request.body().bidId
        const job = await Job.findOrFail(params.id);
        job.accepted_bid = bidId;
        return job.save();
    }
    public async filterJobs({request}:HttpContextContract){
        const { type, location } = request.qs()
        const jobsQuery = Job.query()
        if (type) {
          jobsQuery.where('type', 'like', `%${type}%`)
        }
        if (location) {
          jobsQuery.where('location', 'like', `%${location}%`)
        }
        const jobs = await jobsQuery.exec()
        return jobs
    }
}

