
import './App.css';
import SearchPhotos from './SearchPhotos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faArrowUp} from '@fortawesome/free-solid-svg-icons'
import ScrollToTop from "react-scroll-to-top"

function App() {
  return (
    <div className="App">
      <div className='container'>

      
        <h1 className='title'><FontAwesomeIcon icon={faImage} size="lg"/>  Unsplash React Gallery</h1>
        <SearchPhotos/>
      </div>
      
      <ScrollToTop  smooth />

    </div>
  );
}

export default App;
