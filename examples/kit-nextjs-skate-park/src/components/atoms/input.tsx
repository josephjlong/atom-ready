import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const InputAtom = createAtom(() => shadcnComponents.Input, {
  name: "Input",
  ...shadcnComponentDefinitions.Input,
  props: shadcnComponentDefinitions.Input.props.shape,
});

export { InputAtom };
