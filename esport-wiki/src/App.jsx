
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';

function App() {
  

    const router = createBrowserRouter([
      {
        path: '/',
        element: <Home/>
      }, 
      {
        path: '/profile', 
        element: <Profile/>
      }
      

      
    ]);

    return (
      <div className='App'>
          <RouterProvider router={router} />
      </div>
  );
  
}

export default App
