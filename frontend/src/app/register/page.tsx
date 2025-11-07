"use client"
import { useEffect, useState } from 'react';
import LayoutColumn from "@/shared/components/basic/layout/LayoutColumn";
import Input from '@/shared/components/basic/input/InputText';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const requiredMessage = 'Este campo es requerido';

const schema = yup.object({
  name: yup.string().required(requiredMessage),
  idType: yup.string().required(requiredMessage),
  idNumber: yup.string().required(requiredMessage),
  email: yup.string().email("Correo inválido").required(requiredMessage),
  password: yup.string().min(6, "La contraseña debe tener al menos 6 caracteres").required(requiredMessage),
});

export default function Page() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [showError, setShowError] = useState(false);

  const onSubmit = async({ name, idType, idNumber, email, password }) => {
    setShowError(false);
    let role = 'Student';
    let data = { name, idType, idNumber, email, password, role}
    console.log(data);
  };

  return (
    <>
      <LayoutColumn title="Registro">
        <form id="login" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 grid grid-cols-1 gap-4">
            <Input
              name="name"
              label="Nombre"
              type="text"
              onChange={() => setShowError(false)}
              register={register}
              errors={errors}
            />
            <Input
              name="idType"
              label="Tipo de documento"
              type="text"
              onChange={() => setShowError(false)}
              register={register}
              errors={errors}
            />
            <Input
              name="idNumber"
              label="Número de documento"
              type="text"
              onChange={() => setShowError(false)}
              register={register}
              errors={errors}
            />
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
            <button className="w-full px-6 py-2 mb-3 text-lg text-white bg-[#0099aa] rounded-md sm:mb-0 hover:bg-[#00b7cb] sm:w-auto">
              Regístrate
            </button>
          </div>
        </form>
      </LayoutColumn>
    </>
  );
}
