const ImagePositionCard = ({ title, selected=false }:ImagePositionCardProps) => {
    return (
        <button className={`mx-3 px-2 py-2 text-sm rounded-md border tracking-wide font-normal shadow-md ${selected ? 'border-indigo-900 hover:border-indigo-900 text-indigo-900 font-medium' : 'border-gray-400'} focus:border-indigo-900 hover:border-gray-900 hover:font-gray-700`}>
            {title}
        </button>
    )
}

type ImagePositionCardProps = {
    title: string,
    selected ?: boolean
}

export default ImagePositionCard