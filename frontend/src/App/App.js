// import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav } from "../components/navComponents/Nav.js";
import { ServiceList } from "../components/ServiceList.js";
import { Footer } from "../components/footer/Footer.js";
import { Events } from "../features/events/Events";
import { Subscribe } from "../features/subscribe/Subscribe";
import { NewsList } from "../features/news/NewsList";
import { AboutUs } from "../components/navComponents/AboutUs";
import { FullNews } from "../features/news/FullNews";
import { Event } from "../features/events/Event";
import { ContactUs } from "../components/navComponents/ContactUs";
import { useState } from "react";
// import { Language } from "../components/Language";
import { Service } from "../components/Service";
import { Newsletters } from "../components/footer/Newsletters";
import { HomeSlider } from "../components/slider/HomeSlider.js";
// import { Fetch } from "../components/Fetch";

function App() {
  const [language, setLanguage] = useState("mon");
  // const MonLang = createContext();

  return (
    // <MonLang.Provider value={language}>
    <Router>
      <Switch>
        <div
          className="App"
          style={{ backgroundColor: "rgba(247, 248, 252, 1)" }}
        >
          {/* <div className="container-fluid mx-auto h-100"> */}
          <Nav language={language} setLanguage={setLanguage} />
          <Route path="/" exact>
            <HomeSlider language={language} />
            <ServiceList language={language} />
            <NewsList language={language} />
            <Events language={language} />
            <Subscribe language={language} />
            <Footer language={language} />
          </Route>
          {/* </div> */}
          <Route
            path={"/aboutus"}
            render={(prop) => <AboutUs language={language} />}
          ></Route>
          <Route
            path={"/news"}
            exact
            render={(prop) => <NewsList language={language} />}
          ></Route>
          <Route
            path={"/news/:id"}
            render={(prop) => <FullNews language={language} />}
          ></Route>
          <Route
            path={"/events"}
            exact
            render={(prop) => <Events language={language} />}
          ></Route>
          <Route
            path={"/events/:id"}
            render={(prop) => <Event language={language} />}
          ></Route>
          {/* <Route path="/album" component={Resources}>
              
            </Route> */}
          {/* <Route path="/donate" component={Donate}>
              
            </Route> */}
          {/* <Route path="/volunteer" component={Volunteer}>
              
            </Route> */}
          <Route
            path={"/contactus"}
            render={(prop) => <ContactUs language={language} />}
          ></Route>
          <Route
            path={"/services"}
            exact
            render={(prop) => <ServiceList language={language} />}
          ></Route>
          <Route
            path={"/services/:id"}
            render={(prop) => <Service language={language} />}
          ></Route>
          <Route
            path={"/newsletters"}
            exact
            render={(prop) => <Newsletters language={language} />}
          ></Route>
        </div>
      </Switch>
    </Router>
    // </MonLang.Provider>
  );
}

export default App;
