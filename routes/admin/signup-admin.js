import { signupAdmin } from "../../controllers/user.js"

export default async (req, res) => {
  
  const {name, email, password} = req.body
  try{
    await signupAdmin({name, email, password})
    res.redirect("/admin/login")
  } catch(error) {
    res.redirect("/admin/signup")
  }

}