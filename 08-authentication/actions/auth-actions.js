"use server";
import { createAuthSession, destorySeesion } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/user";
import { redirect } from "next/navigation";

export const signup = async (prevState, formData) => {
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
    const id = createUser(email, hashedPassword);
    await createAuthSession(id);
    redirect("/training");
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
};

export const login = async (prevState, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const existingUser = getUserByEmail(email);
  if (!existingUser) {
    return {
      errors: {
        email: "Could not authenticate user. please check your credentials.",
      },
    };
  }

  const isValidPasword = verifyPassword(existingUser.password, password);
  if (!isValidPasword) {
    return {
      errors: {
        password: "Could not authenticate user. please check your credentials.",
      },
    };
  }
  await createAuthSession(existingUser.id);
  redirect("/training");
};

export const auth = async (mode, prevState, formData) => {
  if (mode === "login") {
    return login(prevState, formData);
  }
  return signup(prevState, formData);
};

export const logout = async () => {
  await destorySeesion();
  redirect("/");
};
