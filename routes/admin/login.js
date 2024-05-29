import { loginAdmin } from "../../controllers/user.js"

export default async (req, res) => {
  const {email, password} = req.body
  try{
    const user = await loginAdmin({email, password})
    req.session.user = {
      id: user._id,
      name: user.name,
      email: user.email,
      lastLoggedIn: user.lastLoggedIn
    }
    res.redirect("/admin/dashboard")
  } catch (error) {
    console.log(error)
    res.redirect("/admin/login")
  }
}