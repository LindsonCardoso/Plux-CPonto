import { BrowserRouter} from 'react-router-dom'
import Rotas from "./routes";
import AuthProvider from "./contexts/Auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//css
import './app.css'



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
       <ToastContainer autoClose={3000} position="top-right"/>
          <Rotas/>   
      </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
