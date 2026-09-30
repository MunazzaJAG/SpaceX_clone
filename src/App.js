import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import "./App.css";

// Images
import marsImage from "./images/mars.jpg";
import starshipImage from "./images/starship.webp";
import falcon9Image from "./images/falcon9.jpg";
import starlinkImage from "./images/starlink.jpg";
import spacexaiImage from "./images/spacexai.webp";
import terafabImage from "./images/terafab.png";

// Video
import heroVideo from "./videos/hero.mp4";


// =====================================================
// NAVIGATION DATA
// =====================================================

const navigation = [
  {
    label: "VEHICLES",
    dropdown: [
      {
        label: "STARSHIP",
        path: "/vehicles/starship",
      },
      {
        label: "DRAGON",
        path: "/vehicles/dragon",
      },
      {
        label: "FALCON 9",
        path: "/vehicles/falcon-9",
      },
      {
        label: "FALCON HEAVY",
        path: "/vehicles/falcon-heavy",
      },
    ],
  },

  {
    label: "HUMAN SPACEFLIGHT",
    dropdown: [
      {
        label: "OVERVIEW",
        path: "/human-spaceflight",
      },
      {
        label: "SPACE STATION",
        path: "/human-spaceflight/space-station",
      },
      {
        label: "EARTH ORBIT",
        path: "/human-spaceflight/earth-orbit",
      },
      {
        label: "THE MOON",
        path: "/human-spaceflight/moon",
      },
      {
        label: "MARS & BEYOND",
        path: "/human-spaceflight/mars-beyond",
      },
    ],
  },

  {
    label: "STARLINK",
    path: "/starlink",
  },

  {
    label: "STARSHIELD",
    path: "/starshield",
  },

  {
    label: "BRAHMAND AI",
    dropdown: [
      {
        label: "BRAHMAND MIND",
        path: "/brahmand-ai/mind",
      },
      {
        label: "GROK",
        path: "/brahmand-ai/grok",
      },
      {
        label: "GROKIPEDIA",
        path: "/brahmand-ai/grokipedia",
      },
      {
        label: "X",
        path: "/brahmand-ai/x",
      },
    ],
  },

  {
    label: "TERAFAB",
    path: "/terafab",
  },

  {
    label: "COMPANY",
    dropdown: [
      {
        label: "MISSION",
        path: "/company/mission",
      },
      {
        label: "CAREERS",
        path: "/company/careers",
      },
      {
        label: "SITES",
        path: "/company/sites",
      },
      {
        label: "UPDATES",
        path: "/company/updates",
      },
      {
        label: "CONTENT",
        path: "/company/content",
      },
      {
        label: "INVESTORS",
        path: "/company/investors",
      },
    ],
  },

  {
    label: "SHOP",
    dropdown: [
      {
        label: "BRAHMAND",
        path: "/shop/brahmand",
      },
      {
        label: "BRAHMAND AI",
        path: "/shop/brahmand-ai",
      },
    ],
  },
];


// =====================================================
// COUNTDOWN
// =====================================================

function Countdown() {
  const [time, setTime] = useState(
    5 * 24 * 60 * 60 +
      19 * 60 * 60 +
      55 * 60 +
      58
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((previous) =>
        previous > 0 ? previous - 1 : 0
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(time / 86400);

  const hours = Math.floor(
    (time % 86400) / 3600
  );

  const minutes = Math.floor(
    (time % 3600) / 60
  );

  const seconds = time % 60;

  const h = String(hours).padStart(2, "0");
  const m = String(minutes).padStart(2, "0");
  const s = String(seconds).padStart(2, "0");

  return `${days}D ${h}:${m}:${s}`;
}


// =====================================================
// NAVBAR
// =====================================================

function Navbar() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const isActive = (item) => {
    if (item.path) {
      return location.pathname === item.path;
    }

    if (item.dropdown) {
      return item.dropdown.some(
        (child) =>
          location.pathname === child.path
      );
    }

    return false;
  };

  return (
    <>
      <header className="navbar">

        {/* BRAND */}

        <Link
          to="/"
          className="brand-logo"
          onClick={() => setMobileOpen(false)}
        >
          BRAHMAND
        </Link>


        {/* DESKTOP NAVIGATION */}

        <nav className="desktop-navigation">

          {navigation.map((item) => (

            <div
              className="nav-item"
              key={item.label}
            >

              {item.path ? (

                <Link
                  to={item.path}
                  className={
                    isActive(item)
                      ? "active-link"
                      : ""
                  }
                >
                  {item.label}
                </Link>

              ) : (

                <button
                  className={
                    isActive(item)
                      ? "nav-parent active-link"
                      : "nav-parent"
                  }
                >
                  {item.label}
                </button>

              )}


              {/* DROPDOWN */}

              {item.dropdown && (

                <div className="dropdown-menu">

                  {item.dropdown.map((child) => (

                    <Link
                      key={child.path}
                      to={child.path}
                      className={
                        location.pathname === child.path
                          ? "dropdown-active"
                          : ""
                      }
                    >
                      {child.label}
                    </Link>

                  ))}

                </div>

              )}

            </div>

          ))}

        </nav>


        {/* UPCOMING */}

        <div className="upcoming-launch">

          <span>
            UPCOMING LAUNCH
          </span>

          <strong>
            T-{Countdown()}
          </strong>

        </div>


        {/* MOBILE MENU */}

        <button
          className={`hamburger ${
            mobileOpen ? "active" : ""
          }`}
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </header>


      {/* MOBILE NAV */}

      {mobileOpen && (

        <div className="mobile-navigation">

          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
          >
            HOME
          </Link>

          {navigation.map((item) => (

            <div
              className="mobile-nav-group"
              key={item.label}
            >

              {item.path ? (

                <Link
                  to={item.path}
                  onClick={() =>
                    setMobileOpen(false)
                  }
                >
                  {item.label}
                </Link>

              ) : (

                <div className="mobile-nav-title">
                  {item.label}
                </div>

              )}

              {item.dropdown && (

                <div className="mobile-submenu">

                  {item.dropdown.map((child) => (

                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={() =>
                        setMobileOpen(false)
                      }
                    >
                      {child.label}
                    </Link>

                  ))}

                </div>

              )}

            </div>

          ))}

        </div>

      )}
    </>
  );
}


// =====================================================
// POPUP
// =====================================================

function InfoPopup({
  eyebrow,
  title,
  description,
  closePopup,
}) {
  return (
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
        >
          ×
        </button>

        <div className="popup-eyebrow">
          {eyebrow}
        </div>

        <h2>{title}</h2>

        <div className="popup-divider"></div>

        <p>{description}</p>

        <button
          className="popup-button"
          onClick={closePopup}
        >
          CLOSE
        </button>

      </div>

    </div>
  );
}


// =====================================================
// HOME PAGE
// =====================================================

function Home() {
  const [popup, setPopup] = useState(null);

  const openPopup = (data) => {
    setPopup(data);
  };

  return (
    <main>

      {/* =================================================
          HERO
      ================================================= */}

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

          <div className="hero-time">
            T-<Countdown />
          </div>

          <h1>
            STARSHIP FLIGHT 14
          </h1>

          <button
            className="hero-button"
            onClick={() =>
              openPopup({
                eyebrow:
                  "MISSION INFORMATION",
                title:
                  "STARSHIP FLIGHT 14",
                description:
                  "Explore the mission information, flight objectives and Starship program details.",
              })
            }
          >
            WATCH
            <span>→</span>
          </button>

        </div>

        <div className="scroll-line"></div>

      </section>


      {/* =================================================
          MARS SECTION
      ================================================= */}

      <section className="mars-section">

        <div className="mars-image">

          <img
            src={marsImage}
            alt="Mars"
          />

        </div>

        <div className="mars-gradient"></div>

        <div className="mars-content">

          <div className="section-eyebrow">
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
            Brahmand is built around the idea
            of expanding the boundaries of
            exploration and making space more
            accessible through advanced
            technology.
          </p>

          <button
            className="outline-button"
            onClick={() =>
              openPopup({
                eyebrow:
                  "SPACE EXPLORATION",
                title:
                  "MAKING LIFE MULTIPLANETARY",
                description:
                  "Discover the technologies and missions that are shaping the future of human space exploration.",
              })
            }
          >
            EXPLORE
            <span>→</span>
          </button>

        </div>

      </section>


      {/* =================================================
          STARSHIP
      ================================================= */}

      <section
        className="visual-section starship-home"
        style={{
          backgroundImage:
            `url(${starshipImage})`,
        }}
      >

        <div className="visual-gradient"></div>

        <div className="right-content">

          <div className="section-eyebrow">
            REVOLUTIONIZING SPACE TECHNOLOGY
          </div>

          <h2>STARSHIP</h2>

          <p>
            A fully reusable transportation
            system designed to carry crew and
            cargo to Earth orbit, the Moon,
            Mars and beyond.
          </p>

          <button
            className="outline-button"
            onClick={() =>
              openPopup({
                eyebrow:
                  "FULLY REUSABLE SPACECRAFT",
                title:
                  "STARSHIP",
                description:
                  "Learn about the Starship spacecraft, its reusable architecture and its role in future space missions.",
              })
            }
          >
            LEARN MORE
            <span>→</span>
          </button>

        </div>

      </section>


      {/* =================================================
          FALCON 9
      ================================================= */}

      <section
        className="visual-section falcon-home"
        style={{
          backgroundImage:
            `url(${falcon9Image})`,
        }}
      >

        <div className="visual-gradient falcon-gradient"></div>

        <div className="left-content">

          <div className="section-eyebrow">
            WORLD&apos;S LEADING LAUNCH SERVICE
          </div>

          <h2>
            FALCON 9
          </h2>

          <p>
            Reliable and reusable launch
            technology designed to make
            access to space more affordable.
          </p>

          <button
            className="outline-button"
            onClick={() =>
              openPopup({
                eyebrow:
                  "REUSABLE ROCKET",
                title:
                  "FALCON 9",
                description:
                  "Explore Falcon 9 and its reusable first-stage technology.",
              })
            }
          >
            RESERVE YOUR RIDE
            <span>→</span>
          </button>

        </div>

      </section>


      {/* =================================================
          STARLINK
      ================================================= */}

      <section
        className="visual-section starlink-home"
        style={{
          backgroundImage:
            `url(${starlinkImage})`,
        }}
      >

        <div className="visual-gradient"></div>

        <div className="bottom-left-content">

          <div className="section-eyebrow">
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
            className="outline-button"
            onClick={() =>
              openPopup({
                eyebrow:
                  "HIGH-SPEED INTERNET",
                title:
                  "STARLINK",
                description:
                  "Explore satellite internet technology and the Starlink network.",
              })
            }
          >
            ORDER NOW
            <span>→</span>
          </button>

        </div>

      </section>


      {/* =================================================
          SPACEXAI / BRAHMAND AI
      ================================================= */}

      <section
        className="visual-section ai-home"
        style={{
          backgroundImage:
            `url(${spacexaiImage})`,
        }}
      >

        <div className="visual-gradient"></div>

        <div className="left-content">

          <div className="section-eyebrow">
            ADVANCED COMPUTING
          </div>

          <h2>
            BRAHMAND AI
          </h2>

          <p>
            Advanced computing and artificial
            intelligence infrastructure for
            future systems.
          </p>

          <Link
            className="outline-button"
            to="/brahmand-ai/mind"
          >
            EXPLORE
            <span>→</span>
          </Link>

        </div>

      </section>


      {/* =================================================
          TERAFAB
      ================================================= */}

      <section
        className="visual-section terafab-home"
        style={{
          backgroundImage:
            `url(${terafabImage})`,
        }}
      >

        <div className="visual-gradient"></div>

        <div className="right-content">

          <div className="section-eyebrow">
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

          <Link
            className="outline-button"
            to="/terafab"
          >
            LEARN MORE
            <span>→</span>
          </Link>

        </div>

      </section>


      {/* =================================================
          POPUP
      ================================================= */}

      {popup && (

        <InfoPopup
          eyebrow={popup.eyebrow}
          title={popup.title}
          description={popup.description}
          closePopup={() =>
            setPopup(null)
          }
        />

      )}

    </main>
  );
}


// =====================================================
// GENERIC PAGE
// =====================================================

function GenericPage({
  title,
  eyebrow,
  description,
  image,
}) {
  return (
    <section
      className="generic-page"
      style={
        image
          ? {
              backgroundImage:
                `url(${image})`,
            }
          : {}
      }
    >

      <div className="generic-overlay"></div>

      <div className="generic-content">

        <div className="section-eyebrow">
          {eyebrow}
        </div>

        <h1>{title}</h1>

        <p>{description}</p>

        <Link
          to="/"
          className="outline-button"
        >
          BACK HOME
          <span>←</span>
        </Link>

      </div>

    </section>
  );
}


// =====================================================
// APP ROUTES
// =====================================================

function AppRoutes() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* VEHICLES */}

        <Route
          path="/vehicles/starship"
          element={
            <GenericPage
              title="STARSHIP"
              eyebrow="VEHICLES"
              description="Explore the Starship transportation system and its reusable architecture."
              image={starshipImage}
            />
          }
        />

        <Route
          path="/vehicles/dragon"
          element={
            <GenericPage
              title="DRAGON"
              eyebrow="VEHICLES"
              description="Explore Dragon spacecraft and human spaceflight capabilities."
              image={starshipImage}
            />
          }
        />

        <Route
          path="/vehicles/falcon-9"
          element={
            <GenericPage
              title="FALCON 9"
              eyebrow="VEHICLES"
              description="Explore Falcon 9 and reusable launch technology."
              image={falcon9Image}
            />
          }
        />

        <Route
          path="/vehicles/falcon-heavy"
          element={
            <GenericPage
              title="FALCON HEAVY"
              eyebrow="VEHICLES"
              description="Explore heavy-lift launch technology."
              image={falcon9Image}
            />
          }
        />


        {/* HUMAN SPACEFLIGHT */}

        <Route
          path="/human-spaceflight"
          element={
            <GenericPage
              title="HUMAN SPACEFLIGHT"
              eyebrow="HUMAN SPACEFLIGHT"
              description="Explore human spaceflight missions, destinations and future exploration."
              image={starshipImage}
            />
          }
        />

        <Route
          path="/human-spaceflight/space-station"
          element={
            <GenericPage
              title="SPACE STATION"
              eyebrow="HUMAN SPACEFLIGHT"
              description="Human missions and transportation supporting life and research in orbit."
              image={starlinkImage}
            />
          }
        />

        <Route
          path="/human-spaceflight/earth-orbit"
          element={
            <GenericPage
              title="EARTH ORBIT"
              eyebrow="HUMAN SPACEFLIGHT"
              description="Discover missions operating in Earth orbit."
              image={falcon9Image}
            />
          }
        />

        <Route
          path="/human-spaceflight/moon"
          element={
            <GenericPage
              title="THE MOON"
              eyebrow="HUMAN SPACEFLIGHT"
              description="Explore technologies supporting future lunar missions."
              image={marsImage}
            />
          }
        />

        <Route
          path="/human-spaceflight/mars-beyond"
          element={
            <GenericPage
              title="MARS & BEYOND"
              eyebrow="HUMAN SPACEFLIGHT"
              description="Explore the long-term vision of extending humanity beyond Earth."
              image={marsImage}
            />
          }
        />


        {/* STARLINK */}

        <Route
          path="/starlink"
          element={
            <GenericPage
              title="STARLINK"
              eyebrow="SATELLITE INTERNET"
              description="High-speed internet connectivity from a satellite network in low Earth orbit."
              image={starlinkImage}
            />
          }
        />


        {/* STARSHIELD */}

        <Route
          path="/starshield"
          element={
            <GenericPage
              title="STARSHIELD"
              eyebrow="SECURE SATELLITE TECHNOLOGY"
              description="A dedicated space technology platform designed for secure and resilient satellite applications."
              image={starlinkImage}
            />
          }
        />


        {/* BRAHMAND AI */}

        <Route
          path="/brahmand-ai/mind"
          element={
            <GenericPage
              title="BRAHMAND MIND"
              eyebrow="BRAHMAND AI"
              description="Explore the future of advanced orbital computing and artificial intelligence."
              image={spacexaiImage}
            />
          }
        />

        <Route
          path="/brahmand-ai/grok"
          element={
            <GenericPage
              title="GROK"
              eyebrow="BRAHMAND AI"
              description="AI-powered conversational technology."
              image={spacexaiImage}
            />
          }
        />

        <Route
          path="/brahmand-ai/grokipedia"
          element={
            <GenericPage
              title="GROKIPEDIA"
              eyebrow="BRAHMAND AI"
              description="An AI-focused knowledge experience."
              image={spacexaiImage}
            />
          }
        />

        <Route
          path="/brahmand-ai/x"
          element={
            <GenericPage
              title="X"
              eyebrow="BRAHMAND AI"
              description="Explore the connected digital ecosystem."
              image={spacexaiImage}
            />
          }
        />


        {/* TERAFAB */}

        <Route
          path="/terafab"
          element={
            <GenericPage
              title="TERAFAB"
              eyebrow="ADVANCED MANUFACTURING"
              description="Next-generation manufacturing infrastructure for advanced technology."
              image={terafabImage}
            />
          }
        />


        {/* COMPANY */}

        <Route
          path="/company/mission"
          element={
            <GenericPage
              title="MISSION"
              eyebrow="COMPANY"
              description="Explore the mission and long-term vision behind Brahmand."
              image={marsImage}
            />
          }
        />

        <Route
          path="/company/careers"
          element={
            <GenericPage
              title="CAREERS"
              eyebrow="COMPANY"
              description="Discover opportunities to work on ambitious technology and exploration projects."
            />
          }
        />

        <Route
          path="/company/sites"
          element={
            <GenericPage
              title="SITES"
              eyebrow="COMPANY"
              description="Explore Brahmand facilities and technology locations."
            />
          }
        />

        <Route
          path="/company/updates"
          element={
            <GenericPage
              title="UPDATES"
              eyebrow="COMPANY"
              description="Latest news, missions and technology updates."
            />
          }
        />

        <Route
          path="/company/content"
          element={
            <GenericPage
              title="CONTENT"
              eyebrow="COMPANY"
              description="Explore videos, images and educational content."
            />
          }
        />

        <Route
          path="/company/investors"
          element={
            <GenericPage
              title="INVESTORS"
              eyebrow="COMPANY"
              description="Investor and corporate information."
            />
          }
        />


        {/* SHOP */}

        <Route
          path="/shop/brahmand"
          element={
            <GenericPage
              title="BRAHMAND SHOP"
              eyebrow="SHOP"
              description="Explore Brahmand merchandise and products."
              image={starshipImage}
            />
          }
        />

        <Route
          path="/shop/brahmand-ai"
          element={
            <GenericPage
              title="BRAHMAND AI SHOP"
              eyebrow="SHOP"
              description="Explore Brahmand AI products and merchandise."
              image={spacexaiImage}
            />
          }
        />

      </Routes>


      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-logo">
          BRAHMAND
        </div>

        <div className="footer-links">

          <Link to="/">
            HOME
          </Link>

          <Link to="/company/mission">
            MISSION
          </Link>

          <Link to="/company/careers">
            CAREERS
          </Link>

        </div>

        <div className="footer-copy">
          © 2026 BRAHMAND
        </div>

      </footer>
    </>
  );
}


// =====================================================
// MAIN APP
// =====================================================

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;