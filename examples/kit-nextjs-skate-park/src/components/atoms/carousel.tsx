import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const CarouselAtom = createAtom(() => shadcnComponents.Carousel, {
  name: "Carousel",
  ...shadcnComponentDefinitions.Carousel,
});

export { CarouselAtom };
