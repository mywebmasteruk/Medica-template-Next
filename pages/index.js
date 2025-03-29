import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Features from '../components/features'
import Practice from '../components/practice'
import Doctor from '../components/doctor'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Medica template</title>
          <meta property="og:title" content="Medica template" />
        </Head>
        <div data-modal="practices" className="home-modal1">
          <div className="home-practices1">
            <div className="home-heading10">
              <span className="home-header10">Our practices</span>
              <svg
                viewBox="0 0 1024 1024"
                data-close="practices"
                className="home-close"
              >
                <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
            <div className="home-grid1">
              <div className="home-section1">
                <div className="home-heading11">
                  <span className="home-header11">Cardiology</span>
                  <span className="home-caption1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text10">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image10"
                  />
                </div>
              </div>
              <div className="home-section2">
                <div className="home-heading12">
                  <span className="home-header12">Orthopedics</span>
                  <span className="home-caption2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text11">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image11"
                  />
                </div>
              </div>
              <div className="home-section3">
                <div className="home-heading13">
                  <span className="home-header13">Ophtalmology</span>
                  <span className="home-caption3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text12">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image12"
                  />
                </div>
              </div>
              <div className="home-section4">
                <div className="home-heading14">
                  <span className="home-header14">Pediatrics</span>
                  <span className="home-caption4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text13">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image13"
                  />
                </div>
              </div>
              <div className="home-section5">
                <div className="home-heading15">
                  <span className="home-header15">Nutrition</span>
                  <span className="home-caption5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text14">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image14"
                  />
                </div>
              </div>
              <div className="home-section6">
                <div className="home-heading16">
                  <span className="home-header16">General</span>
                  <span className="home-caption6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text15">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image15"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="home-hero">
          <header className="home-header17">
            <header data-thq="thq-navbar" className="home-navbar">
              <div className="home-left1">
                <img
                  alt="image"
                  src="/Branding/logo-1500h.png"
                  className="home-logo"
                />
                <nav className="home-links1">
                  <a href="#features" className="home-link10">
                    Features
                  </a>
                  <a href="#how-it-works" className="home-link11">
                    How it works
                  </a>
                  <span className="home-link12">Prices</span>
                  <a href="#schedule" className="home-link13">
                    Contact
                  </a>
                </nav>
              </div>
              <div data-thq="thq-navbar-btn-group" className="home-right1">
                <button className="home-phone button">
                  <img
                    alt="image"
                    src="/Icons/phone.svg"
                    className="home-image16"
                  />
                  <span className="home-text16">+0 123-456-789</span>
                </button>
                <a href="#book" className="home-book1 button button-main">
                  <img
                    alt="image"
                    src="/Icons/calendar.svg"
                    className="home-image17"
                  />
                  <span className="home-text17">Book an appointment</span>
                </a>
              </div>
              <div data-thq="thq-burger-menu" className="home-burger-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon2">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className="home-nav1"
                >
                  <div className="home-container2">
                    <img
                      alt="image"
                      src="/Branding/logo-1500h.png"
                      className="home-image18"
                    />
                    <div data-thq="thq-close-menu" className="home-menu-close">
                      <svg viewBox="0 0 1024 1024" className="home-icon4">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <nav
                    data-thq="thq-mobile-menu-nav-links"
                    data-role="Nav"
                    className="home-nav2"
                  >
                    <span className="home-text18">Features</span>
                    <span className="home-text19">How it works</span>
                    <span className="home-text20">Prices</span>
                    <span className="home-text21">Contact</span>
                    <a href="#book" className="home-book2 button button-main">
                      <img
                        alt="image"
                        src="/Icons/calendar.svg"
                        className="home-image19"
                      />
                      <span className="home-text22">Book an appointment</span>
                    </a>
                  </nav>
                </div>
              </div>
            </header>
          </header>
          <div className="home-main1">
            <div className="home-content10">
              <div className="home-heading17">
                <h1 className="home-header18">
                  Experienced general practitioners who have an eye for your
                  care
                </h1>
                <p className="home-caption7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <button className="button button-main home-book3">
                <img
                  alt="image"
                  src="/Icons/calendar.svg"
                  className="home-image20"
                />
                <span>Book an appointment</span>
              </button>
            </div>
            <div className="home-image21">
              <img
                alt="image"
                src="/doctor-image-1500w.png"
                className="home-image22"
              />
            </div>
          </div>
          <div id="features" className="home-features1">
            <div className="home-content11">
              <Features></Features>
              <Features title="Virtual Clinic"></Features>
              <Features title="Clinical results"></Features>
            </div>
          </div>
          <div className="home-background"></div>
        </section>
        <section className="home-practices2">
          <div className="home-heading18">
            <h2 className="home-text24">Our practices</h2>
            <p className="home-text25">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-content12">
            <div className="home-grid2">
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper1">
                    <Practice></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper2">
                    <Practice title="Orthopedics"></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper3">
                    <Practice title="Ophtalmology"></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper4">
                    <Practice title="Pediatrics"></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper5">
                    <Practice title="Nutrition"></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper6">
                    <Practice title="General"></Practice>
                  </div>
                </a>
              </Link>
            </div>
            <button data-open="practices" className="button button-main">
              <span>All practices</span>
            </button>
          </div>
        </section>
        <section id="how-it-works" className="home-why">
          <div className="home-heading19">
            <h2 className="home-header19">Why choose us</h2>
            <p className="home-header20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-content13">
            <div className="home-video1">
              <video
                src
                poster="/video-1500w.png"
                className="home-video2"
              ></video>
              <div className="home-play">
                <img
                  alt="image"
                  src="/Icons/play.svg"
                  className="home-image23"
                />
              </div>
            </div>
            <div className="home-caption8">
              <h3 className="home-header21">
                Consectetur adipiscing elit, sed do eiusmod tempor
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h3>
              <p className="home-header22">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </section>
        <section className="home-features2">
          <div className="home-section7">
            <div className="home-content14">
              <div className="home-header23">
                <h2 className="home-heading20">
                  Dedicated doctors with the core mission to help.
                </h2>
                <p className="home-capton1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="read-more">
                <span className="home-text27">See our doctors</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image24"
                />
              </div>
            </div>
            <img alt="image" src="/xray-1500w.png" className="home-image25" />
          </div>
          <div className="home-section8">
            <div className="home-content15">
              <div className="home-header24">
                <h2 className="home-heading21">
                  Get access to specialty tests and breakthrough information.
                </h2>
                <p className="home-capton2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="read-more">
                <span className="home-text28">Find test</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image26"
                />
              </div>
            </div>
            <img alt="image" src="/lab-1500w.png" className="home-image27" />
          </div>
          <div className="home-section9">
            <div className="home-content16">
              <div className="home-header25">
                <h2 className="home-heading22">
                  Find out how we can help you help you.
                </h2>
                <p className="home-capton3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <button className="button button-main home-book4">
                <span>Book a virtual appointment</span>
              </button>
            </div>
            <img
              alt="image"
              src="/examination-1500w.png"
              className="home-image28"
            />
          </div>
          <button className="home-book5 button button-main">
            <span>Book a virtual appointment</span>
          </button>
        </section>
        <section id="schedule" className="home-schedule">
          <div className="home-content17">
            <div className="home-header26">
              <h2 className="home-heading23">
                Schedule an in person or virtual appointment today
              </h2>
              <p className="home-caption9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="home-types1">
              <a
                href="#book"
                className="home-book-person1 button button-main button-white"
              >
                <span>Book in person appointment</span>
              </a>
              <button className="button button-main button-white home-book-person2">
                <span>Book virtual appointment</span>
              </button>
            </div>
          </div>
        </section>
        <div className="home-search1">
          <div className="home-heading24">
            <h2 className="home-text33">Search diseases &amp; conditions</h2>
            <p className="home-text34">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-content18">
            <div className="home-type-one">
              <div className="home-alphabet">
                <div data-letter="a" className="letter">
                  <span className="home-text35">A</span>
                </div>
                <div data-letter="b" className="letter">
                  <span className="home-text36">B</span>
                </div>
                <div data-letter="c" className="letter">
                  <span className="home-text37">C</span>
                </div>
                <div data-letter="d" className="letter">
                  <span className="home-text38">D</span>
                </div>
                <div data-letter="e" className="letter">
                  <span className="home-text39">E</span>
                </div>
                <div data-letter="f" className="letter">
                  <span className="home-text40">F</span>
                </div>
                <div data-letter="g" className="letter">
                  <span className="home-text41">G</span>
                </div>
                <div data-letter="h" className="letter">
                  <span className="home-text42">H</span>
                </div>
                <div data-letter="i" className="letter">
                  <span className="home-text43">I</span>
                </div>
                <div data-letter="j" className="letter">
                  <span className="home-text44">J</span>
                </div>
                <div data-letter="k" className="letter">
                  <span className="home-text45">K</span>
                </div>
                <div data-letter="l" className="letter">
                  <span className="home-text46">L</span>
                </div>
                <div data-letter="m" className="letter">
                  <span className="home-text47">M</span>
                </div>
                <div data-letter="n" className="letter">
                  <span className="home-text48">N</span>
                </div>
                <div data-letter="o" className="letter">
                  <span className="home-text49">O</span>
                </div>
                <div data-letter="p" className="letter">
                  <span className="home-text50">P</span>
                </div>
                <div data-letter="q" className="letter">
                  <span className="home-text51">Q</span>
                </div>
                <div data-letter="r" className="letter">
                  <span className="home-text52">R</span>
                </div>
                <div data-letter="s" className="letter">
                  <span className="home-text53">S</span>
                </div>
                <div data-letter="t" className="letter">
                  <span className="home-text54">T</span>
                </div>
                <div data-letter="u" className="letter">
                  <span className="home-text55">U</span>
                </div>
                <div data-letter="v" className="letter">
                  <span className="home-text56">V</span>
                </div>
                <div data-letter="w" className="letter">
                  <span className="home-text57">W</span>
                </div>
                <div data-letter="x" className="letter">
                  <span className="home-text58">X</span>
                </div>
                <div data-letter="y" className="letter">
                  <span className="home-text59">Y</span>
                </div>
                <div data-letter="z" className="letter">
                  <span className="home-text60">Z</span>
                </div>
              </div>
              <p className="home-text61">
                You don’t know it’s name? Check out symptom checker below
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div data-teleport="results" className="home-results">
                <span className="home-heading25">Results:</span>
                <div data-results="letters" className="home-list1"></div>
              </div>
            </div>
            <div className="home-type-two">
              <div className="home-heading26">
                <h3 className="home-text62">Symptom checker</h3>
                <p className="home-text63">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="home-symptoms1">
                <div className="home-row1">
                  <div className="symptom">
                    <span className="home-text64">Abdominal pain</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text65">Chest pain</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text66">Constipation</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text67">Cough</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text68">Breath difficulty</span>
                  </div>
                </div>
                <div className="home-row2">
                  <div className="symptom">
                    <span className="home-text69">Red eye</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text70">Foot pain</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text71">Foot swelling</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text72">Headache</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text73">Heart palpitation</span>
                  </div>
                </div>
                <div className="home-row3">
                  <div className="symptom">
                    <span className="home-text74">Knee pain</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text75">Hip pain</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text76">Low back pain</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text77">Nasal congestion</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text78">Neck pain</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="book" className="home-book6">
          <div className="home-heading27">
            <h2 className="home-text79">Book an appointment</h2>
            <p className="home-text80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-form">
            <div className="home-types2">
              <div className="book-type">
                <span className="home-text81">In person appointment</span>
              </div>
              <div className="book-type">
                <span className="home-text82">Virtual appointment</span>
              </div>
            </div>
            <div className="home-inputs">
              <input
                type="text"
                placeholder="Name"
                autoComplete="name"
                className="input book-input"
              />
              <input
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="input book-input"
              />
              <input
                type="tel"
                placeholder="Phone"
                autoComplete="tel"
                className="input book-input"
              />
              <div className="home-date1">
                <input
                  type="date"
                  placeholder="Date"
                  className="input book-input"
                />
                <img
                  alt="image"
                  src="/Icons/calendar-2.svg"
                  className="home-image29"
                />
              </div>
              <input
                type="text"
                placeholder="Practice"
                className="input book-input"
              />
              <div className="home-lower">
                <p className="home-text83">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <div className="home-button">
                  <button className="home-book7 button button-main">
                    <span>Book</span>
                  </button>
                  <p className="home-text85">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text87">adipiscing elit</span>
                    <span>
                      , sed do eiusmod tempor
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text89">incididunt</span>
                    <span>.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-meet">
          <div className="home-heading28">
            <h2 className="home-text91">Meet our doctors</h2>
            <p className="home-text92">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-list2">
            <div className="home-controls">
              <img
                alt="image"
                src="/Icons/circle-arrow.svg"
                data-doctors="previous"
                className="arrow"
              />
              <img
                alt="image"
                src="/Icons/circle-arrow.svg"
                data-doctors="next"
                className="home-forward arrow"
              />
            </div>
            <div data-teleport="doctors" className="home-doctors1">
              <Doctor></Doctor>
              <Doctor imageSrc="/Doctors/doctor-2-300w.png"></Doctor>
              <Doctor imageSrc="/Doctors/doctor-3-300w.png"></Doctor>
              <Doctor imageSrc="/Doctors/doctor-4-300w.png"></Doctor>
            </div>
          </div>
          <div className="home-search2">
            <input
              type="text"
              placeholder="Search by name"
              className="home-textinput6 input book-input"
            />
            <button className="button button-main home-book8">
              <span>Search doctor</span>
            </button>
          </div>
        </section>
        <section className="home-news">
          <div className="home-heading29">
            <h2 className="home-text94">Read our latest news</h2>
            <p className="home-text95">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-list3">
            <div className="home-item1">
              <div className="home-image30">
                <img
                  alt="image"
                  src="/News/news-logo-1500w.png"
                  className="home-image31"
                />
              </div>
              <div className="home-content19">
                <div className="home-details1">
                  <span className="home-date2">November 23, 2022</span>
                  <p className="home-quick-description1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="read-more">
                  <span className="home-text96">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow.svg"
                    className="home-image32"
                  />
                </div>
              </div>
            </div>
            <div className="home-item2">
              <div className="home-image33">
                <img
                  alt="image"
                  src="/News/news-1-1500w.png"
                  className="home-image34"
                />
              </div>
              <div className="home-content20">
                <div className="home-details2">
                  <span className="home-date3">November 23, 2022</span>
                  <p className="home-quick-description2">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="read-more">
                  <span className="home-text97">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image35"
                  />
                </div>
              </div>
            </div>
            <div className="home-item3">
              <div className="home-image36">
                <img
                  alt="image"
                  src="/News/news-2-1500w.png"
                  className="home-image37"
                />
              </div>
              <div className="home-content21">
                <div className="home-details3">
                  <span className="home-date4">November 23, 2022</span>
                  <p className="home-quick-description3">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore.
                  </p>
                </div>
                <div className="read-more">
                  <span className="home-text98">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image38"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="home-download">
          <div className="home-main2">
            <img alt="image" src="/phone-1500w.png" className="home-image39" />
            <div className="home-content22">
              <h2 className="home-text99">
                Download our mobile app and book your next appointment
              </h2>
              <div className="home-buttons">
                <button className="home-ios button button-main">
                  <img
                    alt="image"
                    src="/Icons/apple.svg"
                    className="home-image40"
                  />
                  <span>Download for iOS</span>
                </button>
                <button className="button button-main home-android">
                  <img
                    alt="image"
                    src="/Icons/android.svg"
                    className="home-image41"
                  />
                  <span>Download for Android</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-footer">
          <div className="home-left2">
            <div className="home-brand">
              <img
                alt="image"
                src="/Branding/logo-2.svg"
                className="home-image42"
              />
              <p className="home-text102">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="home-socials">
              <div className="social">
                <img
                  alt="image"
                  src="/Icons/insider.svg"
                  className="home-image43"
                />
              </div>
              <div className="social">
                <img
                  alt="image"
                  src="/Icons/instagram.svg"
                  className="home-image44"
                />
              </div>
              <div className="social">
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="home-image45"
                />
              </div>
            </div>
            <div className="home-legal1">
              <span className="home-copyright1">
                © 2022 finbest. All Rights Reserved.
              </span>
              <span className="legal-link">Privacy Policy</span>
              <span className="legal-link">Terms of Use</span>
            </div>
          </div>
          <div className="home-right2">
            <div className="home-list4">
              <span className="home-header27">Menu</span>
              <div className="home-links2">
                <span className="home-link20">Home</span>
                <span className="home-link21">About</span>
                <span className="home-link22">Services</span>
                <span className="home-link23">Blog</span>
                <span className="home-link24">Support</span>
              </div>
            </div>
            <div className="home-list5">
              <span className="home-header28">Resources</span>
              <div className="home-links3">
                <span className="home-link25">Test Results</span>
                <span className="home-link26">Patients</span>
                <span className="home-link27">Doctors</span>
                <span className="home-link28">Health</span>
              </div>
            </div>
            <div className="home-list6">
              <span className="home-header29">Contact</span>
              <div className="home-links4">
                <span className="home-link29">
                  24 Street Name, City FI 01234, RO
                </span>
                <a
                  href="mailto:contact@template.new?subject=Main"
                  className="home-link30"
                >
                  contact@template.new
                </a>
                <a href="tel:(004) 234 - 5678" className="home-link31">
                  (004) 234 - 5678
                </a>
              </div>
            </div>
          </div>
          <div className="home-legal2">
            <div className="home-row4">
              <span className="legal-link">Privacy Policy</span>
              <span className="legal-link">Terms of Use</span>
            </div>
            <span className="home-copyright6">
              © 2022 finbest. All Rights Reserved.
            </span>
          </div>
        </div>
        <div>
          <div className="home-container4">
            <Script
              html={`<script>
const modalOpen = document.querySelectorAll('[data-open]');
const modalClose = document.querySelectorAll('[data-close]');

modalOpen.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.open}"]\`);
        modal.style.display = "flex";
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.close}"]\`);
        modal.style.display = "none";
    });
});
</script>
`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="home-container6">
            <Script
              html={`<script>
const dataLetters = document.querySelectorAll("[data-letter]");
let activeLetters = [];
const maxResults = 6;

dataLetters.forEach(letter => {
  letter.addEventListener("click", function() {
    if (this.classList.contains("letter-active")) {
      this.classList.remove("letter-active");
      activeLetters = activeLetters.filter(a => a !== this.dataset.letter);
    } else {
      this.classList.add("letter-active");
      activeLetters.push(this.dataset.letter);
    }
    if (activeLetters.length == 0) {
      document.querySelector("[data-teleport='results']").style.display = "none";
      return;
    }
    showResults();
  });
});

const showResults = () => {
  fetch("https://raw.githubusercontent.com/Shivanshu-Gupta/web-scrapers/master/medical_ner/medicinenet-diseases.json")
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(item => {
        const firstLetter = item.disease.charAt(0).toLowerCase();
        if (activeLetters.includes(firstLetter)) {
          return true;
        }
        return false;
      });

      document.querySelector("[data-teleport='results']").style.display = "flex";
      const resultsContainer = document.querySelector("[data-results='letters']");
      resultsContainer.innerHTML = "";

      let counter = 0;
      const diseaseGroups = {};
      const totalActiveLetters = activeLetters.length;

      filteredData.forEach(disease => {
        const firstLetter = disease.disease[0].toLowerCase();
        if (diseaseGroups[firstLetter]) {
          diseaseGroups[firstLetter].push(disease);
        } else {
          diseaseGroups[firstLetter] = [disease];
        }
      });

      Object.keys(diseaseGroups).sort().forEach((firstLetter, index) => {
        const diseasesForThisLetter = diseaseGroups[firstLetter];
        const diseasesToShow = diseasesForThisLetter.slice(0, Math.ceil(maxResults / totalActiveLetters));

        diseasesToShow.forEach(disease => {
          const resultContainer = document.createElement("div");
          resultContainer.classList.add("search-result");
          resultContainer.classList.add("invisible");
          resultContainer.style.animationDelay = \`\${counter * 0.25}s\`;

          const resultText = document.createElement("span");
          resultText.classList.add("result-text");
          resultText.textContent = disease.disease;

          resultContainer.appendChild(resultText);
          resultsContainer.appendChild(resultContainer);
          counter++;

          if (counter === maxResults) {
            const moreContainer = document.createElement("div");
            moreContainer.classList.add("search-result");
            moreContainer.classList.add("more-results");

            const moreText = document.createElement("span");
            moreText.classList.add("result-text");
            moreText.textContent = "More";

            moreContainer.appendChild(moreText);
            resultsContainer.appendChild(moreContainer);
            addedMoreContainer = true;
            return;
          }
        });
      });
    });
};
</script>
`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="home-container8">
            <Script
              html={`<script>
function scroll(direction) {
  const doctorsDiv = document.querySelector('[data-teleport="doctors"]');
  const scrollAmount = 300;
  if (direction === 'previous') {
    doctorsDiv.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'next') {
    doctorsDiv.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

const buttons = document.querySelectorAll('[data-doctors]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.dataset.doctors;
    scroll(direction);
  });
});
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            scroll-behavior: smooth;
          }
          .home-modal1 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            z-index: 200;
            position: fixed;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            backdrop-filter: blur(4px);
            justify-content: center;
          }
          .home-practices1 {
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            box-shadow: 0px 0px 25px -2px rgba(66, 68, 90, 0.4);
            align-items: center;
            border-radius: 12px;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .home-heading10 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: space-between;
          }
          .home-header10 {
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-close {
            width: 24px;
            cursor: pointer;
            height: 24px;
            transition: 0.3s;
          }
          .home-close:hover {
            opacity: 0.5;
          }
          .home-grid1 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: repeat(2, 1fr);
          }
          .home-section1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header11 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption1 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text10 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image10 {
            width: 12px;
            object-fit: cover;
          }
          .home-section2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header12 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption2 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text11 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image11 {
            width: 12px;
            object-fit: cover;
          }
          .home-section3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header13 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption3 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text12 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image12 {
            width: 12px;
            object-fit: cover;
          }
          .home-section4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header14 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption4 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text13 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image13 {
            width: 12px;
            object-fit: cover;
          }
          .home-section5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header15 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption5 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text14 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image14 {
            width: 12px;
            object-fit: cover;
          }
          .home-section6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header16 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption6 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text15 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image15 {
            width: 12px;
            object-fit: cover;
          }
          .home-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-header17 {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: space-between;
          }
          .home-left1 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-logo {
            width: 165px;
            object-fit: cover;
          }
          .home-links1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-link10 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
          }
          .home-link10:hover {
            opacity: 0.5;
          }
          .home-link11 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
          }
          .home-link11:hover {
            opacity: 0.5;
          }
          .home-link12 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
          }
          .home-link12:hover {
            opacity: 0.5;
          }
          .home-link13 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
          }
          .home-link13:hover {
            opacity: 0.5;
          }
          .home-right1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-phone {
            gap: var(--dl-layout-space-halfunit);
            cursor: pointer;
            display: flex;
            align-items: center;
            border-width: 0px;
            flex-direction: row;
            justify-content: center;
          }
          .home-image16 {
            width: 18px;
            object-fit: cover;
          }
          .home-text16 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-book1 {
            text-decoration: none;
          }
          .home-image17 {
            width: 18px;
            object-fit: cover;
          }
          .home-text17 {
            font-family: Inter;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon2 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 1000;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .home-image18 {
            height: 2rem;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon4 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .home-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text18 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text19 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text20 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text21 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-book2 {
            text-decoration: none;
          }
          .home-image19 {
            width: 18px;
            object-fit: cover;
          }
          .home-text22 {
            font-family: Inter;
          }
          .home-main1 {
            flex: 1;
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 1440px;
            align-items: stretch;
            padding-left: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content10 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
          }
          .home-heading17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header18 {
            width: 100%;
            font-size: 62px;
            max-width: 750px;
            font-style: normal;
            font-weight: 600;
            line-height: 74px;
          }
          .home-caption7 {
            width: 100%;
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-image20 {
            width: 18px;
            object-fit: cover;
          }
          .home-image21 {
            flex: 1;
            display: flex;
            align-items: flex-end;
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-image22 {
            height: 95%;
            object-fit: cover;
          }
          .home-features1 {
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            padding-top: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            background-color: #2461ff;
          }
          .home-content11 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
          }
          .home-background {
            right: 0px;
            width: 37%;
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
            background-color: #d0f4fd;
          }
          .home-practices2 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: 120px;
            flex-direction: row;
            padding-bottom: 120px;
          }
          .home-heading18 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text24 {
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text25 {
            font-size: 18px;
            max-width: 385px;
            line-height: 27px;
          }
          .home-content12 {
            gap: var(--dl-layout-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-grid2 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: repeat(2, 1fr);
          }
          .home-practice-wrapper1 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-practice-wrapper2 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-practice-wrapper3 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-practice-wrapper4 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-practice-wrapper5 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-practice-wrapper6 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-why {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #d0f4fd;
          }
          .home-heading19 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header19 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-header20 {
            font-size: 18px;
            max-width: 700px;
            text-align: center;
            line-height: 27px;
          }
          .home-content13 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-video1 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
          }
          .home-video2 {
            width: 100%;
          }
          .home-play {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            cursor: pointer;
            height: 100%;
            margin: auto;
            display: flex;
            position: absolute;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-play:hover {
            background-color: rgba(0, 0, 0, 0.3);
          }
          .home-image23 {
            width: 80px;
            object-fit: cover;
          }
          .home-caption8 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header21 {
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 36px;
          }
          .home-header22 {
            max-width: 600px;
            text-align: center;
            line-height: 24px;
          }
          .home-features2 {
            gap: 120px;
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-section7 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content14 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header23 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading20 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            font-weight: 600;
          }
          .home-capton1 {
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-text27 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image24 {
            width: 12px;
            object-fit: cover;
          }
          .home-image25 {
            width: 400px;
            object-fit: cover;
          }
          .home-section8 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: space-between;
          }
          .home-content15 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header24 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading21 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            font-weight: 600;
          }
          .home-capton2 {
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-text28 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image26 {
            width: 12px;
            object-fit: cover;
          }
          .home-image27 {
            width: 520px;
            object-fit: cover;
          }
          .home-section9 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content16 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header25 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading22 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            font-weight: 600;
          }
          .home-capton3 {
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-image28 {
            width: 580px;
            object-fit: cover;
          }
          .home-book5 {
            display: none;
          }
          .home-schedule {
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-content17 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-fiveunits);
            align-items: center;
            flex-direction: column;
            background-color: #2461ff;
          }
          .home-header26 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading23 {
            color: #ffffff;
            font-size: 56px;
            max-width: 800px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-caption9 {
            color: rgba(255, 255, 255, 0.8);
            font-size: 18px;
            max-width: 900px;
            text-align: center;
            line-height: 27px;
          }
          .home-types1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-book-person1 {
            text-decoration: none;
          }
          .home-search1 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: stretch;
            border-color: #b4b9c6;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: 110px;
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading24 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text33 {
            font-size: 56px;
            max-width: 385px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text34 {
            font-size: 18px;
            max-width: 385px;
            line-height: 27px;
          }
          .home-content18 {
            gap: var(--dl-layout-space-fiveunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-type-one {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #b4b9c6;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-alphabet {
            display: grid;
            grid-gap: var(--dl-layout-space-oneandhalfunits);
            align-items: center;
            justify-content: center;
            grid-template-columns: repeat(10, minmax(60px, 1fr));
          }
          .home-text35 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text36 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text37 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text38 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text39 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text40 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text41 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text42 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text43 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text44 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text45 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text46 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text47 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text48 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text49 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text50 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text51 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text52 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text53 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text54 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text55 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text56 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text57 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text58 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text59 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text60 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text61 {
            max-width: 700px;
            line-height: 24px;
          }
          .home-results {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading25 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-list1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-type-two {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading26 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text62 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text63 {
            max-width: 700px;
            line-height: 24px;
          }
          .home-symptoms1 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            width: 100%;
            display: flex;
            grid-gap: var(--dl-layout-space-unit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-row1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text64 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text65 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text66 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text67 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text68 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-row2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text69 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text70 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text71 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text72 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text73 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-row3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text74 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text75 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text76 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text77 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text78 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-book6 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: 120px;
            border-color: #b4b9c6;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-heading27 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text79 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text80 {
            font-size: 18px;
            max-width: 700px;
            text-align: center;
            line-height: 27px;
          }
          .home-form {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-types2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text81 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text82 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-inputs {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-date1 {
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .home-image29 {
            width: 20px;
            object-fit: cover;
            border-color: #b4b9c6;
            padding-bottom: var(--dl-layout-space-unit);
            border-bottom-width: 1px;
          }
          .home-lower {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text83 {
            font-size: 10px;
            max-width: 700px;
            text-align: left;
            line-height: 15px;
          }
          .home-button {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-book7 {
            width: 100%;
          }
          .home-text85 {
            font-size: 10px;
            max-width: 700px;
            text-align: left;
            line-height: 15px;
          }
          .home-text87 {
            color: #2461ff;
            font-style: normal;
            font-weight: 600;
          }
          .home-text89 {
            color: #2461ff;
            font-style: normal;
            font-weight: 600;
          }
          .home-meet {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #d0f4fd;
          }
          .home-heading28 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text91 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text92 {
            font-size: 18px;
            max-width: 700px;
            text-align: center;
            line-height: 27px;
          }
          .home-list2 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            flex-direction: row;
          }
          .home-controls {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-forward {
            transform: rotate(180deg);
          }
          .home-doctors1 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-search2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 570px;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .home-textinput6 {
            flex: 1;
            height: 100%;
          }
          .home-news {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 200px;
          }
          .home-heading29 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text94 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text95 {
            font-size: 18px;
            max-width: 700px;
            text-align: center;
            line-height: 27px;
          }
          .home-list3 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            flex-direction: row;
          }
          .home-item1 {
            width: 100%;
            height: 640px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #2461ff;
          }
          .home-image30 {
            width: 100%;
            height: 275px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image31 {
            height: 50px;
            object-fit: cover;
          }
          .home-content19 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-details1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-date2 {
            color: rgb(255, 255, 255);
            line-height: 24px;
          }
          .home-quick-description1 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text96 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image32 {
            width: 12px;
            object-fit: cover;
          }
          .home-item2 {
            width: 100%;
            height: 640px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #f5f5f7;
          }
          .home-image33 {
            width: 100%;
            height: 274px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image34 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-content20 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-details2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-date3 {
            color: #000000;
            line-height: 24px;
          }
          .home-quick-description2 {
            color: rgb(0, 0, 0);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text97 {
            color: #000000;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image35 {
            width: 12px;
            object-fit: cover;
          }
          .home-item3 {
            width: 100%;
            height: 640px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #f5f5f7;
          }
          .home-image36 {
            width: 100%;
            height: 274px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image37 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-content21 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-details3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-date4 {
            color: #000000;
            line-height: 24px;
          }
          .home-quick-description3 {
            color: rgb(0, 0, 0);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text98 {
            color: #000000;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image38 {
            width: 12px;
            object-fit: cover;
          }
          .home-download {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-main2 {
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
            background-color: #d0f4fd;
          }
          .home-image39 {
            height: 565px;
            margin-top: -80px;
            object-fit: cover;
          }
          .home-content22 {
            gap: var(--dl-layout-space-threeunits);
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: 130px;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-text99 {
            font-size: 40px;
            max-width: 600px;
            font-style: normal;
            font-weight: 600;
            line-height: 48px;
          }
          .home-buttons {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-ios {
            gap: var(--dl-layout-space-halfunit);
          }
          .home-image40 {
            width: 16px;
            object-fit: cover;
          }
          .home-image41 {
            width: 16px;
            object-fit: cover;
          }
          .home-footer {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: space-between;
            background-color: #000000;
          }
          .home-left2 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
          }
          .home-brand {
            gap: var(--dl-layout-space-unit);
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image42 {
            width: 165px;
            object-fit: cover;
          }
          .home-text102 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            line-height: 21px;
          }
          .home-socials {
            gap: var(--dl-layout-space-unit);
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image43 {
            width: 24px;
            object-fit: cover;
          }
          .home-image44 {
            width: 24px;
            object-fit: cover;
          }
          .home-image45 {
            width: 24px;
            object-fit: cover;
          }
          .home-legal1 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-copyright1 {
            color: rgb(255, 255, 255);
            font-size: 12px;
          }
          .home-right2 {
            gap: 140px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-list4 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header27 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .home-links2 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link20 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link20:hover {
            opacity: 0.5;
          }
          .home-link21 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link21:hover {
            opacity: 0.5;
          }
          .home-link22 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link22:hover {
            opacity: 0.5;
          }
          .home-link23 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link23:hover {
            opacity: 0.5;
          }
          .home-link24 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link24:hover {
            opacity: 0.5;
          }
          .home-list5 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header28 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .home-links3 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link25 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link25:hover {
            opacity: 0.5;
          }
          .home-link26 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link26:hover {
            opacity: 0.5;
          }
          .home-link27 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link27:hover {
            opacity: 0.5;
          }
          .home-link28 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link28:hover {
            opacity: 0.5;
          }
          .home-list6 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header29 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .home-links4 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link29 {
            color: rgb(255, 255, 255);
            width: 215px;
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link29:hover {
            opacity: 0.5;
          }
          .home-link30 {
            color: rgb(255, 255, 255);
            width: 215px;
            cursor: pointer;
            transition: 0.3s;
            text-decoration: none;
          }
          .home-link30:hover {
            opacity: 0.5;
          }
          .home-link31 {
            color: rgb(255, 255, 255);
            width: 215px;
            cursor: pointer;
            transition: 0.3s;
            text-decoration: none;
          }
          .home-link31:hover {
            opacity: 0.5;
          }
          .home-legal2 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row4 {
            display: flex;
          }
          .home-copyright6 {
            color: rgb(255, 255, 255);
            font-size: 12px;
          }
          .home-container4 {
            display: contents;
          }
          .home-container6 {
            display: contents;
          }
          .home-container8 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-hero {
              flex: 1;
              height: 0px;
            }
            .home-navbar {
              z-index: 1000;
            }
            .home-links1 {
              display: none;
            }
            .home-right1 {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              padding: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-round);
              background-color: #2461ff;
            }
            .home-icon2 {
              fill: white;
            }
            .home-main1 {
              flex-direction: column;
            }
            .home-content10 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-header18 {
              max-width: 75%;
            }
            .home-caption7 {
              max-width: 75%;
            }
            .home-image21 {
              flex: 0 0 auto;
              align-items: flex-end;
              padding-right: var(--dl-layout-space-twounits);
              justify-content: flex-end;
            }
            .home-features1 {
              padding-top: var(--dl-layout-space-fourunits);
              flex-direction: row;
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-content11 {
              flex-direction: column;
            }
            .home-background {
              left: 0px;
              width: 100%;
              bottom: 0px;
              height: 55%;
              position: absolute;
              justify-content: flex-end;
            }
            .home-practices2 {
              flex-direction: column;
            }
            .home-why {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-features2 {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-section7 {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-image25 {
              width: 100%;
            }
            .home-section8 {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-image27 {
              width: 100%;
            }
            .home-section9 {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-image28 {
              width: 100%;
            }
            .home-schedule {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-types1 {
              width: 100%;
              flex-direction: column;
            }
            .home-book-person1 {
              width: 50%;
            }
            .home-book-person2 {
              width: 50%;
            }
            .home-search1 {
              width: 100%;
              flex-direction: column;
            }
            .home-heading24 {
              align-items: center;
            }
            .home-text33 {
              max-width: 100%;
              text-align: center;
            }
            .home-text34 {
              text-align: center;
            }
            .home-content18 {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-type-one {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              align-items: center;
              padding-bottom: var(--dl-layout-space-threeunits);
              justify-content: center;
            }
            .home-alphabet {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
            }
            .home-text61 {
              text-align: center;
            }
            .home-type-two {
              gap: var(--dl-layout-space-twounits);
            }
            .home-heading26 {
              align-items: center;
            }
            .home-text62 {
              text-align: center;
            }
            .home-text63 {
              text-align: center;
            }
            .home-symptoms1 {
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
            }
            .home-row1 {
              flex-wrap: wrap;
              flex-direction: row;
              justify-content: center;
            }
            .home-row2 {
              flex-wrap: wrap;
              justify-content: center;
            }
            .home-row3 {
              flex-wrap: wrap;
              justify-content: center;
            }
            .home-meet {
              padding-right: 0px;
            }
            .home-heading28 {
              padding-right: var(--dl-layout-space-fiveunits);
            }
            .home-list2 {
              position: relative;
              flex-direction: column-reverse;
            }
            .home-controls {
              gap: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-fiveunits);
              flex-direction: row;
            }
            .home-doctors1 {
              overflow: hidden;
            }
            .home-search2 {
              gap: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-fiveunits);
              flex-direction: column;
            }
            .home-book8 {
              width: 100%;
            }
            .home-list3 {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
            .home-item1 {
              height: auto;
            }
            .home-image30 {
              height: 280px;
            }
            .home-content19 {
              gap: var(--dl-layout-space-twounits);
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              padding-bottom: var(--dl-layout-space-twounits);
              justify-content: flex-start;
            }
            .home-quick-description1 {
              font-size: 18px;
            }
            .home-item2 {
              height: auto;
            }
            .home-image33 {
              height: 280px;
            }
            .home-content20 {
              gap: var(--dl-layout-space-twounits);
              padding: var(--dl-layout-space-twounits);
              justify-content: flex-start;
            }
            .home-quick-description2 {
              font-size: 18px;
            }
            .home-item3 {
              height: auto;
            }
            .home-image36 {
              height: 280px;
            }
            .home-content21 {
              gap: var(--dl-layout-space-twounits);
              padding: var(--dl-layout-space-twounits);
              justify-content: flex-start;
            }
            .home-quick-description3 {
              font-size: 18px;
            }
            .home-content22 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-footer {
              gap: 100px;
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-left2 {
              padding-right: 0px;
            }
            .home-socials {
              display: none;
            }
            .home-legal1 {
              display: none;
            }
            .home-right2 {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
            .home-legal2 {
              gap: var(--dl-layout-space-twounits);
              display: flex;
              flex-direction: column;
            }
            .home-row4 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .home-navbar {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .home-burger-menu {
              display: flex;
            }
            .home-main1 {
              gap: var(--dl-layout-space-threeunits);
              align-items: flex-end;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .home-header18 {
              font-size: 32px;
              max-width: 70%;
              line-height: 38px;
            }
            .home-caption7 {
              font-size: 16px;
              max-width: 70%;
              line-height: 24px;
            }
            .home-content11 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-practices2 {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-heading18 {
              gap: var(--dl-layout-space-unit);
            }
            .home-text24 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-text25 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content12 {
              gap: var(--dl-layout-space-threeunits);
              width: 100%;
            }
            .home-grid2 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              grid-template-columns: repeat(1, 1fr);
            }
            .home-why {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-header19 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-header20 {
              font-size: 14px;
              max-width: 60%;
              line-height: 21px;
            }
            .home-content13 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-header21 {
              font-size: 22px;
              line-height: 33px;
            }
            .home-header22 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-features2 {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-content14 {
              gap: var(--dl-layout-space-unit);
            }
            .home-heading20 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-capton1 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-heading21 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-capton2 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-heading22 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-capton3 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-book4 {
              display: none;
            }
            .home-book5 {
              width: 100%;
              display: flex;
            }
            .home-schedule {
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-content17 {
              gap: var(--dl-layout-space-twounits);
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-heading23 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-caption9 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-types1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-book-person1 {
              width: 80%;
            }
            .home-book-person2 {
              width: 80%;
            }
            .home-search1 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-heading24 {
              gap: var(--dl-layout-space-unit);
            }
            .home-text33 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-text34 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-alphabet {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-symptoms1 {
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
            }
            .home-book6 {
              gap: var(--dl-layout-space-twounits);
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-heading27 {
              gap: var(--dl-layout-space-unit);
            }
            .home-text79 {
              font-size: 24px;
            }
            .home-text80 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-form {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-types2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-inputs {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-meet {
              gap: var(--dl-layout-space-threeunits);
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-heading28 {
              gap: var(--dl-layout-space-unit);
              padding-right: 0px;
            }
            .home-text91 {
              font-size: 24px;
            }
            .home-text92 {
              font-size: 14px;
              max-width: 80%;
            }
            .home-list2 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-controls {
              padding-right: 0px;
            }
            .home-doctors1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-search2 {
              padding-right: 0px;
            }
            .home-news {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-heading29 {
              gap: var(--dl-layout-space-unit);
            }
            .home-text94 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-text95 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-date2 {
              font-size: 10px;
              line-height: 15px;
            }
            .home-date3 {
              font-size: 10px;
              line-height: 15px;
            }
            .home-date4 {
              font-size: 10px;
              line-height: 15px;
            }
            .home-main2 {
              align-items: center;
              flex-direction: column-reverse;
            }
            .home-image39 {
              height: 620px;
              margin-top: 0px;
            }
            .home-content22 {
              gap: var(--dl-layout-space-twounits);
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-text99 {
              max-width: 500px;
            }
            .home-buttons {
              width: 100%;
              flex-direction: column;
            }
            .home-ios {
              width: 80%;
            }
            .home-android {
              width: 80%;
            }
            .home-footer {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-image42 {
              width: 110px;
            }
            .home-text102 {
              font-size: 12px;
              line-height: 18px;
            }
          }
          @media (max-width: 479px) {
            .home-navbar {
              padding: var(--dl-layout-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-content10 {
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-header18 {
              max-width: 80%;
            }
            .home-caption7 {
              max-width: 100%;
            }
            .home-book3 {
              width: 100%;
            }
            .home-image22 {
              max-height: 500px;
            }
            .home-types2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
