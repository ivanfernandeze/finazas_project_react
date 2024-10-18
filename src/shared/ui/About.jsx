
function About() {
  const integrantes = [
    { nombre: 'Daniel Armas Abad', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { nombre: 'Ivan Fernandez Ezquerre', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { nombre: 'Deysi Quiliche Plasencia', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { nombre: 'Kevin Rivas Verastegui', img: 'https://randomuser.me/api/portraits/men/76.jpg' },
    { nombre: 'Elmo Tirado Ruiz', img: 'https://randomuser.me/api/portraits/men/78.jpg' }
  ];

  const styles = {
    container: {
      backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/diagonal_striped_brick.png')",
      backgroundSize: 'cover',
      minHeight: '100vh',
      padding: '50px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: '3rem',
      color: '#644BDB',
      marginBottom: '30px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
    },
    cardContainer: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '20px',
      width: '200px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      transition: 'transform 0.3s',
    },
    cardImage: {
      borderRadius: '50%',
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      marginBottom: '15px'
    },
    cardName: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#333',
    },
    cardHover: {
      transform: 'scale(1.05)',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Integrantes del Equipo</h1>
      <div style={styles.cardContainer}>
        {integrantes.map((integrante, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseOver={(e) => e.currentTarget.style.transform = styles.cardHover.transform}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={integrante.img} alt={integrante.nombre} style={styles.cardImage} />
            <p style={styles.cardName}>{integrante.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
