export type CreatedAt = number | string;
export type UpdatedAt = number | string;

export interface RequestNote {
  label: string,
  isChecked: boolean,
}

export interface Note extends RequestNote {
  id?: number,
  createdAt: CreatedAt
}

export interface UpdateNote extends RequestNote {
  id?: number,
  updatedAt: UpdatedAt
}