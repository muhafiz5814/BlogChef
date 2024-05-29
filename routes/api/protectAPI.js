import { verifyToken } from "../../controllers/user.js"

const protectAPI = async (req, res, next) => {
  try {
    const authorization = req.header("Authorization")
    if(authorization){
      // Verity JWT token here
      const token = authorization.split(" ")[1] // Bearer asfgtoken
      await verifyToken(token)
      return next()
    }

    return res.status(403).json({message: "Unauthorized access!"})
  } catch (error) {
    return res.status(403).json({message: "Unauthorized access!"})
  }
}

export default protectAPI