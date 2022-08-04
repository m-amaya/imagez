const path = require("node:path");

module.exports = {
  webpack: {
    alias: {
      "~": path.resolve(__dirname, "src"),
      "~/types": path.resolve(__dirname, "src/@types/types.ts"),
    },
  },
};
