export type RangeProps = {
  value: number;
  color: "primary" | "secondary";
  min?: number;
  max?: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
