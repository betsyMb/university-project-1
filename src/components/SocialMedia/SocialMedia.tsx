// Styles
import "./styles.css";

export default function SocialMedia() {
  return (
    <section className="d-flex flex-column align-items-center my-4" id="contactUs">
      <h3 className="m-4">Contactanos!</h3>
      <div className="d-flex gap-5">
        <a href="https://www.instagram.com/hotelgenesis1/?igshid=MzRlODBiNWFlZA==" target="_blank">
          <i className="bi bi-instagram icon"></i>
        </a>
        <a href="https://www.facebook.com/hotelgenesis1" target="_blank">
          <i className="bi bi-facebook icon"></i>
        </a>
        <a href="tel:0276-3947325" target="_blank">
          <i className="bi bi-telephone-fill icon"></i>
        </a>
        <a href="mailto:hotelindustrialgenesis@gmail.com" target="_blank">
          <i className="bi bi-envelope-fill icon"></i>
        </a>
      </div>
    </section>
  );
}
