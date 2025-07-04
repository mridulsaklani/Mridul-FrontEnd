
import './globals.css';

import ReduxProvider from "@/Store/ReduxProvider";
import { Nunito } from 'next/font/google';
import AnimatedCursor from "react-animated-cursor"
import 'aos/dist/aos.css';
import AOSInit from '@/components/AOSInit';





const  nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], 
});

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      
    
      <body
        className={`${nunito.className} antialiased text-slate-500 bg-slate-900`}
        style={{ fontFamily: 'Nunito' }}
      >
        <ReduxProvider>
        <AOSInit/>
    
      
        
            <AnimatedCursor
              innerSize={0}
              outerSize={10}
              color="37, 99, 235"
              outerAlpha={0.4}
              innerScale={1.2}
              outerScale={2}
            />
        
        {children}
       
        
        
        </ReduxProvider>

      </body>
      
    </html>
  );
}
