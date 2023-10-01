import { Outlet } from "react-router-dom"


const Popup = () => {
    return (
        <>
            <div className="text-3xl text-bold text-black">Hey this is my Popup</div>
            <Outlet />
        </>
    )
}

export default Popup