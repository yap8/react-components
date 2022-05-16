import Button from './components/Button';
import Title from './components/Title';

const App = () => {
  return (
    <div>
      <section className="container">
        <Title variant="h1">Components</Title>
      </section>
      <section className="container">
        <Title>Buttons</Title>
        <Title variant="h3">Variants</Title>
        <div>
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
        <Title variant="h3">Sizes</Title>
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
    </div>
  );
};

export default App;
