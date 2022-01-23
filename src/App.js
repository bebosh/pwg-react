import './App.css';
import Module from './Module';
import 'bulma/css/bulma.min.css';
function App() {
  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="box column is-one-third">  
            <h1 className='title has-text-centered'>Password generator</h1> 
              <Module />
        </div>
      </div>
    </div>
    
  );
}

export default App;
