import { useState } from 'react';

import Button from './components/Button';
import Card from './components/Card';
import Container from './components/Container';
import Modal from './components/Modal';
import Title from './components/Title';

const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <section>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Title className="mb-4">Modal</Title>
        <Button variant="contained" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal>
      <Container className="min-h-screen flex flex-col items-center justify-center">
        <Title className="mb-6" variant="h1">
          Components
        </Title>
        <section className="text-center mb-6">
          <Title className="mb-6">Buttons</Title>
          <div className="flex items-center justify-center">
            <Card className="mr-8">
              <Title className="mb-6" variant="h4">
                Variants
              </Title>
              <div>
                <Button
                  className="mr-4"
                  onClick={() => alert('Regular button')}
                >
                  Regular
                </Button>
                <Button
                  className="mr-4"
                  onClick={() => alert('Outlined button')}
                  variant="outlined"
                >
                  Outlined
                </Button>
                <Button
                  onClick={() => alert('Contained button')}
                  variant="contained"
                >
                  Contained
                </Button>
              </div>
            </Card>
            <Card>
              <Title className="mb-6" variant="h4">
                Sizes
              </Title>
              <div>
                <Button
                  className="mr-4"
                  onClick={() => alert('Small button')}
                  size="small"
                  variant="outlined"
                >
                  Small
                </Button>
                <Button
                  className="mr-4"
                  onClick={() => alert('Medium button')}
                  variant="outlined"
                >
                  Medium
                </Button>
                <Button
                  onClick={() => alert('Large button')}
                  size="large"
                  variant="outlined"
                >
                  Large
                </Button>
              </div>
            </Card>
          </div>
        </section>
        <section>
          <Title className="mb-6">Modal</Title>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Open modal
          </Button>
        </section>
      </Container>
    </section>
  );
};

export default App;
