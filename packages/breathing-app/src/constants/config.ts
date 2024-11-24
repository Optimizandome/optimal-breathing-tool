import { BreathProtocol } from "types";
import i18n from "utils/i18n";

export const FIXED_PROTOCOLS: BreathProtocol[] = [
  {
    id: "balanceado",
    title: i18n().t("balanced"),
    image: require("assets/images/balanced.png"),
    text: "...",
    usedTo: [
      i18n().t("protocols.balancedUsedTo.1"),
      i18n().t("protocols.balancedUsedTo.2"),
      i18n().t("protocols.balancedUsedTo.3"),
      i18n().t("protocols.balancedUsedTo.4"),
    ],
    indications: [i18n().t("protocols.balancedIndications.1")],
    breaths: [4, 0, 4, 0],
  },
  {
    id: "caja",
    title: i18n().t("square"),
    image: require("assets/images/square.png"),
    text: "...",
    usedTo: [
      i18n().t("protocols.squareUsedTo.1"),
      i18n().t("protocols.squareUsedTo.2"),
      i18n().t("protocols.squareUsedTo.3"),
      i18n().t("protocols.squareUsedTo.4"),
    ],
    indications: [
      i18n().t("protocols.squareIndications.1"),
      i18n().t("protocols.squareIndications.2"),
    ],
    breaths: [4, 4, 4, 4],
  },
  {
    id: "triangulo",
    title: i18n().t("triangle"),
    image: require("assets/images/triangle.png"),
    text: "...",
    usedTo: [
      i18n().t("protocols.triangleUsedTo.1"),
      i18n().t("protocols.triangleUsedTo.2"),
      i18n().t("protocols.triangleUsedTo.3"),
    ],
    indications: [
      i18n().t("protocols.triangleIndications.1"),
      i18n().t("protocols.triangleIndications.2"),
    ],
    breaths: [4, 8, 4, 0],
  },
  {
    id: "triangulo_invertido",
    title: i18n().t("invertedTriangle"),
    image: require("assets/images/inverted_triangle.png"),
    text: "...",
    usedTo: [
      i18n().t("protocols.invertedTriangleUsedTo.1"),
      i18n().t("protocols.invertedTriangleUsedTo.2"),
      i18n().t("protocols.invertedTriangleUsedTo.3"),
    ],
    indications: [
      i18n().t("protocols.invertedTriangleIndications.1"),
      i18n().t("protocols.invertedTriangleIndications.2"),
    ],
    breaths: [4, 0, 4, 8],
  },
];
