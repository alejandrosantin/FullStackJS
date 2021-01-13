// cuando se crea un nuevo cliente
exports.nuevoCliente = async(req, res, next) => {
        // crear objeto de paciente con datos de req.body
        const paciente = new paciente(req.body)
            // TODO: insertar en la base de datos
        try {
            await paciente.save()
            res.json({ mensaje: 'El cliente se agrego correctamente' })
        } catch (error) {
            console.log(error)
            next()
        }
    }
    // obtiene los pacientes
exports.obtenerPacientes = async(req, res, next) => {

    try {
        const pacientes = await Paciente.find({})
        res.json(pacientes)
    } catch (error) {
        console.log(error)
        next()
    }
}

// obitene un paciente por su id
exports.obtenerPaciente = async(req, res, next) => {
    try {
        const paciente = await Paciente.findById(req.params.id)
            // si existe lo retornamos como json
        res.json(paciente)
    } catch (error) {
        console.log(error)
        next()
    }
}

// actualiza por id
exports.actualizarPaciente = async(req, res, next) => {
    try {
        const paciente = await Paciente.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true
        })
        res.json(paciente)
    } catch (error) {
        console.log(error)
        next()
    }
}

// elimina pacietne
exports.eliminarPaciente = async(req, res, next) => {
    try {
        await Paciente.findOneAndDelete({ _id: req.params.id })
        res.json({ mensaje: 'El paciente fue eliminado' })
    } catch (error) {
        console.log(error)
        next()
    }
}