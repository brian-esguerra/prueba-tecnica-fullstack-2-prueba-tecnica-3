import Breadcrumbs from "../../shared/components/ui/breadcrumbs/Breadcrumbs";
import Section from "../../shared/components/ui/section/Section";
import CardCourse from "../../shared/components/basic/cards/cardCourse";

export default function Page() {
  return (
    <>
      <Breadcrumbs current="Top" parent={{ label: "Cursos", href: "/courses" }} />
      <Section id="services" title="Cursos populares" textButton="Buscar cursos" linkButton="/find" subtitle="Conoce nuestro amplio catálogo de cursos.">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardCourse
            id={'1'}
            image={'https://plus.unsplash.com/premium_photo-1742404279113-88a0ef9d4951?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400'}
            key={'k1'}
            tag={'Básico'}
            title={'Liderazgo'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            category={'Emprendimiento'}
            starDate={'10/02/26'}
            teacher={'Daniela Lopez'}
          />
          <CardCourse
            id={'1'}
            image={'https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870'}
            key={'k2'}
            tag={'Básico'}
            title={'Comunicación acertiva'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            category={'Emprendimiento'}
            starDate={'05/03/26'}
            teacher={'Daniela Lopez'}
          />
        </div>
      </Section>
    </>
  );
}
