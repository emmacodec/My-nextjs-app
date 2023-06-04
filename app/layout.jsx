import styles from '../styles/global.css';
import { Children } from 'react';

export const metadata = {
    title: "AI-photo-graphics",
    description: "Discover & share AI graphics"
}

const RootLayout = ({Children}) => {
  return (
    <html lang='en'>
     <body>
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