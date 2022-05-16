import Button from './components/Button';

const App = () => {
  return (
    <div>
      <section className="container">
        <h1>Components</h1>
      </section>
      <section className="container">
        <h2>Buttons</h2>
        <h3>Variants</h3>
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
        <h3>Sizes</h3>
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
