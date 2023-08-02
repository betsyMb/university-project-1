// Components
import { SocialMedia, Rooms } from "../../components";

// Templates
import { MainTemplate } from "../../templates";

// Images
import fachada_completa from "../../images/fachada_completa.jpg";

export default function Root() {
  return (
    <MainTemplate>
      <>
        <div id="top"></div> {/* <h1 className="text-center my-4">Hotel Industrial Genesis</h1> */}
        <div className="d-flex justify-content-evenly">
          <img src={fachada_completa} className="w-100" height="650" />
        </div>
        <div id="aboutUs" className="mb-4"></div>
        {/* About Ud */}
        <section className="text-center px-5">
          <h3 className="my-3">Acerca de Nosotros</h3>
          <article className="d-flex flex-column">
            <p className="p-1">
              Contamos con Planta Electrica en caso de falla de electricidad, <br /> agua caliente, TV, internet y aire
              acondicionado
            </p>
            <p className="p-1">
              Somos un Hotel en donde podras descansar con las comodidades que necesitas, <br /> constamos con ambiente
              de espiritualidad, tranquilidad y confort. Servicios y atención de calidad!
            </p>
            <p className="p-3">Estamos Ubicados en Las vegas de Táriba 5001 Táriba, Táchira, Venezuela.</p>
          </article>
        </section>
        {/* Rooms */}
        <div id="habitaciones"></div>
        <Rooms />
        {/* Social Media */}
        <SocialMedia />
      </>
    </MainTemplate>
  );
}
