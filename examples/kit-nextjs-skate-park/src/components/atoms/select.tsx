import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const SelectAtom = createAtom(() => shadcnComponents.Select, {
  name: "Select",
  ...shadcnComponentDefinitions.Select,
  props: shadcnComponentDefinitions.Select.props.shape,
});

export { SelectAtom };
