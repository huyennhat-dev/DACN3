import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({
  sound: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Sound' 
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  parent_id: {
    type: Schema.Types.ObjectId,
    ref: 'Comment', 
    default: null
  },
  content: {
    type: String,
    required: true
  },

});


const commentModel = mongoose.model("Comment", commentSchema);

export default commentModel;
