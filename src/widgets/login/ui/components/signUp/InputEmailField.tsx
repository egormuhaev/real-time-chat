import { useTranslation } from "react-i18next";
import { emailValidator } from "shared/lib/helpers";
import { Input } from "shared/ui/input";
import { InputMessage } from "shared/ui/input";
import { InputFieldProps } from "../../types/InputField.props";
import { MdAlternateEmail } from "react-icons/md";
import { memo, useMemo } from "react";

export const InputEmailField: React.FC<InputFieldProps> = memo(
  ({ onChangeInput, value }) => {
    const inputSubElement = useMemo(
      () =>
        value.value.length > 0 &&
        !value.validation && (
          <InputMessage
            messages={[
              {
                message: "Неправильный формат электронной почты",
                status: emailValidator(value.value),
              },
            ]}
          />
        ),
      [value.validation, value]
    );

    const { t } = useTranslation();
    return (
      <Input
        placeholder={t("Электронная почта")}
        size="large"
        subElement={inputSubElement}
        value={value.value}
        label={<MdAlternateEmail />}
        onChange={onChangeInput}
      />
    );
  }
);
