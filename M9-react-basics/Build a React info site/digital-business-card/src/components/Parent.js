import Image from './Image';
import Main from './Main';
import Footer from './Footer'
import Header from './Header'


export default function Parent(){
      return(
            <div className='parent'>
                  <Image />
                  <Header />
                  <Main />
                  <Footer /> 
            </div>
      )
}