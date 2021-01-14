import React, { Fragment } from 'react'

const Pacientes = ({ citas }) => {
    //si el arreglo esta vacio no retorna nada
    if (citas.length === 0) return null
    console.log(citas)
        // caso contrario retorna una respuesta
    return ( <
        Fragment >
        <
        h1 className = "my-5" > Administrador de pacientes < /h1> <
        div className = "container mt-5 py-5" >
        <
        div className = "row" >
        <
        div className = "col-12 mb-5 d-flex justify-content-center" >
        <
        a href = "#"
        className = "btn btn-success text-uppercase py-2 px-5 font-weight-bold" > Crear Cita < /a> <
        /div> <
        div className = "col-md-8 mx-auto" >
        <
        div className = "list-group" > {
            citas.map(cita => ( <
                h3 className = "mb-3" > { cita.nombre } < /h3> 
            ))
        } <
        /div> <
        /div> <
        /div> <
        /div> <
        /Fragment>
    )
}

export default Pacientes