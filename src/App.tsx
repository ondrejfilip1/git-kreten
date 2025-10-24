import './App.css'
import Home from './pages/Home/Home'
import Article from './pages/Article'
import CookieClicker from "./components/CookieClicker"

function App() {

  return (
    <>
    <Home/>
    <Home></Home>
    <Article heading="neco2" content="obsah2" />
    <Article heading="neco" content="obsah"></Article>
      <h1>Hello World!</h1>
      <CookieClicker></CookieClicker>
    </>
  )
}

export default App
