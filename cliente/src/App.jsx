import {BrowserRouter, Routes,Route, Navigate} from 'react-router-dom'
import { proyectosPage as ProyectosPage } from './pages/proyectosPage'
import { formProyectoPage as FormProyectoPage} from './pages/formProyectosPage'
import {Navigation} from './components/Navigation'
/*este import es importante para la estetica */
import {Toaster} from 'react-hot-toast'
/* nota
Tuve problemas al principio del todo, al probar la funcion proyectosPage ocurrio un problema tecnico
ya que no me dejaba utilizar el nombre de la funcion importada directamente en el element, como que no la reconocia
por lo tanto tuve que cambiarle de nombre y empezo a reconocerla, el tutorial por el que me guie no necesitó hacer esto
actualizacion:
  el problema de debe a que hay una convencion de que los componentes se llamen en mayusculas y los html en minusculas
*/
function App() {
    return (
      <BrowserRouter>
        <div className="container mx-auto">
        <Navigation/>
          <Routes>
            <Route path="/" element={<Navigate to="/proyectos"/> }/>
            <Route path="/proyectos" element={<ProyectosPage/> }/>
            <Route path="/crear-proyecto" element={<FormProyectoPage/> }/>
            <Route path="/proyectos/:id" element={<FormProyectoPage/> }/>

          </Routes>
          <Toaster/>
        </div>
      </BrowserRouter>
    )
  }


export default App
