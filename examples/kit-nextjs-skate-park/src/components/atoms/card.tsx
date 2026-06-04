import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const CardAtom = createAtom(() => shadcnComponents.Card, {
  name: "Card",
  ...shadcnComponentDefinitions.Card,
});

export { CardAtom };
