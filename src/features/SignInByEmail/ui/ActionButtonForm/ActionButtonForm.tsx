import { getSignInValidation } from "features/SignInByEmail/model/selectors/getSignInValidation/getSignInValidation";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Button } from "shared/ui/button";
import { ActionButtonFormProps } from "../types/FormProps";
import { CircleLoader } from "shared/ui/loader";
import { getSignInIsLoading } from "features/SignInByEmail/model/selectors/getSignInIsLoading/getSignInIsLoading";

export const ActionButtonForm: React.FC<ActionButtonFormProps> = ({
  className,
  onClick,
}) => {
  const validation = useSelector(getSignInValidation);
  const loading = useSelector(getSignInIsLoading);
  const { t } = useTranslation();
  return (
    <>
      {validation && (
        <Button
          disabled={loading}
          onClick={onClick}
          appearence="blue"
          className={className}
          size="large"
        >
          {loading ? <CircleLoader size={30} /> : t("Войти")}
        </Button>
      )}
    </>
  );
};
