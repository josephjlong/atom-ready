import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const DropdownMenuAtom = createAtom(() => shadcnComponents.DropdownMenu, {
  name: "DropdownMenu",
  ...shadcnComponentDefinitions.DropdownMenu,
});

export { DropdownMenuAtom };
