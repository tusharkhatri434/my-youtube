import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Demo from './components/Demo';
import SearchResult from './components/SearchResult';
import ErrorPage from './components/ErrorPage';
const appRouter = createBrowserRouter([{

  path:"/",
  element:<Youtube />,
  errorElement:<ErrorPage />,
  children:[
    {
    path:"/",
    element:<MainContainer />,
   },
   {
    path:"/watch",
    element:<WatchPage />,
   },
   {
    path:"/demo",
    element:<Demo />,
   },
   {
    path:"/search",
    element:<SearchResult />,
   },
]}]);

function Youtube () {
  return (
    <>
    <Provider store={store}>
      <Header />
      <Body />
    </Provider>
    </>
  );
}
function App() {
  return (
   <RouterProvider router={appRouter} ></RouterProvider>
  );
}

export default App;
