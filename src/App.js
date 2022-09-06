import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Grocery from './components/Grocery';
import Pet from './components/Pet';
import Hardware from './components/Hardware';
import Add from './components/Add';
import Edit from './components/Edit';
import Delete from './components/Delete';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect to Grocery */}
        <Route
          path="/"
          element={ <Navigate to="/grocery-store" /> } >
        </Route>
        {/* Grocery */}
        <Route
          path="/grocery-store"
          element={ <Grocery /> } >
        </Route>
        {/* Pet */}
        <Route
          path="/pet-store"
          element={ <Pet/> } >
        </Route>
        {/* Hardware */}
        <Route
          path="/hardware-store"
          element={<Hardware/>}>
        </Route>
        <Route
          path="/add-item"
          element={<Add/>}>
        </Route>
        <Route
          path="/edit/:id"
          element={<Edit/>}>
        </Route>
        <Route
          path="/delete/:id"
          element={<Delete/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



