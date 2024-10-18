import React from 'react';
import CardIntegrante from '../components/CardIntegrante';
import { Typography, Card, CardBody } from "@material-tailwind/react";
function Home() {
  const definiciones = [
    {
      titulo: 'Rentabilidad',
      descripcion: 'El ratio de rentabilidad mide la capacidad de una empresa para generar beneficios en relación con sus ingresos, activos o capital.',
      img: 'https://cdn-icons-png.flaticon.com/512/2965/2965877.png',
    },
    {
      titulo: 'Liquidez',
      descripcion: 'El ratio de liquidez mide la capacidad de una empresa para cubrir sus obligaciones a corto plazo con sus activos disponibles.',
      img: 'https://cdn-icons-png.flaticon.com/512/2552/2552802.png',
    },
    {
      titulo: 'Endeudamiento',
      descripcion: 'El ratio de endeudamiento mide el nivel de deuda en relación con los activos o el patrimonio neto de una empresa.',
      img: 'https://cdn-icons-png.flaticon.com/512/3050/3050457.png',
    },
    {
      titulo: 'Rotación de Activos',
      descripcion: 'El ratio de rotación de activos mide la eficiencia de una empresa en el uso de sus activos para generar ingresos.',
      img: 'https://cdn-icons-png.flaticon.com/512/3580/3580189.png',
    },
    {
      titulo: 'Margen de Beneficio Neto',
      descripcion: 'El margen de beneficio neto calcula el porcentaje de ingresos que una empresa retiene como ganancias después de todos los gastos.',
      img: 'https://cdn-icons-png.flaticon.com/512/4002/4002729.png',
    },
  ];

  const styles = {
    container: {
      backgroundImage: "url('https://www.microsoft.com/en-us/research/uploads/prod/2019/04/msft_building_bg-1-2400x1200.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '50px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      textAlign: 'center',
    },
    title: {
      fontSize: '3.5rem',
      color: '#644BDB',
      marginBottom: '20px',
    },
    subtitle: {
      fontSize: '1.5rem',
      marginBottom: '40px',
      color: '#644BDB',
      
    },
    cardContainer: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '20px',
      width: '250px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
      transition: 'transform 0.3s',
    },
    cardImage: {
      width: '100px',
      height: '100px',
      objectFit: 'contain',
      marginBottom: '15px',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#76A5DC',
    },
    cardDescription: {
      fontSize: '1rem',
      color: '#555',
    },
    cardHover: {
      transform: 'scale(1.05)',
    },
  };

  return (
    <div style={styles.container}>
      <Typography
        variant="h2"
        color="blue-gray"
        className="!text-2xl !leading-snug lg:!text-3xl "
      >
        Bienvenido a Microsoft
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 max-w-lg !font-normal !text-gray-500 mb-14"
      >
        We&apos;re constantly trying to express ourselves and actualize our
        dreams. If you have the opportunity to play this game of life you need
        to appreciate every moment.
      </Typography>
      <div style={styles.cardContainer}>
        {definiciones.map((definicion, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseOver={(e) => e.currentTarget.style.transform = styles.cardHover.transform}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div className='flex items-center justify-center'>
              <img src={definicion.img} alt={definicion.titulo} style={styles.cardImage} />
            </div>
            <h2 style={styles.cardTitle}>{definicion.titulo}</h2>
            <p style={styles.cardDescription}>{definicion.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
