class ApiError extends Error{

    constructor(statudCode, message){
        super(message)
        this.statudCode = statudCode
        this.isOperational = true
        Error.captureStackTrace(this, this.constructor)
    }

    static badRequest(message = "bad request"){
        return new ApiError(400, message)
    }

    static unauthorized(message = "unauthorized error"){
        return new ApiError(401, message)
    }


}

export default ApiError