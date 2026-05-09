import crypto from "crypto"

const generateResetToken = ()=>{
    const rawToken = crypto.randomBytes(32).toString("hex")
    const hashed = crypto.createHash("sha256").update(rawToken).digest("hex")

    return {rawToken, hashed}
}

export {generateResetToken}