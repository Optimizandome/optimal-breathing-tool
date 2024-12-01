import { Flex, Label, Radio } from "theme-ui";

export const LangSelector: React.FC<{
  initialLang: string;
  onChange: (lang: string) => void;
}> = ({ initialLang = "en", onChange }) => {
  const baseInitial = initialLang.split("-")[0] || "en";
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <Flex sx={{ flexDirection: "column", gap: [1, 2], mb: 2 }}>
      <Label>
        <Radio
          name="lang"
          defaultChecked={baseInitial === "en"}
          value="en"
          onChange={handleChange}
        />
        English
      </Label>
      <Label>
        <Radio
          name="lang"
          defaultChecked={baseInitial === "es"}
          value="es"
          onChange={handleChange}
        />
        Español
      </Label>
    </Flex>
  );
};
