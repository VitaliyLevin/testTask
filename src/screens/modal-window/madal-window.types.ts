export interface IModalWindow {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  isError: boolean;
}