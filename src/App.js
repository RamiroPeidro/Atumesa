import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header/Header';
import Hero from './components/common/Hero/Hero';
import Tarifas from './components/common/Tarifas/Tarifas';
import Hero2 from './components/common/Hero2/Hero2'
import Empresas from './components/common/Empresas/Empresas';
import Stats from './components/common/Stats/Stats';

export default function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Hero2></Hero2>
      {/* <Empresas></Empresas> */}
      <Stats></Stats>
      <Tarifas></Tarifas>
    </div>
  )
}