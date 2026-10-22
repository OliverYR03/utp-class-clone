
import Aside from '../components/Aside'
import Carrousel from '../components/Carrousel'
import Nav from '../components/Nav'
import ActividadSemanal from '../components/ActividadSemanal'

function ClassAlumno() {
  return (
    <div className="relative w-full">
        <Aside />

        <Nav />
        <div className="bg-red-500 ml-20 pt-20">
        <Carrousel />

        <ActividadSemanal />
        ClassAlumno 
        </div>
            
    </div>
  )
}

export default ClassAlumno