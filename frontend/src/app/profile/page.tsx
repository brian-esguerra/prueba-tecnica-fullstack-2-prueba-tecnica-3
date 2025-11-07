"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";

import Breadcrumbs from "@/shared/components/ui/breadcrumbs/Breadcrumbs";
import Section from "@/shared/components/ui/section/Section";

export default function Page() {
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  return (
    <>
      <Breadcrumbs current="Perfil" />
      <Section id="profile" title="Mi Perfil">
        <p>Bienvenido, {user?.fullName} </p>
      </Section>
    </>
  );
}
