export enum WidgetsIds {
  WORKING = 'working'
}

export type Widget = {
  typeId: WidgetsIds;
  name: string;
};

export type WorkingWidget = Widget & {
  totalHours: number;
  planHours: number;
  workedToday: number;
};

export type WidgetsTypes = Widget | WorkingWidget;
