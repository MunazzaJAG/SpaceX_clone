import React, { useEffect, useState } from "react";
import "./App.css";
import heroImage from "./images/hero.jpg";

function App() {
  // ==============================
  // COUNTDOWN
  // ==============================

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

  // ==============================
  // POPUP
  // ==============================

  const [activePopup, setActivePopup] = useState(null);

  // ==============================
  // MOBILE MENU
  // ==============================

  const [menuOpen, setMenuOpen] = useState(false);

  // ==============================
  // COUNTDOWN TIMER
  // ==============================

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

  // ==============================
  // ESC CLOSE POPUP
  // ==============================

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

  // ==============================
  // FORMAT TIME
  // ==============================

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

    return days > 0
      ? `${days}D ${h}:${m}:${s}`
      : `${h}:${m}:${s}`;
  };

  // ==============================
  // POPUP CONTENT
  // ==============================

  const popupData = {
    watch: {
      eyebrow: "MISSION INFORMATION",
      title: "STARSHIP FLIGHT 14",
      content: (
        <>
          <p>
            Starship Flight 14 is the upcoming flight
            of SpaceX&apos;s Starship launch system.
          </p>

          <p>
            The mission is designed to demonstrate
            another integrated flight while collecting
            valuable flight data for future missions.
          </p>

          <div className="popup-details">
            <div>
              <span>LAUNCH DATE</span>
              <strong>SEPTEMBER 22, 2026</strong>
            </div>

            <div>
              <span>LAUNCH WINDOW</span>
              <strong>17:45 – 19:00 IST</strong>
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
            SpaceX designs, manufactures and launches
            advanced rockets and spacecraft.
          </p>

          <p>
            Its technologies focus on reusable launch
            systems and expanding humanity&apos;s access
            to space.
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
            to Earth orbit and support future missions
            to the Moon, Mars and beyond.
          </p>
        </>
      ),
    },

    falcon: {
      eyebrow: "REUSABLE ROCKET",
      title: "FALCON 9",
      content: (
        <>
          <p>
            Falcon 9 is a reusable two-stage rocket
            designed and manufactured by SpaceX.
          </p>

          <p>
            It is used to launch satellites,
            spacecraft and crewed missions into orbit.
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
            Starlink is a satellite internet network
            developed by SpaceX.
          </p>

          <p>
            It is designed to provide high-speed
            connectivity around the world.
          </p>
        </>
      ),
    },

    spacexai: {
      eyebrow: "SPACE COMPUTING",
      title: "SPACEXAI",
      content: (
        <>
          <p>
            Advanced computing and artificial
            intelligence systems can support
            increasingly complex space missions.
          </p>

          <p>
            Future systems may use autonomous software,
            onboard computation and large-scale
            data processing.
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
            TeraFab represents advanced manufacturing
            infrastructure focused on producing
            sophisticated technology at scale.
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
            SpaceX develops launch vehicles,
            spacecraft and satellite systems.
          </p>

          <p>
            Its programs focus on reducing the cost
            of access to space and developing
            next-generation technologies.
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
            This area can later be connected to an
            official shop or your own product showcase.
          </p>
        </>
      ),
    },
  };

  // ==============================
  // OPEN / CLOSE POPUP
  // ==============================

  const openPopup = (name) => {
    setActivePopup(name);
    setMenuOpen(false);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site">

      {/* =========================================
          NAVBAR
      ========================================= */}

      <header className="navbar">

        {/* LOGO */}

        <div className="spacex-logo">
          SPACEX
        </div>

        {/* DESKTOP NAVIGATION */}

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

        {/* UPCOMING LAUNCHES */}

        <div className="upcoming-launch">

          <span>
            UPCOMING LAUNCHES
          </span>

          <strong>
            T-{formatTime(topCountdown)}
          </strong>

        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          className={`hamburger ${
            menuOpen ? "active" : ""
          }`}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Open navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </header>

      {/* =========================================
          MOBILE NAVIGATION
      ========================================= */}

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

      {/* =========================================
          HERO
      ========================================= */}

      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >

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
            onClick={() => openPopup("watch")}
          >
            <span>WATCH</span>
            <span className="arrow">→</span>
          </button>

        </div>

        <div className="scroll-indicator">
          <span></span>
        </div>

      </section>

      {/* =========================================
          SECTION 2
      ========================================= */}

      <section
        className="light-section"
        id="vehicles"
      >

        <div className="center-section-content">

          <div className="eyebrow">
            SPACE EXPLORATION
          </div>

          <h2>
            MAKING LIFE
            <br />
            MULTIPLANETARY
          </h2>

          <p>
            SpaceX was founded under the belief that
            a future where humanity is out exploring
            the stars is fundamentally more exciting
            than one where we are not.
          </p>

          <button
            className="outline-button dark-button"
            onClick={() => openPopup("explore")}
          >
            EXPLORE
            <span>→</span>
          </button>

        </div>

      </section>

      {/* =========================================
          STARSHIP SECTION
      ========================================= */}

      <section
        className="image-section starship-section"
        id="human-spaceflight"
      >

        <div className="image-overlay"></div>

        <div className="bottom-content">

          <div className="eyebrow">
            REVOLUTIONIZING SPACE TECHNOLOGY
          </div>

          <h2>
            STARSHIP
          </h2>

          <p>
            A fully reusable transportation system
            designed to carry crew and cargo to Earth
            orbit, the Moon, Mars and beyond.
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

      {/* =========================================
          FALCON 9
      ========================================= */}

      <section
        className="image-section falcon-section"
        id="starlink"
      >

        <div className="image-overlay"></div>

        <div className="bottom-content">

          <div className="eyebrow">
            WORLD'S LEADING LAUNCH SERVICE
          </div>

          <h2>
            FALCON 9
          </h2>

          <p>
            Reliable and reusable launch technology
            designed to make access to space more
            affordable.
          </p>

          <button
            className="outline-button light-button"
            onClick={() => openPopup("falcon")}
          >
            LEARN MORE
            <span>→</span>
          </button>

        </div>

      </section>

      {/* =========================================
          STARLINK
      ========================================= */}

      <section
        className="image-section starlink-section"
        id="starshield"
      >

        <div className="image-overlay"></div>

        <div className="bottom-content">

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

      {/* =========================================
          SPACEX AI
      ========================================= */}

      <section
        className="image-section ai-section"
        id="spacexai"
      >

        <div className="image-overlay"></div>

        <div className="bottom-content">

          <div className="eyebrow">
            SPACE COMPUTING
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

      {/* =========================================
          TERAFAB
      ========================================= */}

      <section
        className="info-section light-info"
        id="terafab"
      >

        <div className="info-content">

          <div className="eyebrow">
            ADVANCED MANUFACTURING
          </div>

          <h2>
            TERAFAB
          </h2>

          <p>
            Next-generation manufacturing
            infrastructure for advanced technology.
          </p>

          <button
            className="outline-button dark-button"
            onClick={() =>
              openPopup("terafab")
            }
          >
            LEARN MORE
            <span>→</span>
          </button>

        </div>

      </section>

      {/* =========================================
          COMPANY
      ========================================= */}

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
            Learn more about SpaceX, its technology,
            missions and long-term vision.
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

      {/* =========================================
          SHOP
      ========================================= */}

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

      {/* =========================================
          FOOTER
      ========================================= */}

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

      {/* =========================================
          POPUP
      ========================================= */}

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
              aria-label="Close"
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