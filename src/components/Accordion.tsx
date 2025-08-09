import { useState, useRef } from "react";

interface AccordionProps {
  questions: { question: string; answer: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ questions }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse" >
      {questions.map((item, index) => (
        <div key={index} className="border-b ">
          <h2 id={`accordion-collapse-heading-${index + 1}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium   border-gray-200 hover:underline    transition-all"
              onClick={() => handleToggle(index)}
              aria-expanded={openIndex === index ? "true" : "false"}
              aria-controls={`accordion-collapse-body-${index + 1}`}
            >
              <span className="text-start mr-6">{item.question}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
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
            id={`accordion-collapse-body-${index + 1}`}
            ref={contentRef}
            style={{
              height: openIndex === index ? `${height}px` : "0px",
              overflow: "hidden",
              transition: "height 0.3s ease-in-out",
            }}
            aria-labelledby={`accordion-collapse-heading-${index + 1}`}
          >
            <div className="p-5  border-t border-gray-200 ">
              <p className="text-gray-500">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
