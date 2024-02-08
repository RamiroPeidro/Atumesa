import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header/Header';
import Hero from './components/common/Hero/Hero';
import Tarifas from './components/common/Tarifas/Tarifas';
import Hero2 from './components/common/Hero2/Hero2'
import Empresas from './components/common/Empresas/Empresas';
import Stats from './components/common/Stats/Stats';
import Footer from './components/common/Footer/Footer';
import { Datas } from './components/common/Datas/Datas';
import { FAQ } from './components/common/FAQ/FAQ';
import NavBar from './components/common/Navbar/Navbar';

export default function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <Hero></Hero>
      <Hero2></Hero2>
      <Stats></Stats>
      <Tarifas></Tarifas>
      {/* <Empresas></Empresas> */}
      <Datas></Datas>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  )
}