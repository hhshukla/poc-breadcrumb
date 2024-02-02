import React from "react";
import { FaAngleRight } from "react-icons/fa";
import "./BreadCrumb.css";

const BreadCrumb = () => {
  const items = [
    "MNC Company",
    "Horizontal Digital",
    "Horizontal India",
    "Digital",
    "Frontend",
    "UI",
    "React",
    "React for begginners",
    "Lifecycle in reactive components",
    "React Hooks try it",
    // "Page8",
    // "Page9",
    // "Page10",
    // "Page11",
    // "Page12",
    // "Page13",
    // "Page14",
    // "Page15",
    // "Page16",
    // "Page17",
    // "Page18",
  ];

  const breadcrumbsRef = React.useRef();

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (breadcrumbsRef.current) {
        console.log(breadcrumbsRef.current);
        const breadcrumbWidth = breadcrumbsRef.current.offsetWidth;
        console.log("B width:", breadcrumbWidth);

        // apply ellipsis only after the first element
        const listLists = breadcrumbsRef.current.childNodes;

        let totalWidth = 0;
        listLists.forEach((v) => (totalWidth += v.offsetWidth));
        console.log("totalWidth:", totalWidth);

        let startIndex = 1;
        while (startIndex < listLists?.length && totalWidth > breadcrumbWidth) {
          const currentElement = listLists[startIndex];
          const currentElementChild = currentElement?.children[0];

          if (currentElementChild) {
            let currentItemWidth = currentElementChild?.offsetWidth ?? 0;
            console.log("children width:", currentItemWidth);
            console.log("After Loop:", currentItemWidth);
            totalWidth -= currentItemWidth;
            console.log("Total Width:", totalWidth);
            currentElementChild.classList.add(`is-overflow`);
          }

          startIndex++;
        }
        let text =
          breadcrumbsRef.current.lastChild.querySelector(".text")?.textContent;
        if (text?.length > 20) {
          text = text.substring(0, 20) + "...";
        }
        console.log("breadcrumbtext", text);
        console.log("length", text);
      }
    });
  }, []);

  const containerStyle = {
    maxWidth: "75%",
    overflow: "hidden",
  };

  return (
    <div
      className="container mx-auto bg-black rounded-full p-3 m-4"
      style={containerStyle}
    >
      <ul className="flex m-4" ref={breadcrumbsRef}>
        {items?.map((link, index, array) => (
          <>
            <li
              className="flex items-center font-medium text-xl text-green-500"
              key={index}
            >
              <a href="/" className="item flex items-center">
                <span className="text whitespace-nowrap">{link}</span>
                {index !== array?.length - 1 && (
                  <>
                    <span className="ellipse">...</span>
                    <div className="mx-2">
                      <FaAngleRight />
                    </div>
                  </>
                )}
              </a>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default BreadCrumb;
