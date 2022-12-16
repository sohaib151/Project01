import jwt from 'jsonwebtoken'

const generateToken=(id)=>{
    return jwt.sign({id},process.env.SECERET_JWT,{expiresIn:'30D'})
}

export default generateToken