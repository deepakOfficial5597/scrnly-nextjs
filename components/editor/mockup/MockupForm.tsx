import useEditor from "@/shared/hooks/useEditor"

const MockupForm = ({ btnRef }:any) => {
    const { setMockup } = useEditor()

    const changeMockupImage = (event:any) => {
        setMockup((previousMockup) => {
            return {
            ...previousMockup,
            imageUrl: URL.createObjectURL(event.target.files[0])
        }})
    }
    return (
        // <div className="flex-1 flex items-center justify-center bg-background-primary rounded-md p-2">
        //     <div className="w-1/2 flex flex-col gap-2 items-center bg-background-light p-10 rounded-md">
        //       <input id="image__url" type="text" className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm" placeholder="Enter tweet URL or any website URL"/>
        //       <p> OR </p>
        //       <button className="px-4 py-2 bg-primary-default text-white rounded-md text-sm relative cursor-pointer">Upload a screenshot <input type="file" name="user-image" onChange={changeMockupImage} className="absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer" ref={btnRef}/></button>
        //     </div>
        // </div>
        <div className="flex-1 flex items-center justify-center rounded-md p-2">
            <button className="px-4 py-2 bg-primary-default text-white rounded-md text-sm relative cursor-pointer">Upload a screenshot <input type="file" name="user-image" onChange={changeMockupImage} className="absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer" ref={btnRef}/></button>
        </div>
    )
}

export default MockupForm