import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const GridAtom = createAtom(() => shadcnComponents.Grid, {
  name: "Grid",
  ...shadcnComponentDefinitions.Grid,
});

export { GridAtom };
