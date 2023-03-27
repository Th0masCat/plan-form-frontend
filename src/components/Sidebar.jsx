import sideBarImage from '../assets/bg-sidebar-desktop.svg'
import SidebarText from './SidebarText';

function Sidebar(props) {
    return (
        <div className='position-relative'>
            <img src={sideBarImage} alt="sideBar" className="img-fluid"/>
            <div className='position-absolute ps-5 pt-5 top-0 text-white'>
                <SidebarText text="Your Info" number="1" path="/"/>
                <SidebarText text="Select Plan" number="2" path="/plan"/>
                <SidebarText text="Add-ons" number="3" path="/addons"/>
                <SidebarText text="Summary" number="4" path="summary"/>
            </div>
        </div>
    );
}

export default Sidebar;

