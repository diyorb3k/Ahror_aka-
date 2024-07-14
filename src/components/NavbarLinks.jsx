// rrd imports
import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "About",
    link: "/about",
  },
  {
    id: 3,
    text: "Contact",
    link: "/contact",
  },
];

export default function NavbarLinks() {
  return (
    <>
      {links.map((item) => {
        const { id, link, text } = item;
        return (
          <li key={id}>
            <Link to={link}>{text}</Link>
          </li>
        );
      })}
    </>
  );
}
