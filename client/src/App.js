import './App.css';
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Home from './Home';
import Checkout from './Checkout';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';
import DetailProductsPage from './DetailProductsPage';
function App() {
  const[{user}, dispatch] =useStateValue()
  //need a piece of code based on a condtion which is useEffect
  useEffect(()=>{
    const unsub =auth.onAuthStateChanged((authUser)=>{
      if(authUser){
          dispatch({
            type: "SET_USER",
            user:authUser
          })
      }
      else{
            dispatch({
              type:"SET_USER",
              user:null
            })
      }
    })
    return ()=>{
      unsub()
    }
  }, [])
  console.log(user)
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path= "/product/:productId">
              <DetailProductsPage/>
            </Route>
            <Route path="/checkout"> 
            <Header/>
              <Checkout/>
            </Route>
            <Route path="/login"> 
              <Login/>
            </Route>
            <Route path="/favorite" >
              <Header/>
            </Route>
           
            <Route path="/" >
              <Header/>
              <Home/>
            </Route>
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
