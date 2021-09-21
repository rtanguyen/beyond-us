const { Schema } = require("mongoose");

const attendanceSchema = new Schema(
  {
    username: {
      type: String,
      // required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

module.exports = attendanceSchema;
