import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddressBook from './pages/AddressBook';
import Projects from './components/Projects';

const projects = [
  {
    name: 'AddressBook',
    description:
      'An AddressBook written in bash with features for adding, searching, editing and removing contacts.',
    tags: ['bash', 'linux', 'git'],
    link: 'https://git.bajratechnologies.com/bajra-manuj/address-book',
  },
];
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Projects projects={projects} />} />
          <Route path="address-book" element={<AddressBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
