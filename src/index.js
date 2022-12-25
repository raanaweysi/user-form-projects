import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import App from './component/functional/app';
import App from './component/functional/app';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
<App/>
</BrowserRouter> ,document.getElementById('root')); 