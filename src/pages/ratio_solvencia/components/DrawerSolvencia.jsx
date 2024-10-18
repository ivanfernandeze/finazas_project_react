import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton
} from "@material-tailwind/react";
 
export function DrawerSolvencia({nombreRatio, descripciones}) {
  const [openBottom, setOpenBottom] = React.useState(false);

  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);
 
  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4 items-center pt-4">
        <h1 className='text-2xl font-bold'>Solvencia</h1>
        <Button className="px-5 py-3" onClick={openDrawerBottom}>¿? </Button>
      </div>
      <Drawer
        placement="bottom"
        open={openBottom}
        onClose={closeDrawerBottom}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            {nombreRatio}
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerBottom}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        {
            descripciones.map((descripcion, index) => (
                <Typography color="gray" className="mb-2 pr-4 font-normal" key={index}>
                    {descripcion}
                </Typography>
            ))
        }
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          {/* <Button size="sm">Get Started</Button> */}
        </div>
      </Drawer>
    </React.Fragment>
  );
}