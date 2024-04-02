import { Route,Routes ,BrowserRouter,Navigate} from "react-router-dom"
import GlobalStyles from "../Styles/GlobalStyles"
import AppLayout from "../ui/AppLayout"
// import PageNotFound from "../pages/PageNotFound"
import { RouterData } from "../data/RouterData"
import '../Styles/index.css'

//presentational component pure
const getRoutes=()=>{
  return RouterData.map((item,index)=>{
    if(item.layout==="/labs")
    if(!item?.submenu){
      return <Route key={index} path={item.layout+item.path} element={item?.component}/>
    }
  })
}



function App() {
  return (
    <>
    <GlobalStyles/>
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout/>}>
      <Route index element={<Navigate replace to="labs/dashboard"/>}/>
        {/* children routes */}
       {getRoutes()}
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
