import logo from "/assets/logos/logo.svg";
import "./Navigation.css";

const LEFT_LINKS = [
  { label: "WORK", href: "#work", counter: 5 },
  { label: "STUDIO", href: "#studio" },
  { label: "WHISPERS", href: "#whispers", counter: 7 },
];

function NavLink({ label, href, counter }) {
  return (
    <a className="nav-link" href={href}>
      <span className="nav-link__text">{label}</span>
      {counter != null && <span className="nav-link__counter">{counter}</span>}
    </a>
  );
}

function Navigation() {
  return (
    <header className="nav">
      <div className="nav__bg" />
      <div className="nav__content">
        <a className="nav__logo" href="#hero" aria-label="The Big Brand Story home">
          <img src={logo} alt="The Big Brand Story" width="92" height="24" />
        </a>

        <nav className="nav__menu">
          <div className="nav__group">
            {LEFT_LINKS.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
          </div>
          <div className="nav__group">
            <NavLink label="CONTACT" href="#contact" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
