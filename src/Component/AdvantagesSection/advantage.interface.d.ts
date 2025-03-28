export interface IAdvItem {
  id: number;
  title: string;
  icon: string;
  description: string;
}
export interface IwarrantlyItem {
  id: number;
  title: string;
  description: string;
}

export interface IAdv {
  title: string;
  list: IAdvItem[];
}
export interface Iwarrantly {
  title: string;
  list: IwarrantlyItem[];
}
