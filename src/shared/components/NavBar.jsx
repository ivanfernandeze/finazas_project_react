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


const menuItemRatio = [
  {
    title: "Liquidez",
    path: "/liquidez"
  },
  {
    title: "Rendimiento",
    path: "/rendimiento"
  }
]

const menuItemFormulas = [
  {
    title: "FSC",
    path: "/factorFRC"
  },
  {
    title: "FSA",
    path: "/factorFRC"
  },
  {
    title: "FRC",
    path: "/factorFRC"
  },
  {
    title: "FAS",
    path: "/formulas4"
  },
  {
    title: "FCS",
    path: "/formulas5"
  },
  {
    title: "FDA",
    path: "/formulas6"
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
            className="flex items-center gap-2 px-4 py-1 hover:bg-gray-100 text-gray-900"
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
      <MenuList className="px-2 py-4 border block space-y-2 w-auto" >
        {menuItems.map((item, index) => (
          <a href={item.path}>
            <MenuItem key={index} className="w-[140px] px-4 py-2 rounded-md hover:bg-gray-100 flex justify-start" >{item.title}</MenuItem>
          </a>
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
          <ListItem className="px-4 py-1 hover:bg-gray-100 text-gray-900">
            <Link to="/about" className="text-sm font-medium">
              Sobre Nosotros
            </Link>
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

        {/* ROA - ROE */}
        <li>
          <Link
            to="/roa-roe"
            className="px-4 py-1 text-sm font-medium hover:bg-gray-100 text-gray-900"
          >
            ROA - ROE
          </Link>
        </li>

        {/* Contáctanos */}
        <li>
          <ListItem className="px-4 py-1 hover:bg-gray-100 text-gray-900">
            <Link to="/contact" className="text-sm font-medium">
              Contáctanos
            </Link>
          </ListItem>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
