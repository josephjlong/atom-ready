import { Text, TextFieldSchema } from "@sitecore-content-sdk/nextjs";

export const TextAtom = ({ props }: { props: { text: TextFieldSchema } }) => {
  const { text } = props;
  return <Text field={text} editable={true} />;
};
