import { Outlet } from "react-router-dom";
import Header from "./dummy/Header/Header";

function Layout (){
    return (
        <main>
            <Header/>
            <Outlet/>
        </main>
    )
}
export default Layout;