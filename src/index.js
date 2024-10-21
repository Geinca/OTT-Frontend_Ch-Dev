import {createRoot} from "react-dom/client"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import App from "./App"
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(<BrowserRouter><App/></BrowserRouter>)