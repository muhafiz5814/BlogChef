const protectRoute = (redirectTo = "/") => (req, res, next) => {
  return req.session.user ? next() : res.redirect(redirectTo)
}

export default protectRoute