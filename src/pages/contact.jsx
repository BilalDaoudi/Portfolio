import React, { useRef, useState } from "react";
import Header from "../components/header";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";

function Contact() {
  
  const langue = useSelector((data) => data.langue);
  const contact = useSelector((data) => data.contact);
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(""); // success or error
  const [showAlert, setShowAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4m88se9", "template_gom0g1x", form.current, {
        publicKey: "hYUkIeHt_f7pIPKud",
      })
      .then(
        () => {
          setAlertMessage("Message envoyé avec succès !");
          setAlertType("success");
          setShowAlert(true);
          form.current.reset();
          setTimeout(() => {
            setShowAlert(false);
          }, 7000);
        },
        (error) => {
          setAlertMessage("Échec de l'envoi du message. Veuillez réessayer.");
          setAlertType("error");
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 7000);
        }
      );
  };

  return (
    <>
      <Header />

      <section className="contact-section section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2 data-heading={contact[langue][0]}>{contact[langue][1]}</h2>
            </div>
          </div>
          <div className="row">
            <div className="contact-item">
              <div className="contact-item-inner outer-shadow">
                <i className="fas fa-phone"></i>
                <span>{contact[langue][2]}</span>
                <p>+2127 079 008 67</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-inner outer-shadow">
                <i className="fas fa-envelope"></i>
                <span>{contact[langue][3]}</span>
                <p>bilaldaoudi591@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-inner outer-shadow">
                <i className="fas fa-map-marker-alt"></i>
                <span>{contact[langue][4]}</span>
                <p>Jaadar Zegangan Nador</p>
              </div>
            </div>
          </div>
          <div className="row">
            {showAlert && (
              <div className={`alert ${alertType}`}>
                {alertMessage}
                <button
                  className="close-btn"
                  onClick={() => setShowAlert(false)}
                >
                  &times;
                </button>
              </div>
            )}
          </div>
          <div className="row">
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="w-50">
                    <div className="input-group outer-shadow hover-in-shadow">
                      <input
                        type="text"
                        placeholder={contact[langue][5]}
                        name="user_name" required
                        className="input-control"
                      />
                    </div>
                    <div className="input-group outer-shadow hover-in-shadow">
                      <input
                        type="email"
                        placeholder={contact[langue][6]}
                        name="user_email" required
                        className="input-control"
                      />
                    </div>
                    <div className="input-group outer-shadow hover-in-shadow">
                      <input
                        type="text"
                        placeholder={contact[langue][7]}
                        name="sujet"
                        required
                        className="input-control"
                      />
                    </div>
                  </div>
                  <div className="w-50">
                    <div className="input-group outer-shadow hover-in-shadow">
                      <textarea
                        name="message"
                        placeholder={contact[langue][8]} required
                        className="input-control"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="submit-btn">
                    <button
                      type="submit"
                      className="btn-1 outer-shadow hover-in-shadow"
                    >
                      Envoyer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .alert {
          padding: 15px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin: 10px;
          max-width: 100%;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: opacity 0.3s ease-in-out;
        }
        .alert.success {
          background-color: rgba(0, 0, 184, 0.3);
          color: #ffffff; 
          border: none; 
        
        }
        .alert.error {
          background-color: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }
        .close-btn {
          background: none;
          border: none;
          font-size: 20px;
          line-height: 1;
          cursor: pointer;
          color: inherit;
        }
        @media (max-width: 768px) {
          .alert {
            width: 100%;
            max-width: 100%;
            margin: 10px;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}

export default Contact;

// import React, { useRef } from "react";
// import Header from "../components/header";
// import emailjs from "@emailjs/browser";

// function Contact() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_4m88se9", "template_gom0g1x", form.current, {
//         publicKey: "hYUkIeHt_f7pIPKud",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };
//   return (
//     <>
//       <Header />
//       <section className="contact-section section" id="contact">
//         <div className="container">
//           <div className="row">
//             <div className="section-title">
//               <h2 data-heading="contact">Contactez-moi</h2>
//             </div>
//           </div>
//           <div className="row">
//             <div className="contact-item">
//               <div className="contact-item-inner outer-shadow">
//                 <i className="fas fa-phone"></i>
//                 <span>Téléphone</span>
//                 <p>+2127 079 008 67</p>
//               </div>
//             </div>
//             <div className="contact-item">
//               <div className="contact-item-inner outer-shadow">
//                 <i className="fas fa-envelope"></i>
//                 <span>E-mail</span>
//                 <p>bilaldaoudi591@gmail.com</p>
//               </div>
//             </div>
//             <div className="contact-item">
//               <div className="contact-item-inner outer-shadow">
//                 <i className="fas fa-map-marker-alt"></i>
//                 <span>Addresse</span>
//                 <p>Jaadar Zegangan Nador</p>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="contact-form">
//               <form ref={form} onSubmit={sendEmail}>
//                 <div className="row">
//                   <div className="w-50">
//                     <div className="input-group outer-shadow hover-in-shadow">
//                       <input
//                         type="text"
//                         placeholder="Nom"
//                         name="user_name"
//                         className="input-control"
//                       />
//                     </div>
//                     <div className="input-group outer-shadow hover-in-shadow">
//                       <input
//                         type="email"
//                         placeholder="Adresse e-mail"
//                         name="user_email"
//                         className="input-control"
//                       />
//                     </div>
//                     <div className="input-group outer-shadow hover-in-shadow">
//                       <input
//                         type="subject"
//                         placeholder="Sujet"
//                         name="sujet"
//                         className="input-control"
//                       />
//                     </div>
//                   </div>
//                   <div className="w-50">
//                     <div className="input-group outer-shadow hover-in-shadow">
//                       <textarea
//                         type="massage"
//                         name="message"
//                         placeholder="Message"
//                         className="input-control"
//                       ></textarea>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="submit-btn">
//                     <button
//                       type="submit"
//                       className="btn-1 outer-shadow hover-in-shadow"
//                     >
//                       Envoyer
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Contact;
