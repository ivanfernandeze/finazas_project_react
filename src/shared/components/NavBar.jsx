import { Link } from "react-router-dom"
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { NavListMenuIIUnidad } from "./Nav";



const menuItemRatio = [
  {
    title: "Gestion",
    path: "/RatioGestion"
  },
  {
    title: "Rentabilidad",
    path: "/ratio-rentabilidad"
  },
  {
    title: "Liquidez",
    path: "/ratio-liquidez"
  },
  {
    title: "Solvencia",
    path: "/ratio-solvencia"
  }
]

const menuItemFormulas = [
  {
    title: "FSC",
    path: "/factorFSC"
  },
  {
    title: "FSA",
    path: "/factorFSA"
  },
  {
    title: "FRC",
    path: "/factorFRC"
  },
  {
    title: "FAS",
    path: "/factorFAS"
  },
  {
    title: "FCS",
    path: "/factorFCS"
  },
  {
    title: "FDA",
    path: "/factorFDA"
  },
]

function NavListMenu({ menuItems, titleMenu }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <Menu
      open={isMenuOpen}
      handler={setIsMenuOpen}
      placement="bottom"
      allowHover={true}
    >
      <MenuHandler>
        <Typography as="div">
          <ListItem
            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
            selected={isMenuOpen || isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            {titleMenu}
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                }`}
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                }`}
            />
          </ListItem>
        </Typography>
      </MenuHandler>
      <MenuList className="rounded-xl" >
        {menuItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <MenuItem key={index} className="w-[140px] px-4 py-2 rounded-md hover:bg-gray-100 flex justify-start" >{item.title}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  )
}

function NavBar() {
  return (
    <nav className="px-10 py-4 bg-white shadow-md flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" className="text-xl font-semibold text-gray-900">
          Grupo Microsoft
        </Link>
      </div>

      {/* Menú de navegación */}
      <ul className="flex gap-6 items-center">
        {/* Sobre Nosotros */}
        <li>
          <ListItem className="items-center gap-2 py-2 pr-4 font-medium text-gray-900">
            <Link to='/about'>Sobre Nosotros</Link>
          </ListItem>
        </li>

        {/* Ratios */}
        <li>
          <NavListMenu menuItems={menuItemRatio} titleMenu="Ratios" />
        </li>

        {/* Fórmulas */}
        <li>
          <NavListMenu menuItems={menuItemFormulas} titleMenu="Fórmulas" />
        </li>
        {/* SEGUNDA UNIDAD */}
        <li>
        <NavListMenuIIUnidad />
        </li>
        {/* Contáctanos */}
        <li>
          <ListItem className="items-center gap-2 py-2 pr-4 font-medium text-gray-900">
            <Link to='/about'>no</Link>
          </ListItem>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
