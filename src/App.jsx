import { Route,Routes ,BrowserRouter} from "react-router-dom"
import GlobalStyles from "../Styles/GlobalStyles"
import AppLayout from "../ui/AppLayout"
// import { RouterData } from "../data/RouterData"
import Dashboard from "../pages/Dashboard"

//presentational component pure
// const getRoutes=()=>{
//   return RouterData.map((item,index)=>{
//     if(item.layout==="/labs")
//     if(!item?.submenu){
//       return <Route key={index} path={item.layout+item.path} element={item?.component}/>
//     }
//   })
// }



function App() {
  return (
    <>
    <GlobalStyles/>
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout/>}>
      {/* <Route index element={<Navigate replace to="labs/dashboard"/>}/> */}
      <Route path={"/"} element={<Dashboard/>}/>
        {/* children routes */}
       {/* {getRoutes()} */}
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
