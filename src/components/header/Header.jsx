import { Navbar } from "./navbar/Navbar.jsx";

export function Header() {
  const mainName = "The Body Shop";
  const hrefLink = ["#", "#home", "#contact"];
  const imgSrc = "/src/assets/the-body-shop-logo.svg";
  const pages = ["Inicio", "Productos", "Contactos"];
  return (
    <>
      <Navbar
        mainName={mainName}
        hrefLink={hrefLink}
        imgSrc={imgSrc}
        pages={pages}
      />
    </>
  );
}

export default Header;
