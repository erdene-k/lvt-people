import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema} from '@ioc:Adonis/Core/Validator'
import Bid from "App/Models/Bid";
import Job from "App/Models/Job";
import User from "App/Models/User";
import Mail from '@ioc:Adonis/Addons/Mail';
export default class BidsController {
    public async index(){
        const bids = await Bid.query().preload('job')
        return bids
    }
    public async handle(){
        return Bid.all()
    }
    public async store({request, response, auth}:HttpContextContract){
        const newBidSchema = schema.create({
             job_id:schema.number(),
             user_id:schema.number(),
             price:schema.number(),
             description:schema.string(),
             status:schema.string()
        })
        const payload = await request.validate({schema:newBidSchema});
        const job = await Job.findOrFail(request.body().job_id);
        const email = (await User.findOrFail(job.user_id)).email;
        const bid = await Bid.create(payload)
        const user = await auth.user
        await Mail.send((message) => {
            message.to(email)
            .from('tesoro.ec@gmail.com')
            .subject('New bid')
            .html(`<b> Dear user, You have received a new bid</b>
            <p>The bid detail: ${payload.description} from ${user?.email}</p>
            <a href="/jobs">See the bid</a>
            `)
          })
        response.status(201)
        return bid;
    }
    public async show({params}:HttpContextContract){
        const bids = await Bid.query().preload('job').where('user_id', '=', params.id)
        return bids
    }
    public async update({request, params}:HttpContextContract){
        const body = request.body()
        const bid = await Bid.findOrFail(params.id);
        bid.merge(body)
        return bid.save();
    }
    public async changeStatus({request, params}:HttpContextContract){
        const status = request.body().status
        const bid = await Bid.findOrFail(params.id);
        bid.status = status
        return bid.save();
    }
    public async destroy({params, response}:HttpContextContract){
        const bid = await Bid.findOrFail(params.id);
        response.status(204)
        await bid.delete();
        return bid;
    }
    public async confirmBid({params}:HttpContextContract){
        const bid = await Bid.findOrFail(params.id);
        bid.status = "Confirmed"
        return bid.save();
    }
}

