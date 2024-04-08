import {useNavigate} from 'react-router-dom'

export function ProyectoCard({proyecto}) {
    const navigate = useNavigate()

    return (
        <div
            className="bg-zinc-800 p-3 hover:bg-zinc-700
            hover:cursor-pointer"
            onClick={()=>{
                navigate(`/proyectos/${proyecto.id}`);
            }}
        >
            <h1 className='font-bold uppercase'>{proyecto.titulo}</h1>
            <p className='text-slate-400'>{proyecto.descripcion}</p>
        </div>
  );
}

