import {BrowserRouter,Route, Routes} from "react-router-dom";
import DashboardPage from "./pages/dashboard/DashboardPage.jsx";
const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<DashboardPage/>}/>
            </Routes>
        </BrowserRouter>
    )
};
export default App;