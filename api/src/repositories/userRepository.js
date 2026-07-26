import prisma from "../models/prismaClient.js";

export const findUserByUsernameWithPassword = async (username) => {
  return await prisma.user.findUnique({
    where: { username },
    select: { id: true, username: true, password: true },
  });
};

export const findUserByUsername = async (username) => {
  return await prisma.user.findUnique({
    where: { username },
  });
};
export const createNewUser = async (data) => {
  return await prisma.user.create({
    data,
  });
};
export const getAllUsers = async () => {
  return await prisma.user.findMany({
    include: {
      salaries: true,
      expenses: true,
    },
  });
};
