import "@/styles/globals.css";
//Internal Import

import { NavBar,Footer } from "@/components/componentsindex";
const MyApp = ({ Component, pageProps }) =>(
    <div>
        <NavBar/>
        <Footer/>
        <Component {...pageProps} />
    </div>
);

export default MyApp;