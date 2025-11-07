import Header from "../shared/components/ui/header/Header";
import Section from "@/shared/components/ui/section/Section";
import TestimonialCard from "@/shared/components/basic/cards/cardTestimonial";

export default function Page() {
  return (
    <>
      <Header title="Nexus" isInitial current="Home" />
      <Section title="Testimonios" subtitle="Lo que nuestros estudiantes dicen sobre su experiencia de aprendizaje y cómo nuestros cursos han impulsado su crecimiento personal y profesional.">
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-2">
          <TestimonialCard
            name="Laura M."
            profession="Estudiante Universitario"
            text="Me encantó el acompañamiento y la estructura de los contenidos. Sentí que realmente avanzaba cada semana y pude reforzar conceptos que veía en la universidad."
            image="https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?auto=format&fit=crop&q=80&w=540"
          />
          <TestimonialCard
            name="Andres L."
            profession="Estudiante Universitario"
            text="Estaba cambiando de carrera y estos cursos me ayudaron a construir una base sólida. Ahora me siento más segura y motivada para seguir aprendiendo.  "
            image="https://images.unsplash.com/photo-1654110455429-cf322b40a906?auto=format&fit=crop&q=60&w=400"
          />
        </div>
      </Section>
    </>
  );
}
