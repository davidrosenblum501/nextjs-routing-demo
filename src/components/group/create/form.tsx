import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const GroupCreateForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Group Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(evt) => setName(evt.target.value)}
          placeholder='Group name'
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Group Description</Form.Label>
        <Form.Control
          value={description}
          onChange={(evt) => setDescription(evt.target.value)}
          placeholder='Group description'
          required
        />
      </Form.Group>
      <div>
        <Button type='submit'>
          Submit
        </Button>
      </div>
      <Alert
        dismissible
        variant='danger'
        show={showAlert}
        onClose={() => setShowAlert(false)}
      >
        This feature is not implemented.
      </Alert>
    </Form>
  );
};

export default GroupCreateForm;