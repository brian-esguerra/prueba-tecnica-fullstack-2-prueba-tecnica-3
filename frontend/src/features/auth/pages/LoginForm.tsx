"use client"
import { useEffect, useState } from 'react';
import LayoutColumn from "@/shared/components/basic/layout/LayoutColumn";
import Input from '@/shared/components/basic/input/InputText';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { AuthService } from "../api/auth.service";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/auth.slice";
import { useRouter } from "next/navigation";

const requiredMessage = 'Este campo es requerido';

const schema = yup.object({
  email: yup.string().email("Correo inválido").required(requiredMessage),
  password: yup.string().min(6, "La contraseña debe tener al menos 6 caracteres").required(requiredMessage),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [showError, setShowError] = useState(false);

  const onSubmit = async ({ email, password }) => {
    setShowError(true);
    try {
      const res = await AuthService.login({email, password});
      console.log("ees- login:", res);
      const { user, token } = res.data;
      dispatch(setCredentials({ user, token }));
      router.push("/profile"); // validar por rol -- Student
    } catch (err: any) {
      // clear form
      console.error("Error en registro:", err.response?.data?.error );
      setShowError(true);
      alert(err.response?.data?.details || "Error al iniciar sesión");
    }
  };

  return (
    <>
      <LayoutColumn title="Login">
        <form id="login" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-6 grid grid-cols-1 gap-6">
            <Input
              name="email"
              label="Correo electrónico"
              type="text"
              onChange={() => setShowError(false)}
              register={register}
              errors={errors}
            />
            <Input
              name="password"
              label="Contraseña"
              type="password"
              onChange={() => setShowError(false)}
              register={register}
              errors={errors}
            />
          </div>
          <div className="mt-6 flex justify-end">
            <button class="w-full px-6 py-2 mb-3 text-lg text-white bg-[#0099aa] rounded-md sm:mb-0 hover:bg-[#00b7cb] sm:w-auto">
              Iniciar sesión
            </button>
          </div>
          <div className="mt-6 flex justify-end">
            <label>No tienes una cuenta? </label>
            <a id="link" className="text-[#00b7cb] font-regular hover:underline ml-1" href="/register">Registrate</a>
          </div>
        </form>
      </LayoutColumn>
    </>
  );
}
