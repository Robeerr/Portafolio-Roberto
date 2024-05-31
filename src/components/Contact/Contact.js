import React, { useEffect } from "react";
import "./Contact.css";
import ContactImg from "../../img/contact.jpg";

const Contact = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".contact-input");

    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        input.parentNode.classList.add("focus");
        input.parentNode.classList.add("not-empty");
      });

      input.addEventListener("blur", () => {
        if (input.value === "") {
          input.parentNode.classList.remove("not-empty");
        }
        input.parentNode.classList.remove("focus");
      });
    });
  }, []);

  const phoneNumber = "634410783";
  const message = "Hola, me gustaría saber más sobre tus servicios.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <section className="contact_">
      <div className="container" data-aos="fade-up">
        <div className="left_" data-aos="fade-right">
          <div className="form-wrapper">
            <div className="contact-heading">
              <h1>
                Tienes alguna pregunta? Hablemos<span>!.</span>
              </h1>
              <p className="text">
                O puedes enviarme un correo a:{" "}
                <a href="mailto:dev.rober07@gmail.com">dev.rober07@gmail.com</a>
              </p>
            </div>
            <form action="Contact.js" method="post" className="contact-form">
              <div className="input-wrap">
                <input
                  type="text"
                  name="nombre"
                  placeholder=" "
                  className="contact-input"
                  autoComplete="off"
                  required
                />
                <label>Nombre</label>
                <i className="icon_ fa-solid fa-address-card"></i>
              </div>

              <div className="input-wrap">
                <input
                  type="text"
                  name="apellidos"
                  placeholder=" "
                  className="contact-input"
                  autoComplete="off"
                  required
                />
                <label>Apellidos</label>
                <i className="icon_ fa-solid fa-address-card"></i>
              </div>

              <div className="input-wrap w-100">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  className="contact-input"
                  autoComplete="off"
                  required
                />
                <label>Email</label>
                <i className="icon_ fa-solid fa-envelope"></i>
              </div>

              <div className="input-wrap textarea w-100">
                <textarea
                  name="mensaje"
                  placeholder=" "
                  className="contact-input"
                  autoComplete="off"
                  required
                ></textarea>
                <label>Mensaje</label>
                <i className="icon_ fa-solid fa-inbox"></i>
              </div>

              <div className="contact-buttons">
                <label htmlFor="file-upload" className="btn_ upload">
                  <span>
                    <i className="fa-solid fa-paperclip"></i> Añadir archivo
                  </span>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  name="file"
                  style={{ display: "none" }}
                />
                <input type="submit" value="Enviar Mensaje" className="btn_" />
                <a href={whatsappUrl} className="btn_ whatsapp">
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="right_" data-aos="fade-left">
          <div className="image-wrapper">
            <img src={ContactImg} alt="Contact" className="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
