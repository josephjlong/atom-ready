import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const ToggleAtom = createAtom(() => shadcnComponents.Toggle, {
  name: "Toggle",
  ...shadcnComponentDefinitions.Toggle,
});

export { ToggleAtom };
