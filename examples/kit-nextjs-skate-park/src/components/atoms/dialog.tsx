import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const DialogAtom = createAtom(() => shadcnComponents.Dialog, {
  name: "Dialog",
  ...shadcnComponentDefinitions.Dialog,
});

export { DialogAtom };
