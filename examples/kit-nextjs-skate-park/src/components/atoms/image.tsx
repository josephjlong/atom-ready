import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const ImageAtom = createAtom(() => shadcnComponents.Image, {
  name: "Image",
  ...shadcnComponentDefinitions.Image,
  props: shadcnComponentDefinitions.Image.props.shape,
});

export { ImageAtom };
