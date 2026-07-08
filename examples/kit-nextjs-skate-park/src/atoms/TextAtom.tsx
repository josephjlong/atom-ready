import { Text } from "@sitecore-content-sdk/nextjs";

export const TextAtom = ({
  props,
}: {
  props: { text: string; props: { fields: object } };
}) => {
  const { text } = props;
  return (
    <Text
      field={{ value: text, metadata: { ...props.props.fields } }}
      editable={true}
    />
  );
};
