"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { createAccount, signInUser } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

type FormType = "sign-in" | "sign-up";

const authFormSchema = (formType: FormType) => {
  return z.object({
    email: z.string().email(),
    fullName:
      formType === "sign-up"
        ? z.string().min(2).max(50)
        : z.string().optional(),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [accountId, setAccountId] = useState("");

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const user =
        type === "sign-up"
          ? await createAccount({
              fullName: values.fullName || "",
              email: values.email,
            })
          : await signInUser({ email: values.email });

      if (user) {
        router.replace(`admin/dashboard`);
      }
      console.log(user?.email);
      setAccountId(user.email);
    } catch {
      setErrorMessage("No se pudo procesar la solicitud. Intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex max-h-[800px] w-full max-w-[580px] flex-col justify-center space-y-6 transition-all lg:h-full lg:space-y-8"
        >
          <h1 className="text-[34px] leading-[42px] font-bold text-center text-light-100 md:text-left">
            {type === "sign-in"
              ? "Ingresar al panel"
              : "Crear cuenta de administrador"}
          </h1>

          {type === "sign-up" && (
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <div className="flex h-[78px] flex-col justify-center rounded-xl border border-light-300 px-4 shadow-drop-1">
                    <FormLabel className="text-light-100 pt-2 w-full">
                      Nombre completo
                    </FormLabel>

                    <FormControl>
                      <Input
                        placeholder="Ingresa tu nombre completo"
                        className="border-none shadow-none p-0 outline-none placeholder:text-light-200"
                        {...field}
                      />
                    </FormControl>
                  </div>

                  <FormMessage className="text-red ml-4" />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex h-[78px] flex-col justify-center rounded-xl border border-light-300 px-4 shadow-drop-1">
                  <FormLabel className="text-light-100 py-2 w-full">
                    Correo electrónico
                  </FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Ingresa tu correo"
                      className="border-none shadow-none p-0 outline-none placeholder:text-light-200"
                      {...field}
                    />
                  </FormControl>
                </div>

                <FormMessage className="text-red ml-4" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="otoru-500 hover:otoru-600 transition-all rounded-full"
            disabled={isLoading}
          >
            {type === "sign-in" ? "Ingresar" : "Crear cuenta"}

            {isLoading && (
              <Image
                src="/assets/icons/loader.svg"
                alt="cargando"
                width={24}
                height={24}
                className="ml-2 animate-spin"
              />
            )}
          </Button>

          {errorMessage && (
            <p className="text-error text-sm">*{errorMessage}</p>
          )}

          <div className="flex justify-center text-sm">
            <p className="text-light-100">
              {type === "sign-in" ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
            </p>

            <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className="ml-1 font-medium text-otoru-500"
            >
              {type === "sign-in" ? "Regístrate" : "Ingresar"}
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
};

export default AuthForm;
