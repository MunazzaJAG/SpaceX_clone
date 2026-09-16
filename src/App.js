import React, { useEffect, useState } from "react";
import "./App.css";

import heroVideo from "./videos/hero.mp4";

import marsImage from "./images/mars.jpg";
import starshipImage from "./images/starship.webp";
import falcon9Image from "./images/falcon9.jpg";
import starlinkImage from "./images/starlink.jpg";
import spacexaiImage from "./images/spacexai.webp";
import terafabImage from "./images/terafab.png";

function App() {
  // =========================================
  // COUNTDOWN
  // =========================================

  const [heroCountdown, setHeroCountdown] = useState(
    5 * 24 * 60 * 60 +
      19 * 60 * 60 +
      55 * 60 +
      58
  );

  const [topCountdown, setTopCountdown] = useState(
    8 * 60 * 60 +
      4 * 60 +
      58
  );

  // =========================================
  // POPUP
  // =========================================

  const [activePopup, setActivePopup] = useState(null);

  // =========================================
  // MOBILE MENU
  // =========================================

  const [menuOpen, setMenuOpen] = useState(false);

  // =========================================
  // COUNTDOWN TIMER
  // =========================================

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroCountdown((prev) =>
        prev > 0 ? prev - 1 : 0
      );

      setTopCountdown((prev) =>
        prev > 0 ? prev - 1 : 0
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // =========================================
  // ESC TO CLOSE POPUP
  // =========================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActivePopup(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  // =========================================
  // FORMAT COUNTDOWN
  // =========================================

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / 86400);

    const hours = Math.floor(
      (seconds % 86400) / 3600
    );

    const minutes = Math.floor(
      (seconds % 3600) / 60
    );

    const secs = seconds % 60;

    const h = String(hours).padStart(2, "0");
    const m = String(minutes).padStart(2, "0");
    const s = String(secs).padStart(2, "0");

    return `${days}D ${h}:${m}:${s}`;
  };

  // =========================================
  // POPUP DATA
  // =========================================

  const popupData = {
    watch: {
      eyebrow: "MISSION INFORMATION",
      title: "STARSHIP FLIGHT 14",

      content: (
        <>
          <p>
            Starship Flight 14 is the upcoming
            flight of SpaceX&apos;s Starship
            launch system.
          </p>

          <p>
            The mission is planned to continue
            testing the Starship system while
            collecting valuable flight data.
          </p>

          <div className="popup-details">

            <div>
              <span>LAUNCH DATE</span>
              <strong>
                SEPTEMBER 22, 2026
              </strong>
            </div>

            <div>
              <span>LAUNCH WINDOW</span>
              <strong>
                17:45 – 19:00 IST
              </strong>
            </div>

          </div>
        </>
      ),
    },

    explore: {
      eyebrow: "SPACE EXPLORATION",
      title: "SPACE X",

      content: (
        <>
          <p>
            SpaceX designs, manufactures and
            launches advanced rockets and
            spacecraft.
          </p>

          <p>
            Its technologies focus on reusable
            launch systems and future human
            spaceflight.
          </p>
        </>
      ),
    },

    starship: {
      eyebrow: "FULLY REUSABLE SPACECRAFT",
      title: "STARSHIP",

      content: (
        <>
          <p>
            Starship is a next-generation fully
            reusable transportation system.
          </p>

          <p>
            It is designed to carry crew and cargo
            to Earth orbit and support future
            missions to the Moon, Mars and beyond.
          </p>
        </>
      ),
    },

    falcon: {
      eyebrow: "WORLD'S LEADING LAUNCH SERVICE",
      title: "FALCON 9",

      content: (
        <>
          <p>
            Falcon 9 is a reusable two-stage
            rocket developed by SpaceX.
          </p>

          <p>
            It is used to launch satellites,
            spacecraft and crewed missions.
          </p>
        </>
      ),
    },

    starlink: {
      eyebrow: "HIGH-SPEED INTERNET",
      title: "STARLINK",

      content: (
        <>
          <p>
            Starlink is a satellite internet
            network developed by SpaceX.
          </p>

          <p>
            It is designed to provide high-speed
            connectivity around the world.
          </p>
        </>
      ),
    },

    spacexai: {
      eyebrow: "ADVANCED COMPUTING",
      title: "SPACEXAI",

      content: (
        <>
          <p>
            Advanced computing and artificial
            intelligence systems can support
            increasingly complex space missions.
          </p>

          <p>
            Future systems may combine autonomous
            software and high-performance
            computation.
          </p>
        </>
      ),
    },

    terafab: {
      eyebrow: "ADVANCED MANUFACTURING",
      title: "TERAFAB",

      content: (
        <>
          <p>
            Next-generation manufacturing
            infrastructure can support advanced
            aerospace technology development.
          </p>
        </>
      ),
    },

    company: {
      eyebrow: "ABOUT SPACEX",
      title: "COMPANY",

      content: (
        <>
          <p>
            SpaceX develops rockets, spacecraft
            and satellite systems.
          </p>

          <p>
            Its programs focus on developing
            reusable space transportation
            technologies.
          </p>
        </>
      ),
    },

    shop: {
      eyebrow: "SPACE X SHOP",
      title: "SHOP",

      content: (
        <>
          <p>
            This section can later be connected
            to an official shop or your own
            product showcase.
          </p>
        </>
      ),
    },
  };

  // =========================================
  // OPEN POPUP
  // =========================================

  const openPopup = (name) => {
    setActivePopup(name);
    setMenuOpen(false);
  };

  // =========================================
  // CLOSE POPUP
  // =========================================

  const closePopup = () => {
    setActivePopup(null);
  };

  // =========================================
  // CLOSE MOBILE MENU
  // =========================================

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site">

      {/* =====================================
          NAVBAR
      ===================================== */}

      <header className="navbar">

        <div className="spacex-logo">
          SPACEX
        </div>

        <nav className="desktop-nav">

          <a href="#vehicles">
            VEHICLES
          </a>

          <a href="#human-spaceflight">
            HUMAN SPACEFLIGHT
          </a>

          <a href="#starlink">
            STARLINK
          </a>

          <a href="#starshield">
            STARSHIELD
          </a>

          <a href="#spacexai">
            SPACEXAI
          </a>

          <a href="#terafab">
            TERAFAB
          </a>

          <a href="#company">
            COMPANY
          </a>

          <a href="#shop">
            SHOP
          </a>

        </nav>

        <div className="upcoming-launch">

          <span>
            UPCOMING LAUNCHES
          </span>

          <strong>
            T-{formatTime(topCountdown)}
          </strong>

        </div>

        <button
          className={`hamburger ${
            menuOpen ? "active" : ""
          }`}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </header>


      {/* =====================================
          MOBILE NAV
      ===================================== */}

      <div
        className={`mobile-nav ${
          menuOpen ? "show" : ""
        }`}
      >

        <a
          href="#vehicles"
          onClick={closeMenu}
        >
          VEHICLES
        </a>

        <a
          href="#human-spaceflight"
          onClick={closeMenu}
        >
          HUMAN SPACEFLIGHT
        </a>

        <a
          href="#starlink"
          onClick={closeMenu}
        >
          STARLINK
        </a>

        <a
          href="#starshield"
          onClick={closeMenu}
        >
          STARSHIELD
        </a>

        <a
          href="#spacexai"
          onClick={closeMenu}
        >
          SPACEXAI
        </a>

        <a
          href="#terafab"
          onClick={closeMenu}
        >
          TERAFAB
        </a>

        <a
          href="#company"
          onClick={closeMenu}
        >
          COMPANY
        </a>

        <a
          href="#shop"
          onClick={closeMenu}
        >
          SHOP
        </a>

      </div>


      {/* =====================================
          HERO VIDEO
      ===================================== */}

      <section className="hero">

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src={heroVideo}
            type="video/mp4"
          />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <div className="hero-countdown">
            T-{formatTime(heroCountdown)}
          </div>

          <h1>
            STARSHIP FLIGHT 14
          </h1>

          <button
            className="watch-button"
            onClick={() =>
              openPopup("watch")
            }
          >

            <span>
              WATCH
            </span>

            <span className="arrow">
              →
            </span>

          </button>

        </div>

        <div className="scroll-indicator">
          <span></span>
        </div>

      </section>


      {/* =====================================
          MARS
      ===================================== */}

      <section
        className="multiplanetary-section"
        id="vehicles"
      >

        <div className="multiplanetary-image">

          <img
            src={marsImage}
            alt="Mars"
          />

        </div>

        <div className="multiplanetary-overlay"></div>

        <div className="multiplanetary-content">

          <div className="eyebrow">
            SPACE EXPLORATION
          </div>

          <h2>
            MAKING
            <br />
            LIFE
            <br />
            MULTIPLANETARY
          </h2>

          <p>
            SpaceX was founded under the belief
            that a future where humanity is out
            exploring the stars is fundamentally
            more exciting than one where we are not.
          </p>

          <button
            className="outline-button light-button"
            onClick={() =>
              openPopup("explore")
            }
          >
            EXPLORE
            <span>→</span>
          </button>

        </div>

      </section>


      {/* =====================================
          STARSHIP
      ===================================== */}

      <section
        className="visual-section starship-section"
        id="human-spaceflight"
        style={{
          backgroundImage:
            `url(${starshipImage})`,
        }}
      >

        <div className="visual-overlay"></div>

        <div className="starship-content">

          <div className="eyebrow">
            REVOLUTIONIZING SPACE TECHNOLOGY
          </div>

          <h2>
            STARSHIP
          </h2>

          <p>
            SpaceX&apos;s Starship spacecraft
            and Super Heavy rocket is a fully
            reusable transportation system
            designed to carry both crew and cargo
            to Earth orbit, the Moon, Mars,
            and beyond.
          </p>

          <button
            className="outline-button light-button"
            onClick={() =>
              openPopup("starship")
            }
          >
            LEARN MORE
            <span>→</span>
          </button>

        </div>

      </section>


      {/* =====================================
          FALCON 9
      ===================================== */}

      <section
        className="visual-section falcon-section"
        id="starlink"
        style={{
          backgroundImage:
            `url(${falcon9Image})`,
        }}
      >

        <div className="visual-overlay falcon-overlay"></div>

        <div className="falcon-content">

          <div className="eyebrow">
            WORLD&apos;S LEADING LAUNCH SERVICE PROVIDER
          </div>

          <h2>
            FALCON 9
          </h2>

          <p>
            SpaceX leads the world in launches
            with its reliable, reusable rockets
            and is developing rapidly reusable
            systems to transform access to space.
          </p>

          <button
            className="outline-button light-button"
            onClick={() =>
              openPopup("falcon")
            }
          >
            RESERVE YOUR RIDE
            <span>→</span>
          </button>

        </div>

      </section>


      {/* =====================================
          STARLINK
      ===================================== */}

      <section
        className="visual-section starlink-section"
        id="starshield"
        style={{
          backgroundImage:
            `url(${starlinkImage})`,
        }}
      >

        <div className="visual-overlay starlink-overlay"></div>

        <div className="starlink-content">

          <div className="eyebrow">
            DELIVERING HIGH-SPEED INTERNET
          </div>

          <h2>
            STARLINK
          </h2>

          <p>
            High-speed internet from space,
            designed to connect people around
            the world.
          </p>

          <button
            className="outline-button light-button"
            onClick={() =>
              openPopup("starlink")
            }
          >
            ORDER NOW
            <span>→</span>
          </button>

        </div>

      </section>


      {/* =====================================
          SPACEXAI
      ===================================== */}

      <section
        className="visual-section spacexai-section"
        id="spacexai"
        style={{
          backgroundImage:
            `url(${spacexaiImage})`,
        }}
      >

        <div className="visual-overlay"></div>

        <div className="spacexai-content">

          <div className="eyebrow">
            ADVANCED COMPUTING
          </div>

          <h2>
            SPACEXAI
          </h2>

          <p>
            Advanced computing and artificial
            intelligence infrastructure for
            future space systems.
          </p>

          <button
            className="outline-button light-button"
            onClick={() =>
              openPopup("spacexai")
            }
          >
            EXPLORE
            <span>→</span>
          </button>

        </div>

      </section>


      {/* =====================================
          TERAFAB
      ===================================== */}

      <section
        className="visual-section terafab-section"
        id="terafab"
        style={{
          backgroundImage:
            `url(${terafabImage})`,
        }}
      >

        <div className="visual-overlay"></div>

        <div className="terafab-content">

          <div className="eyebrow">
            ADVANCED MANUFACTURING
          </div>

          <h2>
            TERAFAB
          </h2>

          <p>
            Next-generation manufacturing
            infrastructure for advanced
            technology.
          </p>

          <button
            className="outline-button light-button"
            onClick={() =>
              openPopup("terafab")
            }
          >
            LEARN MORE
            <span>→</span>
          </button>

        </div>

      </section>


      {/* =====================================
          COMPANY
      ===================================== */}

      <section
        className="info-section dark-info"
        id="company"
      >

        <div className="info-content">

          <div className="eyebrow">
            ABOUT SPACEX
          </div>

          <h2>
            COMPANY
          </h2>

          <p>
            Learn more about SpaceX, its
            technology, missions and
            long-term vision.
          </p>

          <button
            className="outline-button light-button"
            onClick={() =>
              openPopup("company")
            }
          >
            EXPLORE
            <span>→</span>
          </button>

        </div>

      </section>


      {/* =====================================
          SHOP
      ===================================== */}

      <section
        className="info-section light-info"
        id="shop"
      >

        <div className="info-content">

          <div className="eyebrow">
            SPACE X SHOP
          </div>

          <h2>
            SHOP
          </h2>

          <p>
            SpaceX merchandise and products.
          </p>

          <button
            className="outline-button dark-button"
            onClick={() =>
              openPopup("shop")
            }
          >
            VIEW INFO
            <span>→</span>
          </button>

        </div>

      </section>


      {/* =====================================
          FOOTER
      ===================================== */}

      <footer className="footer">

        <div className="footer-logo">
          SPACEX
        </div>

        <div className="footer-links">

          <a href="#privacy">
            PRIVACY POLICY
          </a>

          <a href="#suppliers">
            SUPPLIERS
          </a>

        </div>

        <div className="footer-copy">
          © 2026 SPACE EXPLORATION TECHNOLOGIES CORP.
        </div>

      </footer>


      {/* =====================================
          POPUP
      ===================================== */}

      {activePopup && (
        <div
          className="popup-backdrop"
          onClick={closePopup}
        >

          <div
            className="popup"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="popup-close"
              onClick={closePopup}
              aria-label="Close popup"
            >
              ×
            </button>

            <div className="popup-eyebrow">
              {popupData[activePopup].eyebrow}
            </div>

            <h2>
              {popupData[activePopup].title}
            </h2>

            <div className="popup-divider"></div>

            <div className="popup-content">
              {popupData[activePopup].content}
            </div>

            <button
              className="popup-close-button"
              onClick={closePopup}
            >
              CLOSE
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;