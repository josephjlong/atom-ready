import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const TableAtom = createAtom(() => shadcnComponents.Table, {
  name: "Table",
  ...shadcnComponentDefinitions.Table,
});

export { TableAtom };
