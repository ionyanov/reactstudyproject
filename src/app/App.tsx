import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "./providers/ThemeProvider/lib/useTheme";
import {classNames} from "../shared/lib/classNames/classNames";
import {AboutPage} from "pages/aboutPage";
import {MainPage} from "pages/mainPage";

const App = () => {
        const {theme, toggleTheme} = useTheme();

        return (
            <div className={classNames("app", {}, [theme])}>
                <nav>
                    <button onClick={toggleTheme}>Сменить тему</button>
                    <Link to={"/"}>Main</Link>
                    <Link to={"/about"}>About</Link>
                </nav>
                <Suspense fallback={<div>Loading..</div>}>
                    <Routes>
                        <Route path={"/"} element={<MainPage/>}/>
                        <Route path={"/about"} element={<AboutPage/>}/>
                    </Routes>
                </Suspense>
            </div>
        );
    }
;

export default App;