export interface ICustomInput {
  onChange: (text: string) => void;
  value: string;
  label?: string;
  placeholder?: string;
}