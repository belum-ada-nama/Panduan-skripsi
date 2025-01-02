interface SectionTitleProps {
    title: string;
    description: string;
}

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-gray-700 font-medium">{description}</p>
    </div>
  )
}

export default SectionTitle;
