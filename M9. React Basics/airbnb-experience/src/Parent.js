import Navbar from './Components/Navbar';
import Hero from './Components/Hero'
import Card from './Components/Card';

export default function Parent() {
  return (
    <div className="parent">
        <Navbar />
        <Hero />
        <Card />
    </div>
  );
}


