import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//import the developer created component
import newsReducer from "../features/news/newsSlice";
import fullNewsReducer from "../features/news/newsByIdSlice";
import serviceReducer from "../features/services/servicesSlice";
import footerReducer from "../features/footer/footerSlice";
import eventsReducer from "../features/events/eventsSlice";
import subscribeReducer from "../features/subscribe/subscribesSlice";
import eventByIdRecucer from "../features/events/eventByIdSlice";

//combining reducer
const rootReducer = combineReducers({
  news: newsReducer, //calling the reducer file
  fullNews: fullNewsReducer,
  events: eventsReducer,
  services: serviceReducer,
  footer: footerReducer,
  events: eventsReducer,
  subscribe: subscribeReducer,
  eventById: eventByIdRecucer,
});

// console.log("reducer", newsReducer);
//create middleware
const middleware = composeWithDevTools(applyMiddleware(thunk));

//creating store
export const store = createStore(rootReducer, middleware);
