import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddressBook from './pages/AddressBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="address-book" element={<AddressBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
