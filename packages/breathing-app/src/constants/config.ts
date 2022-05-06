import { BreathProtocol } from "types";

export const FIXED_PROTOCOLS: BreathProtocol[] = [
  {
    id: "balanceado",
    title: "Balanceado",
    image: require("assets/images/balanced.png"),
    text: "...",
    usedTo: [
      "Calmar el cuerpo y la mente",
      "Reducir el ritmo cardiaco",
      "Ganar claridad mental",
      "Al meditar",
    ],
    indications: ["Respira solo por la nariz y diafragmáticamente"],
    breaths: [4, 0, 4, 0],
  },
  {
    id: "caja",
    title: "Caja",
    image: require("assets/images/square.png"),
    text: "...",
    usedTo: [
      "Calmar el cuerpo y la mente",
      "Ganar claridad mental",
      "Incrementar el enfoque",
      "Reducir el ritmo cardiaco",
      "Inducir un Estado de Coherencia",
    ],
    indications: [
      "Respira solo por la nariz y diafragmáticamente",
      "Enfócate en completar las 4 esquinas de la caja",
    ],
    breaths: [4, 4, 4, 4],
  },
  {
    id: "triangulo",
    title: "Triángulo",
    image: require("assets/images/triangle.png"),
    text: "...",
    usedTo: [
      "Reducir el ritmo cardiaco",
      "Ganar claridad mental y enfoque",
      "Mejorar la resistencia al CO2",
    ],
    indications: [
      "Respira solo por la nariz y diafragmáticamente",
      "Relaja el rostro, cuello y cuerpo en la retención",
    ],
    breaths: [4, 8, 4, 0],
  },
  {
    id: "triangulo_invertido",
    title: "Triángulo Invertido",
    image: require("assets/images/inverted_triangle.png"),
    text: "...",
    usedTo: [
      "Reducir el ritmo cardiaco",
      "Ganar claridad mental y enfoque",
      "Mejorar la resistencia al CO2",
    ],
    indications: [
      "Respira solo por la nariz y diafragmáticamente",
      "Relaja tu mente durante la retención",
    ],
    breaths: [4, 0, 4, 8],
  },
];
