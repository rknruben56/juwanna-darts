import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import styled from '@emotion/styled';

let StyledItem = styled.div`
  padding: 5em;
`

export interface CarouselProps {
  items: string[];
  onSelect?: (item: string) => void;
}

function CarouselSelect({ items, onSelect }: CarouselProps) {
  return (
    <>
      <Carousel variant="dark" interval={200000}>
        {items.map((item, i) =>
          <Carousel.Item key={i} className="text-center">
            <StyledItem>
              <h2>{item}</h2>
            </StyledItem>
          </Carousel.Item>
        )}
      </Carousel>
      <Row className="p-5">
        <Button variant="primary" size="lg">Select</Button>
      </Row>
    </>
  );
}

export default CarouselSelect;
