const ImagePositionCard = ({ title, selected=false }:ImagePositionCardProps) => {
    return (
        <button className={`mx-3 px-2 py-2 text-xs rounded-md border tracking-wide font-normal ${selected ? 'border-primary-default hover:shadow text-primary-default bg-background-primary_active' : 'border-border-light hover:shadow text-primary-accent'} `}>
            {title}
        </button>
    )
}

type ImagePositionCardProps = {
    title: string,
    selected ?: boolean
}

export default ImagePositionCard