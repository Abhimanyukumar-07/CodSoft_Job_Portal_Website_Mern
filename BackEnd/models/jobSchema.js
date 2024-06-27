import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title."],
    minLength: [5, "Title must contain at least 5 Characters!"],
    maxLength: [40, "Title cannot exceed 40 Characters!"],
  },
  description: {
    type: String,
    required: [true, "Please provide decription is it necessary."],
    minLength: [25, "Description must contain at least 25 Characters!"],
    maxLength: [300, "Description cannot exceed 300 Characters!"],
  },
  category: {
    type: String,
    required: [true, "Please provide a category in the section."],
  },
  country: {
    type: String,
    required: [true, "Please provide a country name correctly in the given section."],
  },
  city: {
    type: String,
    required: [true, "Please provide a city name correctly in the given section."],
  },
  location: {
    type: String,
    required: [true, "Please provide Correct location carefully."],
    minLength: [30, "Location must contian at least 30 characters!"],
  },
  fixedSalary: {
    type: Number,
    minLength: [5, "Salary must contain at least 5 digits"],
    maxLength: [9, "Salary cannot exceed 9 digits"],
  },
  salaryFrom: {
    type: Number,
    minLength: [5, "Salary must contain at least 5 digits"],
    maxLength: [9, "Salary cannot exceed 9 digits"],
  },
  salaryTo: {
    type: Number,
    minLength: [5, "Salary must contain at least 5 digits"],
    maxLength: [9, "Salary cannot exceed 9 digits"],
  },
  expired: {
    type: Boolean,
    default: false,
  },
  jobPostedOn: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Job = mongoose.model("Job", jobSchema);