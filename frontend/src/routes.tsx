import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductRegister from './pages/ProductRegister'
import Products from './pages/Products'
import UserRegister from './pages/UserRegister'
import Users from './pages/Users'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/home" exact component={Home} />
    <Route path="/users" exact component={Users} />
    <Route path="/users/add" exact component={UserRegister} />
    <Route path="/products" exact component={Products} />
    <Route path="/products/add" exact component={ProductRegister} />
  </Switch>
)

export default Routes
