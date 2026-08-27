import "./App.css";

function App() {
  const projects = [
    {
      title: "Restaurant Landing Page",
      description:
        "A responsive restaurant website with modern UI, menu, services and contact section.",
      tech: "React • CSS • JavaScript",
      link: "#",
    },
    {
      title: "Calculator App",
      description:
        "A clean and responsive calculator application built using React.",
      tech: "React • CSS",
      link: "#",
    },
    {
      title: "Developer Portfolio",
      description:
        "A personal portfolio website to showcase projects, skills and contact details.",
      tech: "React • CSS • JavaScript",
      link: "#",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
    "Responsive Design",
    "UI Design",
  ];

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Amardeep<span>.</span></div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
        >
          Resume
        </a>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="small-text">HELLO, I'M</p>

          <h1>
            Amardeep <span>Yadav</span>
          </h1>

          <h2>Frontend Developer</h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly websites using
            React, JavaScript and CSS.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-circle">
            <span>&lt;/&gt;</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <p className="section-tag">ABOUT ME</p>

        <h2>Turning ideas into digital experiences.</h2>

        <p>
          I'm a developer who enjoys creating clean and interactive web
          experiences. I focus on writing simple, maintainable code and
          building responsive websites that work across different devices.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <p className="section-tag">MY WORK</p>

        <h2 className="section-title">Projects</h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-number">
                0{index + 1}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech">
                {project.tech}
              </div>

              <a
                href={project.link}
                className="project-link"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <p className="section-tag">WHAT I KNOW</p>

        <h2 className="section-title">Skills</h2>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                {skill.charAt(0)}
              </div>

              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Resume */}
      <section className="resume-section">
        <div>
          <p className="section-tag">MY RESUME</p>

          <h2>Want to know more about me?</h2>

          <p>
            Download my resume to see my education, experience,
            skills and projects.
          </p>
        </div>

        <a
          href="/resume.pdf"
          download
          className="primary-btn"
        >
          Download Resume ↓
        </a>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <p className="section-tag">GET IN TOUCH</p>

        <h2 className="section-title">Contact Me</h2>

        <div className="contact-container">

          <div className="contact-info">
            <h3>Let's work together.</h3>

            <p>
              Have a project idea or want to collaborate?
              Send me a message and I'll get back to you.
            </p>

            <div className="contact-details">
              <p>📧 yourmail@gmail.com</p>
              <p>📍 Uttar Pradesh, India</p>
            </div>
          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button type="submit">
              Send Message →
            </button>

          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-logo">
          Amardeep<span>.</span>
        </div>

        <p>
          © 2026 Amardeep. Built with React & CSS.
        </p>

        <div className="footer-social">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;