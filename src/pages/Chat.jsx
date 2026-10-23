import Aside from '../components/Aside'
import Nav from '../components/Nav'


function Chat() {
  return (
    <div className="relative flex w-screen bg-back-class h-screen">
        <Nav />

       <div className="flex w-full mx-auto justify-center items-center">
          <div className="">
            <Aside />
          </div>

          <div className="flex justify-center items-center">
                <h1>C chat :vaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
          </div>
        </div>

        
    </div>
  )
}

export default Chat