import Image from './Image';
import About from './About';
import Footer from './Footer'
import Header from './Header'
import '../Parent.css'

export default function Parent(){
      return(
            <div className='Parent'>
                  <Image />
                  <Header />
                  <About />
                  <Footer /> 
            </div>
      )
}