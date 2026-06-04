import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const TextAtom = createAtom(() => shadcnComponents.Text, {
  name: "Text",
  ...shadcnComponentDefinitions.Text,
});

export { TextAtom };
