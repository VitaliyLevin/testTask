import { IDataEntryInput } from "../../services/model/types";

export interface ICreateModal {
  add: (input: Partial<Omit<IDataEntryInput, 'id'>>) => void;
  closeModal: (isOpen: boolean) => void;
  isOpen: boolean;
}