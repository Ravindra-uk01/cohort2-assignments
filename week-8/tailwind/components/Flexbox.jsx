
const Flexbox = () => {
 

  return (
    <>
        <div className="flex p-2 border-2 items-center justify-center gap-10 md:w-[800px]  xs:w-[400px]  " >
            <div className="flex-1 p-2 border-4 border-red-500 " >Item 1</div>
            <div className="flex-2 p-2 border-4 border-green-500" >Item 2</div>
            <div className="flex-3 p-2 border-4 border-purple-500" >Item 3</div>
        </div>
    </>
  )
}

export default Flexbox;