
import Swal from 'sweetalert2'


const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  
  const {nombre,propietario,email,fecha,sintomas,id}= paciente

  const handleEliminar = () =>{
    // const respuesta = confirm('Deseas Elimiar este paciente?');
    Swal.fire({
      title: 'Deseas Eliminar este Paciente?',
      // text:`el `+ {nombre},
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Borrado!',
          'Este Paciente ha sido Eliminado.',
          'success',
          eliminarPaciente(id)
        )
      }
    })

    // if (respuesta) {
    //   Swal.fire({
    //     position: 'top-end',
    //     icon: 'success',
    //     title: 'Your work has been saved',
    //     showConfirmButton: false,
    //     timer: 1500
    //   })
    //   eliminarPaciente(id);
    // } 
  }

  

  return (
   
      <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {''}
          <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-between mt-5">
          <button
            type="button"
            className="rounded-lg bg-indigo-600 text-white text-center py-2 px-10 mr-5 font-semibold uppercase hover:bg-indigo-700 transition-all"
            onClick={()=> setPaciente(paciente)}
          > 
            Editar
          </button>

          <button
            type="button"
            className="rounded-lg bg-red-600 text-white text-center py-2 px-10 mr-5 font-semibold uppercase hover:bg-red-700 transition-all"
            onClick={handleEliminar}
          >
          Eliminar
          </button>

        </div>


      </div>
  )
}

export default Paciente
