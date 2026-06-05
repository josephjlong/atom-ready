import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const RadioAtom = createAtom(() => shadcnComponents.Radio, {
  name: "Radio",
  ...shadcnComponentDefinitions.Radio,
  props: shadcnComponentDefinitions.Radio.props.shape,
});

export { RadioAtom };
