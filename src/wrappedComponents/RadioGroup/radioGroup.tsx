import { RadioGroup } from "@illa-design/radio"
import { FC } from "react"
import LabelWrapper from "@/wrappedComponents/LabelWrapper"
import { WrappedRadioGroupProps } from "./interface"

export const WrappedRadioGroup: FC<WrappedRadioGroupProps> = (props) => {
  const {
    label,
    labelPosition,
    labelWidth,
    labelWidthUnit,
    labelCaption,
    labelAlign,
    tooltipText,
    value,
    defaultValue,
    disabled,
    options,
    direction,
    colorScheme,
    handleUpdateDsl,
  } = props
  return (
    <LabelWrapper
      label={label}
      labelAlign={labelAlign}
      labelPosition={labelPosition}
      labelWidth={labelWidth}
      labelWidthUnit={labelWidthUnit}
      labelCaption={labelCaption}
      tooltipText={tooltipText}
    >
      <RadioGroup
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        options={options}
        direction={direction}
        colorScheme={colorScheme}
        onChange={(value) => {
          handleUpdateDsl({ value })
        }}
      />
    </LabelWrapper>
  )
}

WrappedRadioGroup.displayName = "RadioGroupWidget"

export const RadioGroupWidget = WrappedRadioGroup
