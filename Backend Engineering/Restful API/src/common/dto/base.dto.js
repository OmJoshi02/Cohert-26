import Joi from "joi";

class BaseDto{
    static schema = Joi.object({})

    static validator(data){
        const {error, value} = this.schema.validate(data, {
            abortEarly: false, // by default it is true, it exits after seeing one error so we make it false to send all errors to frontend
            stripUnknown : true //It discards the extra fields given by user, prevents DDOS attack
        })

        if(error){
            const err = error.details.map((d)=>d.message)
            return {err, value : null}
        }
        return{error:null, value}
    }
}

export default BaseDto