import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/input";

import { InputFieldProps } from "../types/InputField.props";
import { BiUser } from "react-icons/bi";
import { useSelector } from "react-redux";
import { getSignUpUsername } from "../../model/selectors/getSignUpUsername/getSignUpUsername";
import { memo } from "react";

export const InputUsernameField: React.FC<InputFieldProps> = memo(
  ({ onChangeInput }) => {
    const { value, validation } = useSelector(getSignUpUsername);

    const { t } = useTranslation();
    return (
      <Input
        placeholder={t("Имя пользователя")}
        size="large"
        value={value}
        label={<BiUser />}
        onChange={onChangeInput}
      />
    );
  }
);
