import MenuItems from './Aside/MenuItems'

function Aside() {
  return (
    <div className="fixed top-0 left-0 w-[88px] h-screen bg-aside-menu box-border flex flex-col">

  <div className="h-[72px] shrink-0 w-full" />

  <div className="w-full flex-1 min-h-0 flex flex-col justify-between">

    <div>
      <MenuItems texto="Cursos" icono="cursos" ruta="cursos" />

      <MenuItems texto="Chat" icono="chat" ruta="chat" />

      <MenuItems texto="Calendario" icono="calendario" ruta="calendario" />

      <MenuItems texto="Ayuda" icono="ayuda" ruta="ayuda" />

      <MenuItems texto="Configuración" icono="configuracion" ruta="configuracion" />
    </div>

    <div className='flex flex-col gap-6 mb-3'>
      <div className="border-t border-white" />

      <MenuItems texto={<> Correo {"\n"}  UPP</>} icono="correo" ruta="/" />

      <MenuItems texto="UPP+biblio" icono="uppbiblio" ruta="/" />
    </div>

  </div>
</div>
  )
}

export default Aside