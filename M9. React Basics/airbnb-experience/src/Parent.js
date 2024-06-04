import Navbar from './Components/Navbar';
import Hero from './Components/Hero'
import Card from './Components/Card';

export default function Parent() {
  return (
    <div className="parent">
        <Navbar />
        <Hero />
        <Card
          status="Sold Out"
          rating={5.0}
          count={6}
          location="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
    </div>
  );
}


