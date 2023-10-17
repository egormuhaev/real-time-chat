import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/input";
import { InputFieldProps } from "../../types/InputField.props";
import { MdAlternateEmail } from "react-icons/md";
import { memo } from "react";

export const InputEmailField: React.FC<InputFieldProps> = memo(
  ({ onChangeInput, value }) => {
    const { t } = useTranslation();
    return (
      <Input
        placeholder={t("Электронная почта")}
        size="large"
        label={<MdAlternateEmail />}
        value={value.value}
        onChange={onChangeInput}
      />
    );
  }
);
