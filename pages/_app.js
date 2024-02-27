import "@/styles/globals.css";
//Internal Import

import { NavBar } from "@/components/componentsindex";
const MyApp = ({ Component, pageProps }) =>(
    <div>
        <NavBar/>
        Home 
        <Component {...pageProps} />
    </div>
);

export default MyApp;