import FacebookIcon from "./componentss/facebook";
import InstagramIcon from "./componentss/instagram";
import TwitterIcon from "./componentss/twiitter";
import { useState } from "react";
import image from "./assets/header-image.png";
import yemiImage from "./assets/Headshot.JPG";
import womamImage from "./assets/woman-business.png";
import Nav from "./componentss/nav";
import "./App.css";

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <Nav />
      <main className="main-content">
        <section className="introduction">
          <div className="container">
            <div className="left">
              <h1 className="title">
                Professional Accounting and Bookeeping Services for your
                business.
              </h1>
              <p>
                Our team of highly Skilled accounting and financial professional
                are available to help you grow your business by providing
                high-quality bookeeping and accounting services.
              </p>
              <a href="#contact">Send a message</a>
            </div>
            <div className="right">
              <img src={image} alt="Man giving accounting advice to client" />
            </div>
          </div>
        </section>
        <section className="offers">
          <div className="container">
            <div className="left">
              <img src={womamImage} alt="Strong woman business" />
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
                    <h3>Bookkeeping and Accounting</h3>
                    <p>
                      Accounts Receivable / Accounts Payable, Regular monthly
                      enteries, Reconciliation of Bank and Credit card
                      statements , Year-end close.
                    </p>
                  </div>
                </div>
                <div className="offer">
                  <h2 className="number">04</h2>
                  <div className="details">
                    <h3>Payroll</h3>
                    <p>Payroll Processing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="meet-yemi">
          <div className="img-container">
            <img
              src={yemiImage}
              alt="Yemi is a chartered professional accountant"
            />
          </div>
          <div className="details">
            <h2 className="title">Meet Yemi.</h2>
            <p>
              Yemi Olaleye is a Chartered Professional Accountant (CPA) with
              over 16 years of experience in accounting and finance. Yemi is an
              alumnus of the University of Liverpool, where he obtained his
              Master’s degree in International Accounting and Finance Yemi’s
              passion is to help businesses and individuals make better
              financial decisions by providing relevant financial and business
              advice
            </p>
          </div>
        </section>
        <section className="contact">
          <div className="container">
            <div className="left">
              <h2 className="title">We would love to hear from you?</h2>
              <p>
                To help us best serve your inquiry, we recommend that you first
                describe the issue you’re having before telling us what you want
                to achieve. You may also email or call us to make an
                appointment. Our general response time is one business day.
              </p>
            </div>
            <div className="right">
              <form className="contact-form">
                <div className="names-container">
                  <div className="input-container">
                    <input
                      type="text"
                      placeholder="Firstname"
                      value={firstname}
                      onChange={({ target }) => setFirstname(target.value)}
                    />
                  </div>
                  <div className="input-container">
                    <input
                      type="text"
                      placeholder="Lastname"
                      value={lastname}
                      onChange={({ target }) => setLastname(target.value)}
                    />
                  </div>
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                  />
                </div>
                <div className="input-container">
                  <textarea
                    value={message}
                    placeholder="Your message..."
                    onChange={({ target }) => setMessage(target.value)}
                  ></textarea>
                </div>
                <div className="input-container">
                  <button className="btn">Send message</button>
                </div>
              </form>
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
