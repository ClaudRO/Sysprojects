import {useForm} from 'react-hook-form'
import {useEffect} from 'react'
import {crearProyecto, eliminarProyecto, actualizarProyecto, getProyectoById} from '../api/proyectos.api'
import {useNavigate, useParams} from 'react-router-dom'
import {toast} from 'react-hot-toast'
export function formProyectoPage(){
    const { register, handleSubmit, formState:{errors}, setValue } = useForm();

    const navigate = useNavigate()
    const params = useParams()



 const onSubmit = handleSubmit(async data => {
        if (params.id){     
            await actualizarProyecto(params.id,data)
        }else{
            await crearProyecto(data);
            toast.success('Proyecto creado')
        }    
        navigate('/proyectos')
    });
    const vaciarCampos = () => {
        setValue('titulo', ''); // Vaciar campo de título
        setValue('descripcion', ''); // Vaciar campo de descripción
    };
    useEffect(() => {
        if (!params.id) {
            vaciarCampos();
        } else {
            // Cargar proyecto si params.id está definido
            async function cargarProyecto() {
                const res = await getProyectoById(params.id);
                setValue('titulo', res.data.titulo);
                setValue('descripcion', res.data.descripcion);
            }
            cargarProyecto();
        }
    }, [params.id]);
    /*aca params.id es necesario para detectar cambios en el id de la url si este cambio o si no se entrega*/

    return (
         <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <input
                 type="text"
                placeholder="Titulo" 
                {...register("titulo", { required: true })}
                className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
               
                />
                {errors.titulo && <span>El campo del titulo es requerido</span>}

                <textarea
                    rows="3"
                    placeholder="Descripción"
                    {...register("descripcion", { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                ></textarea>
                {errors.descripcion && <span>El campo de descripcion es requerido</span>}

                <button
                    className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'
                >Guardar</button>
            </form> 
         
            {params.id && (
                <div className='flex justify-end'>
                    <button
                        className='bg-red-500 p-3 rounded-lg w-48 mt-3'
                        onClick = {async () => {
                        const accepted = window.confirm("¿ Estas seguro ?");
                        if (accepted) {
                            await eliminarProyecto(params.id);
                            toast.success("Proyecto eliminado", {
                                position: "bottom-right",
                                style: {
                                    background: "#101010",
                                    color: "#fff"
                                },
                            });
                            navigate("/proyectos")
                        }
                    }}
                >
                Eliminar
                </button>
            </div>
        )}        
    </div>
    );
}