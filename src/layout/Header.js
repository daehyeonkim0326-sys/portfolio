import "./layout.scss";

const Header = () => {
    const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};
  return (
    <div className="header">
  <ul>
    <li className="nav" onClick={() => scrollTo("home")}>HOME</li>
    <li>|</li>
    <li className="nav" onClick={() => scrollTo("me")}>ME</li>
    <li>|</li>
    <li className="nav" onClick={() => scrollTo("skill")}>SKILL</li>
    <li>|</li>
    <li className="nav" onClick={() => scrollTo("projects")}>PROJECTS</li>
    <li>|</li>
    <li className="nav" onClick={() => scrollTo("contact")}>CONTACT</li>
  </ul>
</div>
  )
}

export default Header