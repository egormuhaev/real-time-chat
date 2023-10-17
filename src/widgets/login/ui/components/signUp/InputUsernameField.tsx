import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/input";
import { InputFieldProps } from "../../types/InputField.props";
import { BiUser } from "react-icons/bi";
import { memo } from "react";

export const InputUsernameField: React.FC<InputFieldProps> = memo(
  ({ onChangeInput, value }) => {
    const { t } = useTranslation();
    return (
      <Input
        placeholder={t("Имя пользователя")}
        size="large"
        value={value.value}
        label={<BiUser />}
        onChange={onChangeInput}
      />
    );
  }
);
