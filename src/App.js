import FacebookIcon from "./componentss/facebook";
import InstagramIcon from "./componentss/instagram";
import TwitterIcon from "./componentss/twiitter";
import { useRef, useState } from "react";
import image from "./assets/header-image.png";
import yemiImage from "./assets/Headshot.JPG";
import sendImg from "./assets/send-image.png";
import sittingHuman from "./assets/sitting.png";
import Nav from "./componentss/nav";
import "./App.css";
import { validateData } from "./utils";
import emailjs from "@emailjs/browser";

function App() {
  const [name, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const formRef = useRef();
  const [sendingMessage, setSendingMessage] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();

    const checkData = validateData({ name, email, message });
    const errors = Object.entries(checkData).length;
    console.log(errors);
    if (errors > 0) {
      setErrors(checkData);
      return;
    }

    setErrors({});

    // send the email
    try {
      setSendingMessage(true);
      const sendEmail = await emailjs.sendForm(
        "service_g9zwgfk",
        "template_xnnnbep",
        formRef.current,
        "0N4qbFxrD0vkKzOoY"
      );
      setSendingMessage(false);
      setMessageSent(true);
      setTimeout(() => {
        setMessageSent(false);
      }, 5000);
    } catch (error) {
      console.log(error);
      sendingMessage(false);
    }
  };
  return (
    <>
      <Nav />
      <main className="main-content">
        <section className="introduction" id="introduction">
          <div className="container">
            <div className="left">
              <h1 className="title">
                Accounting and Bookkeeping Services for your business.
              </h1>
              <p>
                Our team of highly Skilled accounting and financial
                professionals are available to help you grow your business by
                providing high-quality bookeeping and accounting services.
              </p>
              <a href="#contact">Send a message</a>
            </div>
            <div className="right">
              <img src={image} alt="Man giving accounting advice to client" />
            </div>
          </div>
        </section>
        <section className="offers" id="offers">
          <div className="container">
            <div className="left">
              <img src={sittingHuman} alt="Strong woman business" />
            </div>
            <div className="right">
              <h2 className="title">What we offer.</h2>
              <div className="offers">
                <div className="offer">
                  <h2 className="number">01</h2>
                  <div className="details">
                    <h3>Accounting System Setup</h3>
                    <p>
                      Business process automation for small and large
                      businesses.
                    </p>
                  </div>
                </div>
                <div className="offer">
                  <h2 className="number">02</h2>
                  <div className="details">
                    <h3>Business Process Improvement</h3>
                    <p>
                      Advice and Research on how to save costs and grow your
                      business.
                    </p>
                  </div>
                </div>
                <div className="offer">
                  <h2 className="number">03</h2>
                  <div className="details">
                    <h3>Virtual CFO</h3>
                    <p>
                      We act as your strategic partner on an ongoing basis to
                      help you grow your business. We provide you with the
                      service of a Chief Finance Officer for a fraction of the
                      real cost without compromising quality and standards.
                    </p>
                  </div>
                </div>
                <div className="offer">
                  <h2 className="number">04</h2>
                  <div className="details">
                    <h3>Training & Learning</h3>
                    <p>
                      Manpower is the lifeblood of any organization. We provide
                      the right training and development programs that will help
                      ensure that both employees and owners of the business
                      always have the right skills and information to function
                      properly at all times.
                    </p>
                  </div>
                </div>
                <div className="offer">
                  <h2 className="number">05</h2>
                  <div className="details">
                    <h3>Payroll</h3>
                    <p>Payroll Processing</p>
                  </div>
                </div>
                <div className="offer">
                  <h2 className="number">06</h2>
                  <div className="details">
                    <h3>Bookkeeping and Accounting</h3>
                    <p>
                      Accounts Receivable / Accounts Payable, Regular monthly
                      enteries, Reconciliation of Bank and Credit card
                      statements , Year-end close.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="container">
            <div className="left">
              <img
                src={sendImg}
                alt="Woman holding phone and sitting on floor"
              />
              <h2 className="title">We would love to hear from you?</h2>
              <p>
                To help us best serve your inquiry, we recommend that you first
                describe the issue you’re having before telling us what you want
                to achieve. You may also email or call us to make an
                appointment. Our general response time is one business day.
              </p>
            </div>
            <div className="right">
              <form className="contact-form" onSubmit={sendEmail} ref={formRef}>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Your name"
                    className={`${errors.name ? "input-error" : ""}`}
                    value={name}
                    onChange={({ target }) => setFirstname(target.value)}
                  />
                </div>

                <div className="input-container">
                  <input
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    className={`${errors.email ? "input-error" : ""}`}
                  />
                </div>
                <div className="input-container">
                  <textarea
                    value={message}
                    placeholder="Your message..."
                    onChange={({ target }) => setMessage(target.value)}
                    className={`${errors.message ? "input-error" : ""}`}
                    name="message"
                  ></textarea>
                </div>
                <div className="input-container">
                  <button
                    className={`btn ${
                      sendingMessage ? "sending-message" : ""
                    } ${messageSent ? "message-sent" : ""}`}
                    disabled={sendingMessage}
                  >
                    {sendingMessage
                      ? "Sending Message"
                      : messageSent
                      ? "Message sent"
                      : "Send message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="meet-yemi" id="meet-yemi">
          <div className="img-container">
            <img
              src={yemiImage}
              alt="Yemi is a chartered professional accountant"
            />
            <div className="details">
              <h2 className="title">Meet Yemi.</h2>
              <p>
                Yemi Olaleye is a Chartered Professional Accountant (CPA) with
                over 16 years of experience in accounting and finance. Yemi is
                an alumnus of the University of Liverpool, where he obtained his
                Master’s degree in International Accounting and Finance Yemi’s
                passion is to help businesses and individuals make better
                financial decisions by providing relevant financial and business
                advice
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <h2 className="logo">Noiretblanc</h2>
          <ul className="nav">
            <li>
              <a href="/contact-us">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="/our-team">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="/our-team">
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
