import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
    return (
        // 리액트 라우터는 url을 가져와 비교 매치후 렌더링
        // Link를 사용하려면 router 필요
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie-detail" component={Detail} />
        </HashRouter>
    );
}

export default App;