import { useState, useRef } from "react";

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
            <svg
              data-accordion-icon
              className={`w-3 h-3 shrink-0 transition-transform ${openIndex === 0 ? "rotate-180" : ""}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
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
