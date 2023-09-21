'use client';
import Navbar from './components/navbar/navbar';
import Movies from './components/getMovies';
import Footer from './components/Footer/footer';
export default function Home() {
  return (
    <main>
      <div>
      <Navbar/>
    <Movies/>
    <Footer/>
      </div>
    </main>
  )
}