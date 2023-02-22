export interface IDataEntry {
  id: number;
  title: string;
  text: string;
  image: string;
  url: string;
  active: number;
  sort_order: number;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
}

export interface IDataEntryInput {
  id: number;
  title: string;
  text: string;
  image: string;
  url: string;
}