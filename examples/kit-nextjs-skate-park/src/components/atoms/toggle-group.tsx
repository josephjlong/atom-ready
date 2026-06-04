import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const ToggleGroupAtom = createAtom(() => shadcnComponents.ToggleGroup, {
  name: "ToggleGroup",
  ...shadcnComponentDefinitions.ToggleGroup,
});

export { ToggleGroupAtom };
