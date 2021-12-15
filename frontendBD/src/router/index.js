import UserPage from "../pages/UserPage"
import RegisterPage from "../pages/RegisterPage";
import AdminPanel from "../pages/AdminPanel"
import Error from "../pages/Error";
import Profile from "../pages/Profile"


export const publicRoutes = [
    {path:'/registerpage',component:RegisterPage,exact:true},
    {path:'/error',component:Error,exact:true}
]
export const privateRoutes = [
    {path:'/userpage',component:UserPage,exact:true},
    {path:'/error',component:Error,exact:true},
    {path:'/profile',component:Profile,exact:true},
    {path:'/admin',component:AdminPanel,exact:true}
    ]
export const adminRoutes = [
    {path:'/userpage',component:UserPage,exact:true},
    {path:'/error',component:Error,exact:true},
    {path:'/admin',component:AdminPanel,exact:true},
    {path:'/profile',component:Profile,exact:true}
]