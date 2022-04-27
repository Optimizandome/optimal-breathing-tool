import { Button, Flex, Text } from "theme-ui";

import { SuccessPracticeDialogProps } from "./SuccessPracticeDialog.def";

export const SuccessPracticeDialog: React.FC<SuccessPracticeDialogProps> = ({
  onClose,
}) => (
  <Flex
    sx={{
      width: "360px",
      backgroundImage: "linear-gradient(to bottom,#34baaf, #7cd5a7)",
      borderRadius: "20px",
      px: "18px",
      pt: "30px",
      pb: "20px",
      flexDirection: "column",
    }}
  >
    <Text
      sx={{
        fontSize: "42px",
        fontWeight: "bold",
        color: "white",
        alignSelf: "center",
      }}
    >
      ¡Felicidades!
    </Text>
    <Text sx={{ color: "#c7ffed", my: "24px", alignSelf: "center" }}>
      Completaste tu práctica
    </Text>
    <Button
      onClick={onClose}
      sx={{
        bg: "#132F44",
        fontSize: "18px",
        py: "14px",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      Aceptar
    </Button>
  </Flex>
);
