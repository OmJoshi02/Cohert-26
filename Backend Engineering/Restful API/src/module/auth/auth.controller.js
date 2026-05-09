import * as service from "./auth.service"
import ApiResponse from "../../common/utils/api-response.js"


const register = async (req, res) =>{
    const user = service.register(req.body)
    ApiResponse.created(res, "registration success", user)
}



export {register}