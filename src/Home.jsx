import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IonIcon } from '@ionic/react';
import emailjs from '@emailjs/browser';
import { chatbubblesOutline, sparklesOutline, trophyOutline, peopleOutline, personOutline, bookOutline, gameControllerOutline, headsetOutline, happyOutline, medkitOutline } from 'ionicons/icons';
import { MdNorthEast } from "react-icons/md";
import './style/Home.css';
import Logo from './assets/logo.png'
import HomeImage from './assets/home.svg'
import Contact from './assets/contact.svg'
import ContactBg from './assets/contact_bg.jpg'
import About from './assets/about.png'

const Home = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({fullName: '', email: '', service: '', lang: '', message: '',});
  const [errors, setErrors] = useState({});

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleTryLuna = () => {
    navigate("/chat");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.lang) newErrors.lang = 'Please select a language';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Appointment booked successfully!');
      setFormData({ fullName: '', email: '', service: '', lang: '', message: '',});
      setErrors({});
    }
    emailjs.sendForm('service_ey7cdg4', 'template_tcgiffv', e.target, 'JYdhTNUvkruG1_Ct7')
  };

  return (
    <div>
      {/* NavBar */}
      <nav>
        <div className="nav__header">
          <div className="logo nav__logo">
            <img src={Logo} alt="InsureBazaar Logo" className="logo__image" />
            <a href="#">LUNA</a>
          </div>
          <div className="nav__menu__btn" id="menu-btn" onClick={handleNavToggle}>
            <span><i className={navOpen ? "ri-close-line" : "ri-menu-line"}></i></span>
          </div>
        </div>
        <div>
          <ul className={`nav__links ${navOpen ? "open" : ""}`} id="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="section__container header__container" id="home">
        <div className="header__image">
          <img src={HomeImage} alt="header" />
        </div>
        <div className="header__content">
          <h1>A Friend to Listen, <span>Luna to Understand</span></h1>
          <p className="section__description">
            Meet Luna, your caring companion for sharing stories, solving problems, and spreading smiles.
          </p>
          <div className="header__btn">
            <button className="btn" onClick={handleTryLuna}>
              Try Luna
              <MdNorthEast style={{ marginLeft: "8px", fontSize: "1.2rem" }} />
            </button>
          </div>
        </div>
      </header>

      {/* About Us */}
      <section className="overline" id="about">
        <div className="container">
          <h2 className="about__title">About Us</h2>
          <img src={About} className="about-image"/>
          <div className="overlines">
            <div className="row">
              <div className="col">
                <IonIcon icon={chatbubblesOutline} />
                <h2 className="overline-heading">Meet Luna</h2>
                <p className="para-line white">Luna is your virtual companion, designed to understand your emotions, provide support, improve your health, and keep you entertained.</p>
              </div>
              <div className="col">
                <IonIcon icon={sparklesOutline} />
                <h2 className="overline-heading">Why Luna?</h2>
                <p className="para-line white">We believe in building connections that matter. Luna isn't just a chatbot—it's your friend, always ready to engage, assist, and uplift you.</p>
              </div>
              <div className="col">
                <IonIcon icon={peopleOutline} />
                <h2 className="overline-heading">Our Mission</h2>
                <p className="para-line white">To create a safe, supportive, and engaging space where technology bridges the gap between understanding and companionship.</p>
              </div>
              <div className="col">
                <IonIcon icon={trophyOutline} />
                <h2 className="overline-heading">Leading Company</h2>
                <p className="para-line white">As a leading AI companion, Luna has a proven track record of delivering meaningful interactions, personalized support, and user satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <h2 className="section__title" id="services">Services</h2>
      <section className="section__container banner__container">
        <div className="banner__card">
          <span className="banner__icon"><i className="ri-bowl-fill"></i><IonIcon icon={personOutline} /></span>
          <h4>Personal Assistant</h4>
          <p>Luna acts as your personal assistant, managing your daily tasks, setting reminders, organizing your schedule, and helping you stay on top of your goals.</p>
          <button className="btn-hover">Learn More</button>
        </div>
        <div className="banner__card">
          <span className="banner__icon"><i className="ri-truck-fill"></i><IonIcon icon={bookOutline} /></span>
          <h4>Learning & Education</h4>
          <p>Luna is your learning partner, offering resources, tutorials, and interactive lessons to help you grow your skills and knowledge in various fields.</p>
          <button className="btn-hover">Learn More</button>
        </div>
        <div className="banner__card">
          <span className="banner__icon"><i className="ri-star-smile-fill"></i><IonIcon icon={gameControllerOutline} /></span>
          <h4>Games & Fun</h4>
          <p>Take a break and enjoy engaging games and activities with Luna. From puzzles to trivia, Luna brings fun right to your fingertips, ensuring you're entertained.</p>
          <button className="btn-hover">Learn More</button>
        </div>
        <div className="banner__card">
          <span className="banner__icon"><i className="ri-bowl-fill"></i><IonIcon icon={headsetOutline} /></span>
          <h4>Entertainment</h4>
          <p>With Luna, enjoy personalized entertainment like music recommendations, movie suggestions, and interactive storytelling. Always something to keep you engaged!</p>
          <button className="btn-hover">Learn More</button>
        </div>
        <div className="banner__card">
          <span className="banner__icon"><i className="ri-truck-fill"></i><IonIcon icon={medkitOutline} /></span>
          <h4>Health Assistant</h4>
          <p>Luna offers health tracking, fitness advice, and mindfulness tips to help you stay healthy and well-balanced. Your personal health assistant is always here to guide you.</p>
          <button className="btn-hover">Learn More</button>
        </div>
        <div className="banner__card">
          <span className="banner__icon"><i className="ri-star-smile-fill"></i><IonIcon icon={happyOutline} /></span>
          <h4>Virtual Friend</h4>
          <p>Luna is your virtual friend, always available to listen, chat, and offer emotional support. Whether you're happy or sad, Luna is here to connect with you.</p>
          <button className="btn-hover">Learn More</button>
        </div>
      </section>

      {/* Contact Us */}
      <div className="contact-form" id="contact">
        <div className="background">
          <img src={ContactBg} alt="Background" className="background-img" />
          <div className="filter"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="form-container">
                <h1 className="form-title">Contact Us</h1>
                <h2 className="form-subtitle">To know more about us</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group-1">
                    <div className="form-group">
                      <input type="text" name="fullName" placeholder="Full Name *" value={formData.fullName} onChange={handleChange} className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}/>
                      {errors.fullName && <div className="error-message">{errors.fullName}</div>}
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} className={`form-control ${errors.email ? 'is-invalid' : ''}`}/>
                      {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>
                  </div>
                  <div className="form-group-1">
                    <div className="form-group">
                      <select name="service" value={formData.service} onChange={handleChange} className={`form-select ${errors.service ? 'is-invalid' : ''}`}>
                        <option value="">Service *</option>
                        <option value="Service 1">Customer Support</option>
                        <option value="Service 2">Consultation</option>
                        <option value="Service 3">Raise a Complaint</option>
                      </select>
                      {errors.service && <div className="error-message">{errors.service}</div>}
                    </div>
                    <div className="form-group">
                      <select name="lang" value={formData.lang} onChange={handleChange} className={`form-select ${errors.lang ? 'is-invalid' : ''}`}>
                        <option value="">Language *</option>
                        <option value="Lang 1">English</option>
                        <option value="Lang 2">Hindi</option>
                        <option value="Lang 3">Tamil</option>
                      </select>
                      {errors.lang && <div className="error-message">{errors.lang}</div>}
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea name="message" placeholder="Message *" value={formData.message} onChange={handleChange} className={`form-control ${errors.message ? 'is-invalid' : ''}`}></textarea>
                    {errors.message && <div className="error-message">{errors.message}</div>}
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
            </div>
          </div>
          <div>
            <img src={Contact} className="contact-image"/>
          </div>
        </div>
      </div>
    </div>

      {/* Footer */}
      <footer className="footer" id="footer">
        <div className="section__container footer__container">
          <div className="footer__col">
            <div className="logo footer__logo">
              <a href="#" style={{color:'#FFD700'}}>LUNA</a>
            </div>
            <p className="section__description">
              Enhance your experience with Luna, your AI companion, offering personalized support and meaningful interactions powered by advanced technology
            </p>
            <div className="social">
              <a href="#" class="footer__social"><i class='bx bxl-facebook'></i></a>
              <a href="#" class="footer__social"><i class='bx bxl-instagram'></i></a>
              <a href="#" class="footer__social"><i class='bx bxl-twitter'></i></a>
            </div>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            <ul className="footer__links">
              <li><a href="#">Personal Assistant</a></li>
              <li><a href="#">Entertainment Assistant</a></li>
              <li><a href="#">Health Assistance</a></li>
              <li><a href="#">Learning Assistant</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Information</h4>
            <ul className="footer__links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <ul className="footer__links">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bar">
          Copyright © 2024 LUNA. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;