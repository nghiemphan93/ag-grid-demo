export interface Utility {
  id: string;
  category: UtilityCategoryE;
  present: boolean;
  fireSeparation: PartialFullNoneE;
  fireDetection: PartialFullNoneE;
  fixedProtection: PartialFullNoneE;
  deficiencies: DeficienciesE;
  numberField: number;
  textField: string;
}

export enum UtilityCategoryE {
  UTILITIES_TRANSFORMER = 'Utilities Transformer',
  ELECTRICAL_SWITCH_ROOMS = 'Electrical Switch Rooms',
  CABLE_CELLARS = 'Cable Cellars',
  BATTERY_ENERGY_STORAGE_SYSTEMS = 'Battery Energy Storage Systems',
  BUILDING_HEATING = 'Building Heating',
  PROCESS_HEATING = 'Process Heating',
  COMPRESSED_AIR = 'Compressed Air',
  COOLING_AND_FREEZE_SYSTEMS = 'Cooling & Freeze Systems',
  GENERATORS = 'Generators',
}

export enum PartialFullNoneE {
  PARTIAL = 'Partial',
  FULL = 'Full',
  NONE = 'None',
}

export enum DeficienciesE {
  YES = 'Yes',
  NO = 'No',
}
