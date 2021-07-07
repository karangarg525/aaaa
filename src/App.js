import logo from './logo.svg';
import './App.css';
import * as a from 'axios'
const axios = a.default
function App() {

  const getClicked = async (method) => {
    try {
      if (method == 'get') {
        let response = await axios.get('https://google.co.in', { params: {}, headers: {} })
        console.log(response.data)
      } else {
        let response = await axios.post('https://google.co.in', {}, { params: {}, headers: {} })
        console.log(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Garg MC h !!!!!</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <div className="row">
            <button type="button" onClick={e => { getClicked('get') }} class="btn btn-primary">GET</button>
          </div>
          <div className="row mt-2">
            <button type="button" onClick={e => { getClicked('post') }} class="btn btn-primary">POST</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
