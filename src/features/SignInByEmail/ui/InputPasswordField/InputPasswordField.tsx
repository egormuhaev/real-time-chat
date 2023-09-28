import { useTranslation } from "react-i18next";
import { passwordValidator } from "shared/helpers";
import { Input } from "shared/ui/input";
import { InputMessage } from "shared/ui/input";
import { InputFieldProps } from "../types/FormProps";
import { MdPassword } from "react-icons/md";
import { useSelector } from "react-redux";
import { getSignInPassword } from "../../model/selectors/getSignInPassword/getSignInPassword";
import { memo } from "react";

export const InputPasswordField: React.FC<InputFieldProps> = memo(
  ({ onChangeInput }) => {
    const { value, validation } = useSelector(getSignInPassword);

    const { t } = useTranslation();
    return (
      <Input
        placeholder={t("Пароль")}
        type="password"
        size="large"
        value={value}
        label={<MdPassword />}
        onChange={onChangeInput}
      />
    );
  }
);
