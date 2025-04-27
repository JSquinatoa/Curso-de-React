import './App.css'
import SideBar from './components/SideBar'
import Home from './pages/Home'
import Clientes from './pages/Clientes'
import Configuraciones from './pages/Configuraciones'
import Pedidos from './pages/Pedidos'
import Productos from './pages/productos'
import {Routes, Route} from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'
import ListaProductos from './pages/ListaProductos'
import ProductDetail from './pages/ProductDetail'

function App() {


  return (
    <div className='app-container'>
      <SideBar/>

      <div className='main-contain'>
        <Routes>

          <Route path='/' element={<Home/>}/>

          <Route path='/productos' element={<Productos/>}>
            <Route path='lista' element={<ListaProductos/>}/>
            <Route path=':productId' element={<ProductDetail/>}/>
          </Route>

          <Route path='/pedidos' element={<Pedidos/>}/>

          <Route
          path='/clientes' 
          element={
            <ProtectedRoute>
              <Clientes/>
            </ProtectedRoute>
          }
          />

          <Route path='/configuraciones' element={<Configuraciones/>}/>
        </Routes>
      </div>

    </div>
  )
}

export default App
