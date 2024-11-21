import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  
  function FormulaCard({ title, formula, description, imageUrl }) {
    return (
      <Card className="mt-6 w-full md:w-2/3 lg:w-1/2 shadow-lg bg-pastel-blue"> 
        <CardHeader className="relative h-40">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-contain"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography variant="h6" color="blue-gray" className="mb-2">
            Fórmula: {formula}
          </Typography>
          <Typography>
            {description}
          </Typography>
        </CardBody>
      </Card>
    );
  }
  
  export default FormulaCard;
  