import "./Footer.css";

function Footer() {
  return (
    <div className="footer" id="footer">
      <footer>
        <div>&copy; Alexandre Oliveira - 2023</div>
        <a href="https://www.instagram.com/ale_oliverr/" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/alexandre-oliveira-devweb/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/AlexyOliveira" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
