import bcrypt from "bcrypt";
import * as userRepository from "../repositories/userRepository.js";
import { generateToken } from "../utils/jwt.js";

export const login = async (username, password) => {
  const user = await userRepository.findUserByUsernameWithPassword(username);
  if (!user) {
    throw new Error("Credenciais inválidas");
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new Error("Credenciais inválidas");
  }

  return generateToken(user);
};
