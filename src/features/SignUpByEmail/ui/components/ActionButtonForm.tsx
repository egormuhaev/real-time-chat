import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Button } from "shared/ui/button";
import { ActionButtonFormProps } from "../types/ActionButtonForm.props";
import { memo } from "react";
import { getSignUpValidation } from "features/SignUpByEmail/model/selectors/getSignUpValidation/getSignUpValidation";
import { getSignUpIsLoading } from "features/SignUpByEmail/model/selectors/getSignUpIsLoading/getSignUpIsLoading";
import { CircleLoader } from "shared/ui/loader";

export const ActionButtonForm: React.FC<ActionButtonFormProps> = memo(
  ({ className, onClick }) => {
    const validation = useSelector(getSignUpValidation);
    const loading = useSelector(getSignUpIsLoading);
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
            {loading ? <CircleLoader size={30} /> : t("Зарегистрироваться")}
          </Button>
        )}
      </>
    );
  }
);
