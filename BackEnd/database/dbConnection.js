import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_JOB_SEEKING_WEB_APPLICATION",
    }) .then(() => {
      console.log("Database Connection Successfully.....");
    }).catch((err) => {
      console.log(`Some Error Founded while Connecting to Database. ${err}`);
    });
};