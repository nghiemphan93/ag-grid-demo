import {
  DeficienciesE,
  PartialFullNoneE,
  Utility,
  UtilityCategoryE,
} from '../models/utility'; // Importing the enum definition file

export let mockedUtilities: Utility[] = [
  {
    id: '1',
    category: UtilityCategoryE.UTILITIES_TRANSFORMER,
    present: true,
    fireSeparation: PartialFullNoneE.PARTIAL,
    fireDetection: PartialFullNoneE.FULL,
    fixedProtection: PartialFullNoneE.NONE,
    deficiencies: DeficienciesE.YES,
    numberField: 10,
    textField: 'Example text 1',
  },
  {
    id: '2',
    category: UtilityCategoryE.ELECTRICAL_SWITCH_ROOMS,
    present: true,
    fireSeparation: PartialFullNoneE.PARTIAL,
    fireDetection: PartialFullNoneE.FULL,
    fixedProtection: PartialFullNoneE.NONE,
    deficiencies: DeficienciesE.NO,
    numberField: 20,
    textField: 'Example text 2',
  },
  {
    id: '3',
    category: UtilityCategoryE.CABLE_CELLARS,
    present: true,
    fireSeparation: PartialFullNoneE.FULL,
    fireDetection: PartialFullNoneE.NONE,
    fixedProtection: PartialFullNoneE.PARTIAL,
    deficiencies: DeficienciesE.YES,
    numberField: 30,
    textField: 'Example text 3',
  },
  {
    id: '4',
    category: UtilityCategoryE.BATTERY_ENERGY_STORAGE_SYSTEMS,
    present: false,
    fireSeparation: PartialFullNoneE.NONE,
    fireDetection: PartialFullNoneE.FULL,
    fixedProtection: PartialFullNoneE.PARTIAL,
    deficiencies: DeficienciesE.NO,
    numberField: 40,
    textField: 'Example text 4',
  },
  {
    id: '5',
    category: UtilityCategoryE.BUILDING_HEATING,
    present: true,
    fireSeparation: PartialFullNoneE.PARTIAL,
    fireDetection: PartialFullNoneE.NONE,
    fixedProtection: PartialFullNoneE.FULL,
    deficiencies: DeficienciesE.YES,
    numberField: 50,
    textField:
      'Example text 5 5 \n' + 'Example text \n' + 'Example text 5Ext 5',
  },
  {
    id: '6',
    category: UtilityCategoryE.PROCESS_HEATING,
    present: false,
    fireSeparation: PartialFullNoneE.FULL,
    fireDetection: PartialFullNoneE.FULL,
    fixedProtection: PartialFullNoneE.PARTIAL,
    deficiencies: DeficienciesE.NO,
    numberField: 60,
    textField: 'Example text 6',
  },
  {
    id: '7',
    category: UtilityCategoryE.COMPRESSED_AIR,
    present: true,
    fireSeparation: PartialFullNoneE.PARTIAL,
    fireDetection: PartialFullNoneE.NONE,
    fixedProtection: PartialFullNoneE.NONE,
    deficiencies: DeficienciesE.YES,
    numberField: 70,
    textField: 'Example text 7',
  },
  {
    id: '8',
    category: UtilityCategoryE.COOLING_AND_FREEZE_SYSTEMS,
    present: true,
    fireSeparation: PartialFullNoneE.FULL,
    fireDetection: PartialFullNoneE.NONE,
    fixedProtection: PartialFullNoneE.FULL,
    deficiencies: DeficienciesE.NO,
    numberField: 80,
    textField: 'Example text 8',
  },
  {
    id: '9',
    category: UtilityCategoryE.GENERATORS,
    present: true,
    fireSeparation: PartialFullNoneE.PARTIAL,
    fireDetection: PartialFullNoneE.NONE,
    fixedProtection: PartialFullNoneE.PARTIAL,
    deficiencies: DeficienciesE.YES,
    numberField: 90,
    textField: 'Example text 9',
  },
  {
    id: '10',
    category: UtilityCategoryE.GENERATORS,
    present: false,
    fireSeparation: PartialFullNoneE.FULL,
    fireDetection: PartialFullNoneE.FULL,
    fixedProtection: PartialFullNoneE.NONE,
    deficiencies: DeficienciesE.NO,
    numberField: 100,
    textField: 'Example text 10',
  },
  // Add more entries as needed
];
mockedUtilities = mockedUtilities.map((utility) => ({
  ...utility,
  numberField: utility.numberField * 13,
}));
