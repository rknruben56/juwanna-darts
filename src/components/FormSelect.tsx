import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { FormEvent } from 'react';

interface FormSelectProps {
  items: string[];
  onSelect: (item: string) => void;
}

function FormSelect({ items, onSelect }: FormSelectProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    onSelect(form.itemSelect.value);
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="itemSelect">
        <Form.Select aria-label="Select item">
          {items.map((item, i) =>
            <option value={item} key={i}>{item}</option>
          )}
        </Form.Select>
      </Form.Group>
      <Form.Group className="text-center">
        <Button variant="primary" type="submit">
          Select
        </Button>
      </Form.Group>
    </Form>
  );
}

export default FormSelect;