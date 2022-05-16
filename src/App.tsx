import Button from './components/Button';
import Container from './components/Container';
import Title from './components/Title';

const App = () => {
  return (
    <section>
      <Container className="min-h-screen flex flex-col items-center justify-center">
        <Title className="mb-6" variant="h1">
          Components
        </Title>
        <section className="text-center">
          <Title className="mb-6">Buttons</Title>
          <div className="flex items-center justify-center">
            <section className="mr-8 border shadow p-4">
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
            </section>
            <section className="mr-8 border shadow p-4">
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
            </section>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default App;
