import { Flex, Label, Radio } from "theme-ui";

export const LangSelector: React.FC<{
  initialLang: string;
  onChange: (lang: string) => void;
}> = ({ initialLang, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <Flex sx={{ flexDirection: "column", gap: [2, 3] }}>
      <Label>
        <Radio
          name="lang"
          defaultChecked={initialLang === "en"}
          value="en"
          onChange={handleChange}
        />
        English
      </Label>
      <Label>
        <Radio
          name="lang"
          defaultChecked={initialLang === "es"}
          value="es"
          onChange={handleChange}
        />
        Español
      </Label>
    </Flex>
  );
};
