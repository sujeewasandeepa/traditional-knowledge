import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Home from './routes/Home';
import SignUp from './routes/SignUp';
import LogIn from './routes/LogIn';
import About from "./routes/About";

export default createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <LogIn/>
      },
      {
        path: "/signup",
        element: <SignUp/>
      },
      {
        path: "/about",
        element: <About/>
      } 
    ]
  }
])
