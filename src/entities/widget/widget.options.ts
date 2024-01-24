export enum WidgetsIds {
  WORKING = 'working',
  DAYS = 'days',
}

export enum DaysTypes {
  WORKING = 'working',
  SKIP = 'skip',
  TIME_OFF = 'time_off',
  HOLIDAY = 'holiday',
  NONE = 'none',
}

export type Widget = {
  typeId: WidgetsIds;
  name: string;
};

export type WorkingWidgetType = Widget & {
  totalHours: number;
  planHours: number;
  workedToday: number;
};

export type DaysWidgetType = Widget & {
  days: DaysTypes[]
};

export type WidgetsTypes = WorkingWidgetType | DaysWidgetType;
