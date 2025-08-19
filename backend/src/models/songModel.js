import mongoose from "mongoose";
import { Z_DEFAULT_STRATEGY } from "zlib";

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    audioUrl: {
      type: String,
      required: true,
    },
    album: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Album",
      required: false,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    duration : {
      type: Number,
      required: true,
    },
  }
);

export const Song = mongoose.model("Song", songSchema);
export default Song;