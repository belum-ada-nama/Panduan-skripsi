import { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface AccordionProps {
  syarats: { category: string; listSyarat: string[] };
}

const AccordionBerkas: React.FC<AccordionProps> = ({ syarats }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse" className="bg-black">
      <div key={syarats.category} className="bg-gray-700 rounded-xl">
        <h2 id={`accordion-collapse-heading`}>
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium hover:underline transition-all"
            onClick={() => handleToggle(0)} // Toggle dengan index 0 karena hanya satu kategori
            aria-expanded={openIndex === 0 ? "true" : "false"}
            aria-controls={`accordion-collapse-body`}
          >
            <span className="mr-3">{syarats.category}</span>
            <IoIosArrowDown size={24}/>
          </button>
        </h2>
        <div
          id={`accordion-collapse-body`}
          ref={(el) => contentRefs.current[0] = el}
          style={{
            height: openIndex === 0 ? `${contentRefs.current[0]?.scrollHeight}px` : "0px",
            overflow: "hidden",
            transition: "height 0.3s ease-in-out",
          }}
          aria-labelledby={`accordion-collapse-heading`}
        >
          <div className="p-5 bg-gray-900 rounded-b-lg">
            <ul>
              {syarats.listSyarat.map((answer, idx) => (
                <li key={idx}>{answer}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionBerkas;
