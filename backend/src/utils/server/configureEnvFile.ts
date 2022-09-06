//* This file is being used in index.ts and is a utility for loading the environment variables in development mode

import dotenv, { DotenvSafeOptions } from "dotenv-safe";
import path from "path";

const config: DotenvSafeOptions = {
  example: path.resolve(process.cwd(), "env", ".example.env"),
};

//! Only load the development mode if the NODE_ENV is not production or test
if (process.env.NODE_ENV === "production") {
  config.path = path.resolve(process.cwd(), "env", ".build.env");
} else if (process.env.NODE_ENV === "test") {
  config.path = path.resolve(process.cwd(), "env", ".test.env");
} else if (process.env.NODE_ENV === "ci") {
  config.path = path.resolve(process.cwd(), "env", ".ci.env");
} else {
  config.path = path.resolve(process.cwd(), "env", ".dev.env");
}

dotenv.config(config);
