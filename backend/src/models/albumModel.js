import { time } from "console";
import mongoose from "mongoose";
import { ref } from "process";

const albumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  ImageUrl: {
    type: String,
    required: true,
  },
  songs: [
    {
      title: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song",
      },
    },
  ],
  timestamps: true,
});
export const Album = mongoose.model("Album", albumSchema);
