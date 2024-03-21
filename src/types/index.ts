export type ProductWidgetType = "carbon" | "plastic bottles" | "trees";
export type ProductWidgetAction = "collects" | "plants" | "offsets";
export type WidgetColor = "white" | "black" | "blue" | "green" | "beige";

export interface ProductWidget {
  id: number;
  type: ProductWidgetType;
  amount: number;
  action: ProductWidgetAction;
  active: boolean;
  linked: boolean;
  selectedColor: WidgetColor;
}