import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const StackAtom = createAtom(() => shadcnComponents.Stack, {
  name: "Stack",
  ...shadcnComponentDefinitions.Stack,
});

export { StackAtom };
