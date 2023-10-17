import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/button";
import { ActionButtonFormProps } from "../../types/ActionButtonForm.props";
import { memo } from "react";
import { CircleLoader } from "shared/ui/loader";

export const ActionButtonForm: React.FC<ActionButtonFormProps> = memo(
  ({ className, onClick, validation, isLoading }) => {
    const { t } = useTranslation();
    return (
      <>
        {validation && (
          <Button
            disabled={isLoading}
            onClick={onClick}
            appearence="blue"
            className={className}
            size="large"
          >
            {isLoading ? <CircleLoader size={30} /> : t("Зарегистрироваться")}
          </Button>
        )}
      </>
    );
  }
);
