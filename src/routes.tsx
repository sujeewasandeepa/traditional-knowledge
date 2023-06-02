import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Home from './routes/Home';

export default createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      }
    ]
  }
])
