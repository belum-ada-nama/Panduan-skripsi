interface SectionTitleProps {
    title: string;
    description: string;
}

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-gray-700 font-medium text-xl">{description}</p>
    </>
  )
}

export default SectionTitle;
