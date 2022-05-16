import Button from './components/Button';
import Title from './components/Title';

const App = () => {
  return (
    <section className="container min-h-screen flex flex-col items-center justify-center">
      <Title className="mb-6" variant="h1">
        Components
      </Title>
      <Title className="mb-6">Buttons</Title>
      <Title className="mb-6" variant="h4">
        Variants
      </Title>
      <div className="mb-6">
        <Button className="mr-4" onClick={() => alert('Regular button')}>
          Regular
        </Button>
        <Button
          className="mr-4"
          onClick={() => alert('Outlined button')}
          variant="outlined"
        >
          Outlined
        </Button>
        <Button onClick={() => alert('Contained button')} variant="contained">
          Contained
        </Button>
      </div>
      <Title className="mb-6" variant="h4">
        Sizes
      </Title>
      <div className="flex items-center">
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
  );
};

export default App;
