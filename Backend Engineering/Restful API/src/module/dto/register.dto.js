import Joi from "joi";
import BaseDto from "../../common/dto/base.dto";


class registerDto extends BaseDto{
    static schema = Joi.object({
        name : Joi.string().trim().min(2).max(50).required(),
        email : Joi.string().email().lowercase().required(),
        password : Joi.string().min(6).message("password must contain 6 chars").required(),
        role : Joi.string().valid("customer", "seller").default("customer").required()
    })
}

export default registerDto