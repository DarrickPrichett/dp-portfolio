import React, {useState} from 'react'
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from '../src/components/pages/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'projects',
      description: 'My Projects',
    },
    { name: 'resume', description: 'My Resume' },
      ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div className="App">
     <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
