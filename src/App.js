import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import MainScreen from "./components/mainScreen/MainScreen";
import ChartScreen from "./components/chartScreen/ChartScreen";
import { AppProvider } from "./service/categoryService.tsx";

function App() {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Expense Planner</h1>
                <Navbar/>
                <div>
                    <Route path='/home' component={MainScreen} />
                    <Route path='/charts' component={ChartScreen} />
                </div>
            </div>
        </AppProvider>
    );
}


export default App;
