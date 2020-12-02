import Homepage from './Container'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebsiteHeader from './Components/WebsiteHeader';
import WebsiteFooter from './Components/WebsiteFooter';
function App() {
  return (
    <div className="App">
      <WebsiteHeader/>
      <Homepage/>
      <WebsiteFooter/>
    </div>
  );
}

export default App;
