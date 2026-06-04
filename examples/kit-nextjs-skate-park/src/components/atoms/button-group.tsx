import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const ButtonGroupAtom = createAtom(() => shadcnComponents.ButtonGroup, {
  name: "ButtonGroup",
  ...shadcnComponentDefinitions.ButtonGroup,
  props: shadcnComponentDefinitions.ButtonGroup.props.shape,
});

export { ButtonGroupAtom };
