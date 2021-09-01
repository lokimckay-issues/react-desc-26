import { AnchorWithSchema } from './Anchor';
import './App.css';

function App() {
  const documentation = AnchorWithSchema.toJSON();
  console.log(documentation)
  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
