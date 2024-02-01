import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const BreadCrumb = () => {
  const items = [
    "Page1",
    "Page2",
    "Page3",
    "Page4",
    "Page5",
    "Page6",
    "Page7",
    "Page8cnibccipbdb",
    "Page9",
    "Page10",
    "Page11",
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breadcrumbsRef = React.useRef();
  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  React.useEffect(() => {
    if (breadcrumbsRef.current) {
      console.log(breadcrumbsRef.current);
      const breadcrumbWidth = breadcrumbsRef.current.offsetWidth;
      console.log("B width:", breadcrumbWidth);

      // apply elipe only after first element
      const listLists = breadcrumbsRef.current.childNodes;
      // console.log("listNodes:", listLists);

      let totalWidth = 0;
      listLists.forEach((v) => (totalWidth += v.offsetWidth));
      console.log("totalWidth:", totalWidth);
      let startIndex = 1;
      while (totalWidth > breadcrumbWidth) {
        // start width second element
        console.log(
          "startIndex and Element",
          startIndex,
          listLists[startIndex]?.children[0]
        );
        if (!listLists[startIndex].children[0]) {
          break;
        }
        listLists[startIndex].children[0].innerText = "...";
        let currentItemWidth =
          listLists[startIndex].children[0].offsetWidth ?? 0;
        console.log(
          "children width:",
          listLists[startIndex].children[0].offsetWidth
        );
        // listLists.forEach((v) => (currentWidth += v.offsetWidth));
        console.log("After Loop:", currentItemWidth);
        totalWidth -= currentItemWidth;
        console.log("Total Width:", totalWidth);
        startIndex++;
      }
    }
  }, []);
  const containerStyle = {
    maxWidth: "75%",
    overflow: "hidden",
  };
  const itemStyle = {
    textOverflow:
      windowWidth <= 0.75 * windowWidth ? "text-ellipsis" : "text-clip",
    whiteSpace: "nowrap",
  };

  return (
    <div
      className="container mx-auto bg-black rounded-full p-3 m-4"
      style={containerStyle}
    >
      <ul className="flex m-4" ref={breadcrumbsRef}>
        {items?.map((link, index) => (
          <li
            className="flex items-center font-medium text-xl text-green-500"
            key={index}
          >
            <a href="/" className="" style={itemStyle}>
              {link}
            </a>
            <div className="mx-2">
              <FaAngleRight />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreadCrumb;
