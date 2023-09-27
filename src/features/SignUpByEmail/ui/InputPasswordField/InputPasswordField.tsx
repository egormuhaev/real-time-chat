import { useTranslation } from "react-i18next";
import { passwordValidator } from "shared/helpers";
import { Input } from "shared/ui/input";
import { InputMessage } from "../InputMessage/InputMessage";
import { InputFieldProps } from "../types/FormProps";
import { MdPassword } from "react-icons/md";
import { useSelector } from "react-redux";
import { getSignUpPassword } from "../../model/selectors/getSignUpPassword/getSignUpPassword";
import { memo, useMemo } from "react";

export const InputPasswordField: React.FC<InputFieldProps> = memo(
  ({ onChangeInput }) => {
    const { value, validation } = useSelector(getSignUpPassword);

    const inputSubElement = useMemo(
      () =>
        value.length > 0 &&
        !validation && (
          <InputMessage messages={passwordValidator(value).messages} />
        ),
      [validation, value]
    );

    const { t } = useTranslation();
    return (
      <Input
        placeholder={t("Пароль")}
        subElement={inputSubElement}
        type="password"
        size="large"
        value={value}
        label={<MdPassword />}
        onChange={onChangeInput}
      />
    );
  }
);
