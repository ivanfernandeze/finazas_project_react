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
    title: "Formulas 1",
    path: "/formulas1"
  },
  {
    title: "Formulas 2",
    path: "/formulas2"
  }
]

function NavListMenu({menuItems, titleMenu}) {
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
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="rounded-xl" >
          {menuItems.map((item, index) => (
            <MenuItem key={index} className="">{item.title}</MenuItem>
          ))}
        </MenuList>
      </Menu>
  )
}

function NavBar() {
  return (
    <nav className='px-10 py-4 flex justify-between items-center'>
      
      <div>
        <Link to='/' className="text-xl font-semibold">Grupo Microsoft</Link>
      </div>
      <ul className=' flex gap-2 items-center'>
        <li>
          <ListItem className="px-4 py-1 hover:bg-gray-100 text-gray-900">
            <Link to='/about'>Sobre Nosotros</Link>
          </ListItem>
        </li>
        <li>
          <NavListMenu menuItems={menuItemRatio} titleMenu={"Ratios"}/>
        </li>
        <li>
          <NavListMenu menuItems={menuItemFormulas} titleMenu={"Formulas"}/>
        </li>
        <li>
          <ListItem className="px-4 py-1 hover:bg-gray-100 text-gray-900">
            <Link to='/about'>Informacion Microsoft</Link>
          </ListItem>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
