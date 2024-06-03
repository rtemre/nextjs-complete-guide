"use server";
import { hashUserPassword } from "@/lib/hash";
import { createUser } from "@/lib/user";
import { redirect } from "next/navigation";

export const signup = (prevState, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};
  if (!email.includes("@")) {
    errors = "Please enter valid email.";
  }
  if (!password.trim().length > 8) {
    errors = "Password must be atleast of 8 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  const hashedPassword = hashUserPassword(password);
  try {
    createUser(email, hashedPassword);
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          email: "It seems like accounts for chosen email already exists",
        },
      };
    }
    throw error;
  }
  redirect("/training");
};