import { useState, useEffect} from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  //Miramos si hay algo en localStorage
  useEffect(() => {
    const pacientesLocal = JSON.parse(localStorage.getItem('pacientes'));
    pacientesLocal?.length > 0 && setPacientes(pacientesLocal);
  }, []);

  //Guardar en localStorage
  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes])

  const eliminarPaciente = (id) =>{
    //iteramos sin modificar y buscamos todos los id que sena diferentes
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)

    //Con esto actualizamos Los Pacientes
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-10">
     <Header/>
     <div className="mt-12 md:flex">
        
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          
        />
     </div>
    </div>
  )
}

export default App
