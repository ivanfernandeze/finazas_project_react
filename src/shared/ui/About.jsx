import CardIntegrante from "../components/CardIntegrante";
import { Typography } from "@material-tailwind/react";
function About() {
  const members = [
    {
      img: `https://www.material-tailwind.com/img/avatar2.jpg`,
      name: "Daniel Armas",
      title: "Co-Founder",
    },
    {
      img: `https://www.material-tailwind.com/img/avatar4.jpg`,
      name: "Kevin Rivas",
      title: "Co-Founder",
    },
    {
      img: `https://www.material-tailwind.com/img/avatar6.jpg`,
      name: "Deyci Quiliche",
      title: "Software Engineering",
    },
    {
      img: `https://www.material-tailwind.com/img/avatar3.jpg`,
      name: "Ivan Fernandez",
      title: "UI/UX Designer",
    },
    {
      img: "https://www.material-tailwind.com/image/avatar7.svg",
      name: "Elmo Tirado",
      title: "Web Developer",
    },
  ];
  return (
    <section className="min-h-screen py-8 px-8 lg:py-28">
    <div className="container mx-auto">
      <div className="mb-16 text-center">
        <Typography
          variant="h6"
          color="blue-gray"
          className="text-lg"
        >
          Conozca al equipo
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="my-2 !text-2xl lg:!text-4xl"
        >
          Detrás del éxito: nuestro equipo dedicado
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 max-w-4xl"
        >
          Desde un liderazgo visionario hasta talentos creativos y expertos técnicos, cada miembro del equipo desempeña un papel fundamental en la prestación de un servicio excepcional y soluciones innovadoras.
        </Typography>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 place-items-center">
          {members.map((props, key) => (
            <CardIntegrante key={key} {...props} />
          ))}
        </div>
      </div>
    </div>
  </section>
  );
}

export default About;
