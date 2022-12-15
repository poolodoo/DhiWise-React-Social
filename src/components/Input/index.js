import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillWhiteA700: "bg-white_A700",
  OutlineGray5006c: "border border-gray_500_6c border-solid",
  FillGray900: "bg-gray_900",
  FillGray100: "bg-gray_100",
  srcFillWhiteA700: "bg-white_A700",
  srcFillGray800: "bg-gray_800",
};
const shapes = {
  RoundedBorder8: "rounded-radius8",
  RoundedBorder19: "rounded-radius19",
  RoundedBorder12: "rounded-radius12",
  srcRoundedBorder12: "rounded-radius12",
};
const sizes = {
  sm: "sm:p-[2px] md:p-[3px] p-[5px]",
  md: "p-[11px] sm:p-[5px] md:p-[7px]",
  lg: "sm:pb-[18px] md:pb-[24px] pb-[35px] pt-[13px] sm:pt-[6px] md:pt-[8px] px-[13px] sm:px-[6px] md:px-[8px]",
  xl: "md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px]",
  "2xl":
    "pb-[14px] sm:pb-[7px] md:pb-[9px] md:pt-[12px] pt-[18px] sm:pt-[9px] px-[14px] sm:px-[7px] md:px-[9px]",
  "3xl":
    "sm:pb-[18px] md:pb-[24px] pb-[35px] md:pt-[12px] pt-[18px] sm:pt-[9px] md:px-[12px] sm:px-[15px] px-[18px]",
  "4xl":
    "sm:pb-[10px] md:pb-[13px] pb-[19px] sm:pt-[12px] md:pt-[15px] pt-[23px] md:px-[13px] sm:px-[15px] px-[19px]",
  smSrc: "sm:p-[4px] md:p-[5px] p-[8px]",
  mdSrc:
    "pb-[13px] sm:pb-[6px] md:pb-[8px] sm:pt-[4px] md:pt-[5px] pt-[8px] sm:px-[4px] md:px-[5px] px-[8px]",
  lgSrc: "md:p-[14px] p-[21px] sm:px-[15px] sm:py-[11px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder8",
    "RoundedBorder19",
    "RoundedBorder12",
    "srcRoundedBorder12",
  ]),
  variant: PropTypes.oneOf([
    "FillWhiteA700",
    "OutlineGray5006c",
    "FillGray900",
    "FillGray100",
    "srcFillWhiteA700",
    "srcFillGray800",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "smSrc",
    "mdSrc",
    "lgSrc",
  ]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "FillWhiteA700",
  size: "2xl",
};

export { Input };
