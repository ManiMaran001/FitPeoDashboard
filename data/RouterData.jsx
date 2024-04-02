import { VscDashboard } from "react-icons/vsc";
import { LiaProductHunt } from "react-icons/lia";
import { MdPersonOutline } from "react-icons/md";
import { TbDeviceDesktopDollar } from "react-icons/tb";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { LuBadgePercent } from "react-icons/lu";
import Customers from "../pages/Customers"
import Dashboard from "../pages/Dashboard"
import Products from "../pages/Products"
import Income from "../pages/Income"
import Promote from "../pages/Promote"
import Help from "../pages/Help"

export const RouterData=[
    {
        name:'dashboard',
        label:'Dashboard',
        path:'/dashboard',
        component:<Dashboard/>,
        icon: <VscDashboard />,
        children:[],
        layout:'/labs',
        submenu:false
    },
    {
        name:'products',
        label:'Product',
        path:'/product',
        component:<Products/>,
        icon:<LiaProductHunt/>,
        children:[],
        layout:'/labs',
        submenu:false
    },
    {
        name:'customers',
        label:'Customers',
        path:'/customer',
        component:<Customers/>,
        icon:<MdPersonOutline/>,
        children:[],
        layout:'/labs',
        submenu:false
    },
    {
        name:'income',
        label:'Income',
        path:'/income',
        component:<Income/>,
        icon:<TbDeviceDesktopDollar/>,
        children:[],
        layout:'/labs',
        submenu:false
    },
    {
        name:'promote',
        label:'Promote',
        path:'/promote',
        component:<Promote/>,
        icon:<LuBadgePercent/>,
        children:[],
        layout:'/labs',
        submenu:false
    },
    {
        name:'help',
        label:'Help',
        path:'/help',
        component:<Help/>,
        icon:<IoIosHelpCircleOutline/>,
        children:[],
        layout:'/labs',
        submenu:false
    }
]