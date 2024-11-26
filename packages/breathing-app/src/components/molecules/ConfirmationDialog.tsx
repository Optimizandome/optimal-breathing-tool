import { Button, Flex, Text } from "theme-ui";
import { useTranslation } from "react-i18next";

import { ConfirmationDialogProps } from "./ConfirmationDialog.def";

export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  title,
  message,
  onCancel,
  onContinue,
}) => {
  const { t } = useTranslation();

  return (
    <Flex
      sx={{
        width: "360px",
        bg: "#132F44",
        px: "22px",
        pt: "30px",
        pb: "22px",
        flexDirection: "column",
        borderRadius: "20px",
      }}
    >
      <Text
        sx={{
          fontSize: "36px",
          fontWeight: "bold",
          color: "white",
          alignSelf: "center",
        }}
      >
        {title}
      </Text>
      <Text
        sx={{ color: "#A7A4A4", mt: "24px", mb: "20px", alignSelf: "center" }}
      >
        {message}
      </Text>
      <Flex sx={{ justifyContent: "flex-end", gap: "20px", mt: "44px" }}>
        <Button
          sx={{
            color: "white",
            bg: "transparent",
            cursor: "pointer",
            fontSize: "18px",
            py: "14px",
          }}
          onClick={onCancel}
        >
          {t("cancel")}
        </Button>
        <Button
          sx={{
            color: "white",
            bg: "#F57F01",
            cursor: "pointer",
            fontSize: "18px",
            py: "14px",
            borderRadius: "10px",
          }}
          onClick={onContinue}
        >
          {t("confirm")}
        </Button>
      </Flex>
    </Flex>
  );
};
