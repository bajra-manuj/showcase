import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddressBook from './pages/AddressBook';
import Projects from './components/Projects';
import { ProjectProp } from './global/types';

const projects: ProjectProp[] = [
  {
    name: 'AddressBook',
    description:
      'An AddressBook written in bash with features for adding, searching, editing and removing contacts.',
    tags: ['bash', 'linux', 'git'],
    link: 'https://git.bajratechnologies.com/bajra-manuj/address-book',
    to: 'address-book',
  },
  {
    name: 'Figma-Assignment',
    description:
      'Final asssignment of the web basics section based on the figma design provided.',
    tags: ['html', 'css', 'bootstrap', 'figma'],
    link: 'https://github.com/bajra-manuj/figma-assignment',
    to: 'https://bajra-manuj.github.io/figma-assignment/',
  },
];
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/showcase" element={<Home />}>
          <Route index element={<Projects projects={projects} />} />
          <Route path="address-book" element={<AddressBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
