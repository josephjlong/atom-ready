import { Text } from "@sitecore-content-sdk/nextjs";

export const TextAtom = ({ props }: { props: { text: string } }) => {
  const { text } = props;
  return <Text field={{ value: text }} editable={true} />;
};
