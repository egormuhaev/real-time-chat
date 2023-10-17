import { useTranslation } from "react-i18next";
import { passwordValidator } from "shared/lib/helpers";
import { Input } from "shared/ui/input";
import { InputMessage } from "shared/ui/input";
import { InputFieldProps } from "../../types/InputField.props";
import { MdPassword } from "react-icons/md";
import { memo, useMemo } from "react";

export const InputPasswordField: React.FC<InputFieldProps> = memo(
  ({ onChangeInput, value }) => {
    const inputSubElement = useMemo(
      () =>
        value.value.length > 0 &&
        !value.validation && (
          <InputMessage messages={passwordValidator(value.value).messages} />
        ),
      [value.validation, value]
    );

    const { t } = useTranslation();
    return (
      <Input
        placeholder={t("Пароль")}
        subElement={inputSubElement}
        type="password"
        size="large"
        value={value.value}
        label={<MdPassword />}
        onChange={onChangeInput}
      />
    );
  }
);
