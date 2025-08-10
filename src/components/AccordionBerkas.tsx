// AccordionBerkas.tsx
import { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface AccordionProps {
  syarats: {
    category: string;
    listSyarat: string[];
  };
  checkedItems: { [key: string]: boolean };
  onCheck: (item: string) => void;
}

const AccordionBerkas: React.FC<AccordionProps> = ({ syarats, checkedItems, onCheck }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-700 rounded-xl">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-white hover:underline transition-all"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls={`accordion-body-${syarats.category}`}
        >
          <span className="mr-3">{syarats.category}</span>
          <IoIosArrowDown
            size={24}
            className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </h2>

      <div
        id={`accordion-body-${syarats.category}`}
        ref={contentRef}
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
        }}
        aria-labelledby={`accordion-heading-${syarats.category}`}
      >
        <div className="p-5 bg-gray-900 rounded-b-lg">
          <ul className="space-y-2">
            {syarats.listSyarat.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <label className="flex items-center cursor-pointer ">
                  <input
                    type="checkbox"
                    checked={!!checkedItems[item]}
                    onChange={() => onCheck(item)}
                    className="w-5 h-5 border-2 border-black bg-white rounded-full"
                  />

                  <span className="ml-5 text-white">{item}</span>
                </label>
              </li>

            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccordionBerkas;
