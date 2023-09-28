import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/input";
import { InputFieldProps } from "../types/FormProps";
import { MdAlternateEmail } from "react-icons/md";
import { useSelector } from "react-redux";
import { getSignInEmail } from "../../model/selectors/getSignInEmail/getSignInEmail";
import { memo, useMemo } from "react";

export const InputEmailField: React.FC<InputFieldProps> = memo(
  ({ onChangeInput }) => {
    const { value, validation } = useSelector(getSignInEmail);

    const { t } = useTranslation();
    return (
      <Input
        placeholder={t("Электронная почта")}
        size="large"
        label={<MdAlternateEmail />}
        value={value}
        onChange={onChangeInput}
      />
    );
  }
);
