import React from 'react'
import { Route } from "react-router-dom"
import Home from './home/Home'
import Shifokorlar from './shifokorlar/Shifokorlar'
import Bulimlar from "./bo'limlar/Bulimlar"
import Yangiliklar from './yangiliklar/Yangiliklar'
import Ish from './ish/Ish'
import Qvp from './qvp/Qvp'
import Aloqa from './aloqa/Aloqa'


const Router = () => {
    return (
        <div>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/sh">
                <Shifokorlar/>
            </Route>
            <Route exact path="/b">
                <Bulimlar/>
            </Route>
            <Route exact path="/y">
                <Yangiliklar/>
            </Route>
            <Route exact path="/bu">
                <Ish/>
            </Route>
            <Route exact path="/qvp">
                <Qvp/>
            </Route>
            <Route exact path="/a">
                <Aloqa/>
            </Route>
        </div>
    )
}

export default Router