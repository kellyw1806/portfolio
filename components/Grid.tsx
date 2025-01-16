import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {Array.isArray(gridItems) && gridItems.length > 0 ? (
          gridItems.map((item) => (
            <BentoGridItem
              id={item.id}
              key={item.id} // Avoid using array index as key
              title={item.title || "Default Title"}
              description={item.description || "No description available"}
              className={item.className || ""}
              img={item.img || "/images/default.png"}
              imgClassName={item.imgClassName || ""}
              titleClassName={item.titleClassName || ""}
              spareImg={item.spareImg || ""}
            />
          ))
        ) : (
          <p>No grid items available.</p>
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
