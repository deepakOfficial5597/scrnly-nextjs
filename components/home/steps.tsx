const Steps = () => {
    return (
        <div className="flex flex-row justify-around rounded-md bg-gray-50">
            <div className="max-w-[30%] md:max-w-[20%] text-center py-10">
              <span className="h-[30px] w-[30px] bg-gray-300 rounded-full m-auto flex justify-center items-center">1</span>
              <p className="font-semibold text-xs md:text-md mt-2">Upload your screenshot</p>
            </div>
            <div className="max-w-[30%] md:max-w-[20%] text-center py-10">
              <span className="h-[30px] w-[30px] bg-gray-300 rounded-full m-auto flex justify-center items-center">2</span>
              <p className="font-semibold text-xs md:text-md mt-2">Customize with ready made templates</p>
            </div>
            <div className="max-w-[30%] md:max-w-[20%] text-center py-10">
              <span className="h-[30px] w-[30px] bg-gray-300 rounded-full m-auto flex justify-center items-center">3</span>
              <p className="font-semibold text-xs md:text-md mt-2">Export your image in 1x, 2x or 3x</p>
            </div>
          </div>
    )
}

export default Steps