import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const PopoverAtom = createAtom(() => shadcnComponents.Popover, {
  name: "Popover",
  ...shadcnComponentDefinitions.Popover,
});

export { PopoverAtom };
