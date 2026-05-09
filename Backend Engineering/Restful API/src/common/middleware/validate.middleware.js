import ApiError from "../utils/api-error";

const validate = (Dtoclass) =>{
    return (req, res, next) =>{
        const {err, value} = Dtoclass.validator(req.body)

        if(err) {
            throw new ApiError.badRequest(err.join("; "))
        }

        req.body = value
        next()  
    }
}

export default validate