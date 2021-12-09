import { Container } from 'react-bootstrap';
import CarouselSelect, { CarouselProps } from '../components/CarouselSelect';

function Games() {
  const carousel: CarouselProps = {
    items: ['Cricket', '301 (Does not work yet)']
  };

  return (
    <Container>
      <h1 className="text-center">Select Game</h1>
      <CarouselSelect items={carousel.items} />
    </Container>
  )
}

export default Games;
