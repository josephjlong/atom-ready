import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const TextareaAtom = createAtom(() => shadcnComponents.Textarea, {
  name: "Textarea",
  ...shadcnComponentDefinitions.Textarea,
  props: shadcnComponentDefinitions.Textarea.props.shape,
});

export { TextareaAtom };
