import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/input";
import { InputMessage } from "shared/ui/input";
import { InputFieldProps } from "../../types/InputField.props";
import { MdPassword } from "react-icons/md";
import { memo, useMemo } from "react";

export const InputConfPasswordField: React.FC<InputFieldProps> = memo(
  ({ onChangeInput, value }) => {
    const inputSubElement = useMemo(
      () =>
        value.value.length > 0 &&
        !value.validation && (
          <InputMessage
            messages={[{ message: "Пароли не совпадаю", status: false }]}
          />
        ),
      [value.validation, value]
    );

    const { t } = useTranslation();
    return (
      <Input
        placeholder={t("Повторите пароль")}
        subElement={inputSubElement}
        type="password"
        size="large"
        value={value.value}
        onChange={onChangeInput}
        label={<MdPassword />}
      />
    );
  }
);
