import sideBarImage from '../assets/bg-sidebar-desktop.svg'
import SidebarText from './SidebarText';
import { PageContext } from "../context/PageContext";
import { useContext } from "react";

function Sidebar() {

    const {setCurrentPage} = useContext(PageContext);
    return (
        <div className='position-relative'>
            <img src={sideBarImage} alt="sideBar" className="img"/>
            <div className='position-absolute ps-5 pt-5 top-0 text-white'>
                <SidebarText change={()=>{setCurrentPage(1)}} text="Your Info" number="1" path="/"/>
                <SidebarText change={()=>{setCurrentPage(2)}} text="Select Plan" number="2" path="/plan"/>
                <SidebarText change={()=>{setCurrentPage(3)}} text="Add-ons" number="3" path="/addons"/>
                <SidebarText change={()=>{setCurrentPage(4)}} text="Summary" number="4" path="summary"/>
            </div>
        </div>
    );
}

export default Sidebar;

