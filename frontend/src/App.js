import logo from './logo.svg';
import './App.css';
import Main from "./Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import BoardList from "./BoardList";
import NoPage from "./NoPage";
import BoardDetail from "./BoardDetail";
import BoardWrite from "./BoardWrite";
import Layout from "./Layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path={"board"} element={<BoardList />} />
                    <Route path={"boardDetail/:boardIdx"} element={<BoardDetail />} />
                    <Route path={"boardWrite"} element={<BoardWrite />} />
                    <Route path={"*"} element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
