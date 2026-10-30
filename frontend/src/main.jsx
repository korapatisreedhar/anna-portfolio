import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import profilePhoto from "./assets/profile-photo.png";
import "./style.css";

const projects = [
  {
    name: "Life Net 2.0",
    client: "Tennessee Farm Bureau (TNFB)",
    role: "UI Lead",
    tech: "ReactJs, Redux, JavaScript, TypeScript, RTL",
    period: "Dec 2024 – Till date",
    description: "Developed and maintained web applications for TNFB Insurance to streamline client and policy management. Implemented Redux state management and collaborated with backend and QA teams to deliver secure, scalable user experiences for claim tracking, policy issuance and authentication."
  },
  {
    name: "DFD Union Health",
    client: "HTC Global Services",
    role: "Senior Associate Developer",
    tech: "ReactJs, Redux, JavaScript, HTML5, CSS3",
    period: "Apr 2023 – Nov 2024",
    description: "Health application supporting patient profiles, health information, appointment bookings and lab-report tracking."
  },
  {
    name: "Provider App",
    client: "HTC Global Services",
    role: "Senior Associate Developer",
    tech: "ReactJs, Redux, JavaScript, HTML5, CSS3",
    period: "Jan 2023 – Mar 2023",
    description: "Provider application for doctors to track candidate health details and information and manage care-plan related information."
  },
  {
    name: "Green Kanha Run",
    client: "HTC Global Services / Heartfulness",
    role: "Senior Associate Developer",
    tech: "ReactJs, Redux, JavaScript, HTML5, CSS3",
    period: "Nov 2022 – Dec 2022",
    description: "Event application allowing users to register participation and view event information and timings."
  },
  {
    name: "Proposal Portal",
    client: "HTC Global Services / Heartfulness",
    role: "Senior Associate Developer",
    tech: "ReactJs, Redux, JavaScript, HTML5, CSS3",
    period: "Jul 2022 – Oct 2022",
    description: "Portal providing wedding-proposal services for Heartfulness members and managing candidate information."
  },
  {
    name: "Forest – Heartfulness Phase 2",
    client: "HTC Global Services / Heartfulness",
    role: "Senior Associate Developer",
    tech: "GatsbyJs, ReactJs, Redux, JavaScript, HTML5, CSS3",
    period: "Jan 2022 – Jun 2022",
    description: "Admin-focused application for managing projects, plantations and species details, with tracking for planted trees."
  },
  {
    name: "Heartfulness Gurugram Seva Ashram",
    client: "HTC Global Services / Heartfulness",
    role: "Senior Associate Developer",
    tech: "GatsbyJs, ReactJs, JavaScript, HTML5, CSS3",
    period: "Oct 2021 – Jan 2022",
    description: "Web application providing meditation-center information, activities, timings and visitor registration."
  },
  {
    name: "Heartfulness Campus",
    client: "HTC Global Services",
    role: "Senior Associate Developer",
    tech: "ReactJs, Redux, JavaScript, HTML5",
    period: "May 2021 – Oct 2021",
    description: "Campus application helping faculty SPOCs and volunteers select modules and manage user access and profiles. Supported login through Gmail, Facebook, LinkedIn or personal email."
  },
  {
    name: "Verizon Verify",
    client: "Verizon Data Services",
    role: "Senior Software Developer",
    tech: "ReactJs, Redux, JavaScript, HTML5",
    period: "Sep 2019 – Apr 2021",
    description: "Payment-Verify product used to analyze vendor invoices and raise disputes by comparing billed amounts with network circuit uptime, downtime and usage."
  },
  {
    name: "Ydel Agro",
    client: "Ydel Infratech Limited",
    role: "Software Developer",
    tech: "ReactJs, Redux, HTML5, CSS, Bootstrap, SQL",
    period: "Aug 2018 – Sep 2019",
    description: "Agricultural staffing solution focused on providing cost-effective workforce support to the agricultural sector. Built SPA flows with React Router, components, forms, events and RESTful services."
  },
  {
    name: "Prescription",
    client: "Ydel Infratech Limited",
    role: "Software Developer",
    tech: "AngularJS, Bootstrap, HTML, HTML5, CSS3, JavaScript, SQL",
    period: "Aug 2015 – Sep 2018",
    description: "Web-based hospital management application for online appointments, patient records, reports, doctor details and appointment history."
  }
];

const skills = [
  "React JS", "Redux", "JavaScript", "TypeScript",
  "HTML5", "CSS3", "Bootstrap", "Gatsby JS",
  "REST / Web Services", "GitHub / GitLab", "Webpack", "JS ES5 / ES6"
];

const certifications = [
  {
    name: "Git Essential Training",
    issuer: "LinkedIn",
    date: "May 2024",
    icon: "bi-git"
  },
  {
    name: "Atlassian Agile Project Management Professional Certificate",
    issuer: "Atlassian",
    date: "Mar 2024",
    icon: "bi-kanban"
  },
  {
    name: "Node.js Essential Training",
    issuer: "LinkedIn",
    date: "Mar 2024",
    icon: "bi-code-slash"
  },
  {
    name: "Scrum: The Basics",
    issuer: "LinkedIn",
    date: "Mar 2024",
    icon: "bi-check2-circle"
  }
];

function Particles() {
  const orbs = Array.from({ length: 42 }, (_, i) => i);

  useEffect(() => {
    let frame;
    const handlePointerMove = event => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const shift = ((event.clientX / window.innerWidth) - 0.5) * 36;
        document.documentElement.style.setProperty("--pointer-shift", `${shift}px`);
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(frame);
      document.documentElement.style.removeProperty("--pointer-shift");
    };
  }, []);

  return (
    <div className="particle-layer" aria-hidden="true">
      <div className="orb-layer">
        {orbs.map(i => (
          <span
            key={i}
            className="orb"
            style={{
              left: `${(i * 37 + Math.floor(i / 6) * 11) % 100}%`,
              width: `${10 + (i * 13) % 26}px`,
              height: `${10 + (i * 13) % 26}px`,
              animationDelay: `${-((i * 1.9) % 36)}s`,
              animationDuration: `${22 + (i % 7) * 3}s`,
              "--drift": `${((i * 31) % 150) - 75}px`
            }}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);

  const categories = ["All", "React", "Gatsby", "Healthcare", "Enterprise"];
  const filtered = projects.filter(p => {
    if (filter === "All") return true;
    if (filter === "React") return p.tech.includes("ReactJs");
    if (filter === "Gatsby") return p.tech.includes("GatsbyJs");
    if (filter === "Healthcare") return /health|hospital|patient|doctor|prescription/i.test(p.description + p.name);
    return /Verizon|TNFB|Ydel|Union|Provider/i.test(p.client + p.name);
  });

  return (
    <div className="app">
      <Particles />
      <nav className="navbar navbar-expand-lg fixed-top glass-nav">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home"><span>RK</span></a>
          <button className="navbar-toggler" onClick={() => setMenu(!menu)}><i className="bi bi-list"></i></button>
          <div className={`collapse navbar-collapse ${menu ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              {["Home","About","Skills","Certifications","Experience","Projects","Contact"].map(x =>
                <li className="nav-item" key={x}><a className="nav-link" href={`#${x.toLowerCase()}`} onClick={()=>setMenu(false)}>{x}</a></li>
              )}
              <li><button className="theme-btn" onClick={()=>setDark(!dark)} aria-label="Toggle theme"><i className={`bi ${dark ? "bi-sun" : "bi-moon"}`}></i></button></li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="hero container">
          <div className="row align-items-center min-vh-100 gy-5">
            <div className="col-lg-7">
              <p className="eyebrow">SENIOR UI / REACT DEVELOPER</p>
              <h1>Hi, I'm <span>Ramesh</span><br/>Korapati.</h1>
              <h2>React.js & UI Development Specialist</h2>
              <p className="lead">10 years of UI development experience with 7 years focused on React JS, Redux and JavaScript, building responsive and user-focused web applications.</p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href="#projects" className="btn btn-danger btn-lg px-4">View Projects <i className="bi bi-arrow-right"></i></a>
                <a href="#contact" className="btn btn-outline-light btn-lg px-4 secondary-btn">Contact Me</a>
              </div>
              <div className="socials mt-5">
                <span>10+ Years UI</span><span>7+ Years React</span><span>UI Lead</span>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <div className="profile-wrap">
                <div className="profile-shape">
                  <img className="profile-photo" src={profilePhoto} alt="Ramesh Korapati" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section container">
          <div className="section-heading"><span>01</span><h2>About Me</h2></div>
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="card-glass h-100">
                <h3>Building polished interfaces with React.</h3>
                <p>Highly motivated UI professional with integrity and commitment to quality and perfection. Experienced in React class and functional components, ES6, Redux with Hooks, HTML5, CSS3 and Bootstrap.</p>
                <p>Experienced in understanding client requirements, designing web pages and applications around business and user goals, maintaining design consistency, accessibility and cross-browser compatibility, and leading offshore UI teams.</p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card-glass h-100">
                <div className="info-row"><b>Education</b><span>MCA — Sree Vidyanikethan Engineering College, JNTUA</span></div>
                <div className="info-row"><b>Languages</b><span>English · Telugu · Tamil</span></div>
                <div className="info-row"><b>Location</b><span>Hyderabad</span></div>
                <div className="info-row"><b>Current Role</b><span>Senior Associate Developer</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section container">
          <div className="section-heading"><span>02</span><h2>Technology Stack</h2></div>
          <div className="row g-4">
            {skills.map(name => <div className="col-md-6 col-lg-4" key={name}>
              <div className="skill-card">
                <b>{name}</b>
              </div>
            </div>)}
          </div>
        </section>

        <section id="certifications" className="section container">
          <div className="section-heading"><span>03</span><h2>Certifications</h2></div>
          <div className="row g-4">
            {certifications.map(cert => (
              <div className="col-md-6" key={cert.name}>
                <article className="cert-card h-100">
                  <div className="cert-icon" aria-hidden="true">
                    <i className={`bi ${cert.icon}`}></i>
                  </div>
                  <div className="cert-content">
                    <h3>{cert.name}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <span className="cert-date">Issued {cert.date}</span>
                  </div>
                </article>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <a
              className="btn btn-outline-light secondary-btn"
              href="https://www.linkedin.com/in/korapati-ramesh-a88075125/"
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn Profile <i className="bi bi-box-arrow-up-right ms-1"></i>
            </a>
          </div>
        </section>

        <section id="experience" className="section container">
          <div className="section-heading"><span>04</span><h2>Experience</h2></div>
          <div className="timeline">
            <div className="timeline-item"><span>May 2021 – Present</span><h3>Senior Associate Developer</h3><p>HTC Global Services (India) Private Ltd.</p></div>
            <div className="timeline-item"><span>Sep 2019 – Apr 2021</span><h3>Senior Software Developer</h3><p>Verizon Data Services — Tech Star Software Development India Pvt Ltd, Chennai.</p></div>
            <div className="timeline-item"><span>Aug 2015 – Sep 2019</span><h3>UI Developer</h3><p>Ydel InfraTech Pvt Ltd, Hyderabad.</p></div>
          </div>
        </section>

        <section id="projects" className="section container">
          <div className="section-heading"><span>05</span><h2>Selected Projects</h2></div>
          <div className="filter-bar">
            {categories.map(c => <button key={c} className={filter===c ? "active" : ""} onClick={()=>setFilter(c)}>{c}</button>)}
          </div>
          <div className="row g-4">
            {filtered.map((p, i) => <div className="col-md-6" key={p.name}>
              <article className="project-card h-100">
                <div className="project-number">{String(i+1).padStart(2,"0")}</div>
                <div className="project-top"><span>{p.period}</span><i className="bi bi-box-arrow-up-right"></i></div>
                <h3>{p.name}</h3>
                <p className="client">{p.client} · {p.role}</p>
                <p>{p.description}</p>
                <div className="tech-tags">{p.tech.split(",").map(t => <span key={t}>{t.trim()}</span>)}</div>
              </article>
            </div>)}
          </div>
        </section>

        <section className="section container">
          <div className="card-glass contribution">
            <div><span className="eyebrow">WHAT I BRING</span><h2>From requirements to production-ready UI.</h2></div>
            <ul>
              <li>Client requirement analysis</li>
              <li>Responsive and accessible UI</li>
              <li>React components and forms</li>
              <li>Redux state management</li>
              <li>RESTful web-service integration</li>
              <li>Cross-browser compatibility</li>
              <li>Offshore UI team leadership</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="section container pb-5">
          <div className="section-heading"><span>06</span><h2>Let's Connect</h2></div>
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="card-glass h-100">
                <h3>Have a UI project in mind?</h3>
                <p>Let's discuss React, UI development, enterprise applications or a new web experience.</p>
                <a href="mailto:rameshmdl29@gmail.com" className="contact-link"><i className="bi bi-envelope"></i> rameshmdl29@gmail.com</a>
                <a href="tel:+919154545551" className="contact-link"><i className="bi bi-telephone"></i> +91-9154545551</a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="card-glass h-100">
                <h3>Resume &amp; Profiles</h3>
                <p>Explore my experience and connect with me professionally.</p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <a
                    className="btn btn-danger px-4"
                    href="/Ramesh_Korapati_CV.pdf"
                    download
                  >
                    <i className="bi bi-file-earmark-pdf me-2"></i>
                    Download Resume
                  </a>
                  <a
                    className="btn btn-outline-light secondary-btn px-4"
                    href="https://www.linkedin.com/in/korapati-ramesh-a88075125/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-linkedin me-2"></i>
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container d-flex justify-content-between flex-wrap gap-2">
          <span>© {new Date().getFullYear()} Ramesh Korapati</span>
          <span>Senior UI / React Developer</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
