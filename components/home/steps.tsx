const Steps = () => {
    return (
        <div className="flex flex-row justify-around rounded-lg bg-gray-100 px-4 md:px-10 py-10 border shadow-md border-gray-200">
            <div className="max-w-[33%] md:max-w-[30%] text-center py-10">
              <span className="h-[40px] w-[40px] bg-background-primary_active rounded-full m-auto flex justify-center items-center font-semibold text-primary-default">1</span>
              <p className="font-semibold text-xs md:text-lg mt-5">Upload your screenshot</p>
            </div>
            <div className="max-w-[33%]md:max-w-[30%] text-center py-10">
              <span className="h-[40px] w-[40px] bg-background-primary_active rounded-full m-auto flex justify-center items-center font-semibold text-primary-default">2</span>
              <p className="font-semibold text-xs md:text-lg mt-5">Customize with ready made templates</p>
            </div>
            <div className="max-w-[33%] md:max-w-[30%] text-center py-10">
              <span className="h-[40px] w-[40px] bg-background-primary_active rounded-full m-auto flex justify-center items-center font-semibold text-primary-default">3</span>
              <p className="font-semibold text-xs md:text-lg mt-5">Export your image in 1x, 2x or 3x</p>
            </div>
          </div>
    )
}

export default Steps