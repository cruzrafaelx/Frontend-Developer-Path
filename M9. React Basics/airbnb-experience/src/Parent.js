import Navbar from './Components/Navbar';
import Hero from './Components/Hero'
import Card from './Components/Card';
import Data from './Data'

const cards = Data.map(card => {
  return (
    <Card
      key={card.id}
      item={card}
    />
  )
})

console.log(cards)
export default function Parent() {
  return (
    <div className="parent">
        <Navbar />
        <Hero />
        <section className='cards-list'>
          {cards}
        </section>
        
    </div>
  );
}


