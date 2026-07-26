import * as userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const saltRouds = 10;

    const userExists = await userRepository.findUserByUsername(username);
    if (userExists) {
      return res.status(409).json({ error: "Este usuário já existe" });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: "Senha inválida" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRouds);
    const user = await userRepository.createNewUser({
      username,
      password: hashedPassword,
    });

    res.status(201).json(user);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Erro ao criar usuário.", details: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await userRepository.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao buscar usuários.", details: error.message });
  }
};
