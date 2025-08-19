import mongoose from "mongoose";

const albumSchema = new mongoose.Schema(
  {
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
    coverImageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Album = mongoose.model("Album", albumSchema);