import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/input";
import { InputFieldProps } from "../../types/InputField.props";
import { MdPassword } from "react-icons/md";
import { memo } from "react";

export const InputPasswordField: React.FC<InputFieldProps> = memo(
  ({ onChangeInput, value }) => {
    const { t } = useTranslation();
    return (
      <Input
        placeholder={t("Пароль")}
        type="password"
        size="large"
        value={value.value}
        label={<MdPassword />}
        onChange={onChangeInput}
      />
    );
  }
);
