import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contat<span>o</span>
      </h2>
      <div className="contact-container">
        <div className="contact-box">
          <h2>
            <FaWhatsapp className="contact-icon" /> WhatsApp
          </h2>
          <h3>(51)99294-7917</h3>
        </div>

        <div className="contact-box">
          <h2>
            <AiOutlineMail className="contact-icon" /> Email
          </h2>
          <h3>alexandreoliveiradev7@gmail.com</h3>
        </div>

        <div className="contact-box">
          <h2>
            <CiLocationOn className="contact-icon" /> Localização
          </h2>
          <h3>Tramandaí / RS</h3>
        </div>
      </div>
    </section>
  );
}
