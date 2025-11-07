import Breadcrumbs from "../../shared/components/ui/breadcrumbs/Breadcrumbs";
import Section from "../../shared/components/ui/section/Section";
import CardService from "@/shared/components/basic/cards/cardService";

export default function Page() {
  return (
    <>
      <Breadcrumbs current="Servicios" />
      <Section id="services" title="Servicios" subtitle="Conoce nuestro servicios.">
        <div class="grid grid-cols-1 md:grid-cols-1 gap-6">
          <CardService title='Service 1' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' />
          <CardService title='Service 2' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' />
          <CardService title='Service 3' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' />
        </div>
      </Section>
    </>
  );
}
