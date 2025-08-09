interface SectionTitleProps {
    title: string;
    description: string;
}

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <>
        <h1 className="text-xl lg:text-2xl font-semibold">{title}</h1>
        <p className="text-gray-400 font-medium text-base lg:text-xl">{description}</p>
    </>
  )
}

export default SectionTitle;
