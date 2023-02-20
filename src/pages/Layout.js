import { Outlet } from "react-router-dom/dist"

import Header from "./Header" 
import { Footer } from "./Footer"
const Layout = () =>{
    return(
        <>
            <main className="flex-shrink-0">
                <Header />
                <Outlet />
                <Footer />
            </main>
        </>
        )
}
export default Layout;