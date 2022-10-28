import Card from 'react-bootstrap/Card';

export const PeliculasCard = ( {pelicula} ) => {

    const imgUrl = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path;
    return (
        <>
        <Card style={{ width: '18rem' }} className="m-4">
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{pelicula.title}</Card.Title>
      </Card.Body>
    </Card>
      
        </>
    );
}