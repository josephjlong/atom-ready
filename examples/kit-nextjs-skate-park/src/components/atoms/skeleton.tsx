import { shadcnComponents } from "@json-render/shadcn";
import { shadcnComponentDefinitions } from "@json-render/shadcn/catalog";

import { createAtom } from "@sitecore-content-sdk/nextjs";

const SkeletonAtom = createAtom(() => shadcnComponents.Skeleton, {
  name: "Skeleton",
  ...shadcnComponentDefinitions.Skeleton,
  props: shadcnComponentDefinitions.Skeleton.props.shape,
});

export { SkeletonAtom };
