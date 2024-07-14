import './App.css';
import { Header } from './components/header/Header.jsx';
import { MainContend } from './components/mainContend/MainContend.jsx';
import { Footer } from './components/footer/Footer.jsx';

export function App() {
  return (
    <>
      <Header />
      <MainContend />
      <Footer />
    </>
  );
}

export default App;
