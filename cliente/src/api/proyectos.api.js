import axios from 'axios'

const proyectosApi = axios.create({
    baseURL: 'http://localhost:8000/proyectos/api/v1/proyectos/'
})
export const getAllProyectos = () => proyectosApi.get('/')

export const getProyectoById = (id) => proyectosApi.get(`/${id}/`)

export const crearProyecto = (proyecto) => proyectosApi.post('/', proyecto)

export const eliminarProyecto = (id) => proyectosApi.delete(`/${id}`)

export const actualizarProyecto = (id, proyecto) => proyectosApi.put(`/${id}/`, proyecto)
