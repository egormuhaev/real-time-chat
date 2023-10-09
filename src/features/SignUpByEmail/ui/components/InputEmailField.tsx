import { useTranslation } from "react-i18next";
import { emailValidator } from "shared/lib/helpers";
import { Input } from "shared/ui/input";
import { InputMessage } from "shared/ui/input";
import { InputFieldProps } from "../types/InputField.props";
import { MdAlternateEmail } from "react-icons/md";
import { useSelector } from "react-redux";
import { getSignUpEmail } from "../../model/selectors/getSignUpEmail/getSignUpEmail";
import { memo, useMemo } from "react";

export const InputEmailField: React.FC<InputFieldProps> = memo(
  ({ onChangeInput }) => {
    const { value, validation } = useSelector(getSignUpEmail);

    const inputSubElement = useMemo(
      () =>
        value.length > 0 &&
        !validation && (
          <InputMessage
            messages={[
              {
                message: "Неправильный формат электронной почты",
                status: emailValidator(value),
              },
            ]}
          />
        ),
      [validation, value]
    );

    const { t } = useTranslation();
    return (
      <Input
        placeholder={t("Электронная почта")}
        size="large"
        subElement={inputSubElement}
        value={value}
        label={<MdAlternateEmail />}
        onChange={onChangeInput}
      />
    );
  }
);
