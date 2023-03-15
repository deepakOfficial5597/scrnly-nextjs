const Steps = () => {
    return (
        <div className="flex flex-row justify-center rounded-lg bg-gray-100 px-10 py-10 border shadow-md border-gray-200">
            <div className="max-w-[25%] text-center py-10">
              <span className="h-[40px] w-[40px] bg-gray-200 rounded-full m-auto flex justify-center items-center font-semibold text-primary-default">1</span>
              <p className="font-semibold text-sm md:text-lg mt-5">Upload your screenshot</p>
            </div>
            <div className="max-w-[25%] text-center py-10">
              <span className="h-[40px] w-[40px] bg-gray-200 rounded-full m-auto flex justify-center items-center font-semibold text-primary-default">2</span>
              <p className="font-semibold text-sm md:text-lg mt-5">Customize with ready made templates</p>
            </div>
            <div className="max-w-[25%] text-center py-10">
              <span className="h-[40px] w-[40px] bg-gray-200 rounded-full m-auto flex justify-center items-center font-semibold text-primary-default">3</span>
              <p className="font-semibold text-sm md:text-lg mt-5">Export your image in 1x, 2x or 3x</p>
            </div>
          </div>
    )
}

export default Steps