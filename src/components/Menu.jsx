import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Menu = () => {
    return (
        <>
            <div className="container ">
                <div className="row mx-0 ">
                    <Header />
                    <aside className="col-md-4 col-sm-6 col-lg-3 d-flex flex-column flex-sm-row">
                        <Sidebar />
                    </aside>

                    <main className="col-lg-9 col-md-8 col-sm-6 d-flex">
                        <Outlet />
                    </main>
                </div>
                <Footer/>
            </div>

        </>
    )
}

export default Menu