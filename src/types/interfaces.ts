export interface ListType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface CheckboxType {
  isChecked: boolean;
};

export interface DeleteIconType {
  onClick: () => void;
};
