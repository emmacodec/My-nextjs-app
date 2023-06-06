import styles from '../styles/global.css';
import HomePage from './page';

import Nav from '@components/nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "AI-photo-graphics",
    description: "Discover & share AI graphics"
}

const RootLayout = ({Children}) => {
  return (
    <html lang='en'>
     <body>
       <Nav />
        <HomePage />
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
         
            {Children}
        </main>
     </body>
    </html>
  );
};


export default RootLayout;