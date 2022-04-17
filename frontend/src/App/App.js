import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav } from "../componentsEng/navComponents/Nav.js";
// import { Header } from "../componentsEng/Header.js";
import { ServiceList } from "../componentsEng/ServiceList.js";
import { Footer } from "../componentsEng/Footer.js";
import { Events } from "../features/events/Events";
import { Subscribe } from "../features/subscribe/Subscribe";
import { NewsList } from "../features/news/NewsList";
import { AboutUs } from "../componentsEng/navComponents/AboutUs";
import { FullNews } from "../features/news/FullNews";
import { Event } from "../features/events/Event";
import { ContactUs } from "../componentsEng/navComponents/ContactUs";
import { Swipe } from "../componentsEng/slider/Swipe";
import { createContext, useState } from "react";
// import { Language } from "../componentsEng/Language";
import { Service } from "../componentsEng/Service";
// import { Fetch } from "../componentsEng/Fetch";

function App() {
  const [language, setLanguage] = useState("mon");
  const MonLang = createContext();

  return (
    <MonLang.Provider value={language}>
      <Router>
        <Switch>
          <div
            className="App"
            style={{ backgroundColor: "rgba(247, 248, 252, 1)" }}
          >
            <div className="container-fluid mx-auto h-100">
              <Nav language={language} setLanguage={setLanguage} />
              <Route path="/" exact>
                {/* <Header /> */}
                <Swipe language={language} />
                <ServiceList language={language} />
                <NewsList language={language} />
                <Events language={language} />
                <Subscribe language={language} />
                <Footer language={language} />
              </Route>

              <Route
                path={language === "mon" ? "/биднийтухай" : "/aboutus"}
                render={(prop) => <AboutUs language={language} />}
              ></Route>
              <Route
                path={language === "mon" ? "/мэдээ" : "/news"}
                exact
                render={(prop) => <NewsList language={language} />}
              ></Route>
              <Route
                path={language === "mon" ? "/мэдээ/:id" : "/news/:id"}
                render={(prop) => <FullNews language={language} />}
              ></Route>
              <Route
                path={language === "mon" ? "/үйлажиллагаа" : "/events"}
                exact
                render={(prop) => <Events language={language} />}
              ></Route>
              <Route
                path={language === "mon" ? "/үйлажиллагаа/:id" : "/events/:id"}
                render={(prop) => <Event language={language} />}
              ></Route>
              {/* <Route path="/resources" component={Resources}>
              
            </Route> */}
              {/* <Route path="/donate" component={Donate}>
              
            </Route> */}
              {/* <Route path="/volunteer" component={Volunteer}>
              
            </Route> */}
              <Route
                path={language === "mon" ? "/холбообарих" : "/contactus"}
                render={(prop) => <ContactUs language={language} />}
              ></Route>
              <Route
                path={language === "mon" ? "/сервис/:name" : "/service/:name"}
                render={(prop) => <Service language={language} />}
              ></Route>
            </div>
          </div>
        </Switch>
      </Router>
    </MonLang.Provider>
  );
}

export default App;
