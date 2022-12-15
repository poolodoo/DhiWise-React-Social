import { Input } from "components";
export default {
  title: "ajitkumar_s_application2/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "RoundedBorder8",
  variant: "FillWhiteA700",
  size: "2xl",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
