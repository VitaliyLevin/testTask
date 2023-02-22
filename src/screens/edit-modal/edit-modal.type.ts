import { IDataEntryInput } from "../../services/model/types";

export interface IEditModal {
  onEdit: (id: number, input: Partial<IDataEntryInput>) => void;
  closeModal: (isOpen: boolean) => void;
  isOpen: boolean;
  id: number;
}