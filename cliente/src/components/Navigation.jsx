import {Link} from 'react-router-dom'
export function Navigation() {
  return (
    <div className='flex justify-between py-3'>
        <Link to="/proyectos">
            <h1 className='font-bold text-3xl mb-4'>Proyectos App</h1>
        </Link>
        <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
          <Link to="/crear-proyecto">Crear Proyectos</Link>
        </button>
    </div>
  );
}
