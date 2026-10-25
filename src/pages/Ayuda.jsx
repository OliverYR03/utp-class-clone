import Aside from '../components/Aside'
import Nav from '../components/Nav'

function Ayuda() {
  return (
    <div className="relative flex w-screen bg-back-class h-screen">
        <Nav />
       
       <div className="flex w-full mx-auto justify-start mt-32 ml-32 mr-32">
          
        <div className="">
                    <Aside />
        </div>
          <div className="flex flex-col gap-10 w-full">
            <nav className='flex w-full justify-start'>
                <h2 className='font-semibold '>Ayuda</h2>
            </nav>
            <div className="flex flex-col gap-3">
                <div className="w-full cursor-pointer">
                <div className="flex flex-col gap-0.5 w-full  bg-white rounded-md p-1 pl-7 py-1 border-l-4 border-l-cyan-new hover:shadow-lg hover:cusor-pointer" >
                    <p className='font-semibold font-LatoRegular text-base ' >Charla de inducción a UPP-class</p>
                    <span>Conoce UPP-class y explora todas las posibilidades que te ofrece.</span>
                </div>
            </div>
            <div className="w-full cursor-pointer">
                <div className="flex flex-col gap-0.5 w-full  bg-white rounded-md p-1 pl-7 py-2 border-l-4 border-l-cyan-new hover:shadow-lg hover:cusor-pointer" >
                    <p className='font-semibold font-LatoRegular text-base ' >Manual del estudiante UPP-class</p>
                    <span>Manual del estudiantae UPP-class</span>
                </div>
            </div>
            <div className="w-full cursor-pointer">
                <div className="flex flex-col gap-0.5 w-full  bg-white rounded-md p-1 pl-7 py-2 border-l-4 border-l-cyan-new hover:shadow-lg hover:cusor-pointer" >
                    <p className='font-semibold font-LatoRegular text-base ' >Videos tutoriales / Estudiante</p>
                    <span>Mira videos tutoriales y conoce más de las funcionalidades que te ofrece UPP-class.</span>
                </div>
            </div>
            <div className="w-full cursor-pointer">
                <div className="flex flex-col gap-0.5 w-full  bg-white rounded-md p-1 pl-7 py-2 border-l-4 border-l-cyan-new hover:shadow-lg hover:cusor-pointer" >
                    <p className='font-semibold font-LatoRegular text-base ' >Talleres culturales y deportivas</p>
                    <span>Accede a las grabaciones de los talleres</span>
                </div>
            </div>
            <div className="w-full cursor-pointer">
                <div className="flex flex-col gap-0.5 w-full  bg-white rounded-md p-1 pl-7 py-2 border-l-4 border-l-cyan-new hover:shadow-lg hover:cusor-pointer" >
                    <p className='font-semibold font-LatoRegular text-base ' >Tips para los Cursos Virtuales 24/7</p>
                    <span>Tips para los Cursos Virtuales 24/7</span>
                </div>
            </div>
            </div>
          </div>
        </div>

        
    </div>
  )
}

export default Ayuda