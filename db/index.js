import mongoose from "mongoose";

const connectToDb = () => 
  mongoose.connect(`mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@test-cluster.73qnixb.mongodb.net/blogchefDB?retryWrites=true&w=majority&appName=Test-Cluster`)

export default connectToDb