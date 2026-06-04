import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const CheckboxAtom = createAtom(() => shadcnComponents.Checkbox, {
  name: "Checkbox",
  ...shadcnComponentDefinitions.Checkbox,
});

export { CheckboxAtom };
