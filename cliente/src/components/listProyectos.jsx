import { useEffect, useState } from "react";
import {getAllProyectos} from '../api/proyectos.api'
import {ProyectoCard} from './ProyectoCard'

export function ProyectosList() {
    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        async function loadProyectos(){
            const res = await getAllProyectos();
            setProyectos(res.data)
        }
        loadProyectos();
    }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
        {proyectos.map(proyecto => (
            <ProyectoCard key={proyecto.id} proyecto={proyecto}/>
        ))}
    </div>
    );
  
}