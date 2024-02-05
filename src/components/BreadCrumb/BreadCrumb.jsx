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
    "Functionality",
    "React",
    "React for begginners",
    "Lifecycle in reactive components",
    "React Hooks try it",
  ];
  const breadcrumbsRef = React.useRef();

  React.useEffect(() => {
    // window.addEventListener("resize", () => {
    if (breadcrumbsRef.current) {
      const breadcrumbWidth = breadcrumbsRef.current.offsetWidth;
      // apply ellipsis only after the first element
      let totalWidth = 0;
      const listLists = breadcrumbsRef.current.childNodes;
      listLists.forEach((v) => (totalWidth += v.offsetWidth));
      console.log("Breadcrumb width:", breadcrumbWidth);
      console.log("Nav Items totalWidth:", totalWidth);
      let startIndex = 1; // skip first element
      while (
        startIndex < listLists?.length - 1 &&
        breadcrumbWidth < totalWidth
      ) {
        const currentElement = listLists[startIndex];
        const currentElementChild = currentElement?.children[0];
        if (
          currentElementChild &&
          !currentElementChild.classList.contains("is-overflow")
        ) {
          currentElementChild.classList.add(`is-overflow`);
          let currentItemWidth = currentElementChild?.offsetWidth ?? 0;
          totalWidth -= currentItemWidth;
          console.log("WhileLoop || Total Width:", totalWidth);
        }
        startIndex++;
      }
      // if still last element is overflow
      if (breadcrumbWidth < totalWidth) {
        console.log(
          "last-width:",
          listLists[listLists.length - 1].children[0].offsetWidth
        );
        // first remove find how much space remain for last element
        // current bread crumb width - (total width with all item - last item's width) === available width for last item
        const spaceForLastItem =
          breadcrumbWidth -
          (totalWidth -
            listLists[listLists?.length - 1].children[0].offsetWidth);
        console.log("spaceForLastItem", spaceForLastItem);
        const canFit =
          spaceForLastItem >
          listLists[listLists.length - 1].children[0].offsetWidth * 0.25; // minimum space
        console.log(
          "the remaining width is less 25% of the last element width:",
          canFit
        );
        console.log("listLists", listLists);
        /* handle case when remain width is less then "25% of the last element width" */
        if (canFit) {
          console.log(
            "can Fit with ellipse width: ",
            (listLists[
              listLists.length - 1
            ].children[0].children[0].style = `width:${spaceForLastItem}px; overflow:hidden; text-overflow:ellipsis;`)
          );
          listLists[
            listLists.length - 1
          ].children[0].children[0].style = `width:${spaceForLastItem}px; overflow:hidden; text-overflow:ellipsis;`;
        }
      }
    }
    // });
  }, []);

  const containerStyle = {
    maxWidth: "75%",
    overflow: "hidden",
  };

  return (
    <div
      className="container mx-auto bg-black rounded-full p-3 my-4"
      style={containerStyle}
    >
      <ul className="flex m-4" ref={breadcrumbsRef}>
        {items?.map((link, index) => (
          <li
            className="flex items-center font-medium text-xl text-green-500"
            key={index}
          >
            <a href="/" className="item flex items-center">
              <span className={`text whitespace-nowrap`}>{link}</span>

              <span className="ellipse">...</span>
              {items?.length - 1 !== index && (
                <div className="mx-2">
                  <FaAngleRight />
                </div>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BreadCrumb;
