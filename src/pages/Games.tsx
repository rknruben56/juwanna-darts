import { Container } from 'react-bootstrap';
import FormSelect from '../components/FormSelect';
// import CarouselSelect from '../components/CarouselSelect';

function Games() {
  const items = ['Gotcha', 'Cricket'];

  const onSelect = (item: string) => {
    console.log(item);
    // TODO: save game type and move to player select
  };

  return (
    <Container>
      <h1 className="text-center">Select Game</h1>
      <FormSelect items={items} onSelect={onSelect} />
      {/* <CarouselSelect items={items} onSelect={onSelect} /> */}
    </Container>
  )
}

export default Games;
