import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/input";
import { InputMessage } from "shared/ui/input";
import { InputFieldProps } from "../types/InputField.props";
import { MdPassword } from "react-icons/md";
import { useSelector } from "react-redux";
import { getSignUpConfPassword } from "../../model/selectors/getSignUpConfPassword/getSignUpConfPassword";
import { memo, useMemo } from "react";

export const InputConfPasswordField: React.FC<InputFieldProps> = memo(
  ({ onChangeInput }) => {
    const { value, validation } = useSelector(getSignUpConfPassword);

    const inputSubElement = useMemo(
      () =>
        value.length > 0 &&
        !validation && (
          <InputMessage
            messages={[{ message: "Пароли не совпадаю", status: false }]}
          />
        ),
      [validation, value]
    );

    const { t } = useTranslation();
    return (
      <Input
        placeholder={t("Повторите пароль")}
        subElement={inputSubElement}
        type="password"
        size="large"
        value={value}
        onChange={onChangeInput}
        label={<MdPassword />}
      />
    );
  }
);
