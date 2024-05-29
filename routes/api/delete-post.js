import { deletePost } from "../../controllers/post.js"

export default async (req, res) => {
  try {
    const id = req.params.postId
    await deletePost(id)
    res.json({status: true})
  } catch (error) {
    res.status(401).json({error})
  } 
}