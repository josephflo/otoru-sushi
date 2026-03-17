"use server";

export const createAccount = async ({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) => {
  try {
    const user = {
      fullName,
      email,
    };
    console.log("Cuenta creada:", user);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("No se pudo crear la cuenta");
  }
};

export const signInUser = async ({
  email,
}: {
  email: string;
}) => {
  try {
    const user = {
      email,
    };
    console.log("Usuario autenticado:", user);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("No se pudo iniciar sesión");
  }
};