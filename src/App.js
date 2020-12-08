import Homepage from './Container'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebsiteHeader from './Components/WebsiteHeader';
import WebsiteFooter from './Components/WebsiteFooter';
import Accordion from './Components/Accordion';
function App() {
  return (
    <div className="App">
      <WebsiteHeader/>
      <Accordion/>
      <WebsiteFooter/>
    </div>
  );
}
export default App;
