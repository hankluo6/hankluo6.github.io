import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to My GitHub Page!</h1>
        <p>This is my awesome React application deployed on GitHub Pages.</p>
        <MyComponent /> {/* You can add or modify components here */}
      </div>
    );
  }
}

export default App;
