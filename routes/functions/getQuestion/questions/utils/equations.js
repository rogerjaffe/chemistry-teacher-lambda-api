const equations = [
  {
    left: [
      { formula: "FeS", coefficient: 1 },
      { formula: "HCl", coefficient: 2 },
    ],
    right: [
      { formula: "H2S", coefficient: 1 },
      { formula: "FeCl2", coefficient: 1 },
    ],
  },
  {
    left: [{ formula: "KNO3", coefficient: 2 }],
    right: [
      { formula: "KNO2", coefficient: 2 },
      { formula: "O2", coefficient: 1 },
    ],
  },
  {
    left: [{ formula: "Pb(NO3)2", coefficient: 2 }],
    right: [
      { formula: "PbO", coefficient: 2 },
      { formula: "NO2", coefficient: 4 },
      { formula: "O2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "Na", coefficient: 2 },
      { formula: "H2O", coefficient: 2 },
    ],
    right: [
      { formula: "NaOH", coefficient: 2 },
      { formula: "H2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "Fe", coefficient: 3 },
      { formula: "H2O", coefficient: 4 },
    ],
    right: [
      { formula: "Fe3O4", coefficient: 1 },
      { formula: "H2", coefficient: 4 },
    ],
  },
  {
    left: [
      { formula: "C2H5OH", coefficient: 1 },
      { formula: "O2", coefficient: 3 },
    ],
    right: [
      { formula: "CO2", coefficient: 2 },
      { formula: "H2O", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "Fe3O4", coefficient: 1 },
      { formula: "H2", coefficient: 4 },
    ],
    right: [
      { formula: "Fe", coefficient: 3 },
      { formula: "H2O", coefficient: 4 },
    ],
  },
  {
    left: [
      { formula: "CO2", coefficient: 1 },
      { formula: "NaOH", coefficient: 1 },
    ],
    right: [{ formula: "NaHCO3", coefficient: 1 }],
  },
  {
    left: [
      { formula: "NaCl", coefficient: 1 },
      { formula: "H2SO4", coefficient: 1 },
    ],
    right: [
      { formula: "HCl", coefficient: 1 },
      { formula: "NaHSO4", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "CaC2", coefficient: 1 },
      { formula: "H2O", coefficient: 2 },
    ],
    right: [
      { formula: "C2H2", coefficient: 1 },
      { formula: "Ca(OH)2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "C8H18", coefficient: 2 },
      { formula: "O2", coefficient: 25 },
    ],
    right: [
      { formula: "CO2", coefficient: 16 },
      { formula: "H2O", coefficient: 18 },
    ],
  },
  {
    left: [{ formula: "CaCO3", coefficient: 1 }],
    right: [
      { formula: "CaO", coefficient: 1 },
      { formula: "CO2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "NH3", coefficient: 4 },
      { formula: "O2", coefficient: 5 },
    ],
    right: [
      { formula: "H2O", coefficient: 6 },
      { formula: "NO", coefficient: 4 },
    ],
  },
  {
    left: [
      { formula: "NO", coefficient: 2 },
      { formula: "O2", coefficient: 1 },
    ],
    right: [{ formula: "NO2", coefficient: 2 }],
  },
  {
    left: [{ formula: "H3BO3", coefficient: 6 }],
    right: [
      { formula: "H4B6O11", coefficient: 1 },
      { formula: "H2O", coefficient: 7 },
    ],
  },
  {
    left: [{ formula: "C6H12O6", coefficient: 1 }],
    right: [
      { formula: "C2H5OH", coefficient: 2 },
      { formula: "CO2", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "CaC2", coefficient: 1 },
      { formula: "N2", coefficient: 1 },
    ],
    right: [
      { formula: "CaCN2", coefficient: 1 },
      { formula: "C", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "CaCN2", coefficient: 1 },
      { formula: "H2O", coefficient: 3 },
    ],
    right: [
      { formula: "CaCO3", coefficient: 1 },
      { formula: "NH3", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "C6H6", coefficient: 2 },
      { formula: "O2", coefficient: 15 },
    ],
    right: [
      { formula: "CO2", coefficient: 12 },
      { formula: "H2O", coefficient: 6 },
    ],
  },
  {
    left: [
      { formula: "C7H16", coefficient: 1 },
      { formula: "O2", coefficient: 11 },
    ],
    right: [
      { formula: "CO2", coefficient: 7 },
      { formula: "H2O", coefficient: 8 },
    ],
  },
  {
    left: [{ formula: "H3PO3", coefficient: 4 }],
    right: [
      { formula: "H3PO4", coefficient: 3 },
      { formula: "PH3", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "CO", coefficient: 1 },
      { formula: "Fe3O4", coefficient: 1 },
    ],
    right: [
      { formula: "FeO", coefficient: 3 },
      { formula: "CO2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "ZnS", coefficient: 2 },
      { formula: "O2", coefficient: 3 },
    ],
    right: [
      { formula: "ZnO", coefficient: 2 },
      { formula: "SO2", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "Na2O2", coefficient: 2 },
      { formula: "H2O", coefficient: 2 },
    ],
    right: [
      { formula: "NaOH", coefficient: 4 },
      { formula: "O2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "SiO2", coefficient: 1 },
      { formula: "H2F2", coefficient: 2 },
    ],
    right: [
      { formula: "SiF4", coefficient: 1 },
      { formula: "H2O", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "Al4C3", coefficient: 1 },
      { formula: "H2O", coefficient: 12 },
    ],
    right: [
      { formula: "CH4", coefficient: 3 },
      { formula: "Al(OH)3", coefficient: 4 },
    ],
  },
  {
    left: [
      { formula: "Al", coefficient: 2 },
      { formula: "H2SO4", coefficient: 3 },
    ],
    right: [
      { formula: "Al2(SO4)3", coefficient: 1 },
      { formula: "H2", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "C3H8", coefficient: 1 },
      { formula: "O2", coefficient: 5 },
    ],
    right: [
      { formula: "CO2", coefficient: 3 },
      { formula: "H2O", coefficient: 4 },
    ],
  },
  {
    left: [
      { formula: "NO", coefficient: 2 },
      { formula: "O2", coefficient: 1 },
    ],
    right: [{ formula: "NO2", coefficient: 2 }],
  },
  {
    left: [{ formula: "(NH4)2Cr2O7", coefficient: 1 }],
    right: [
      { formula: "N2", coefficient: 1 },
      { formula: "H2O", coefficient: 4 },
      { formula: "Cr2O3", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "BiCl3", coefficient: 2 },
      { formula: "H2S", coefficient: 3 },
    ],
    right: [
      { formula: "Bi2S3", coefficient: 1 },
      { formula: "HCL", coefficient: 6 },
    ],
  },
  {
    left: [
      { formula: "NaCN", coefficient: 2 },
      { formula: "H2SO4", coefficient: 1 },
    ],
    right: [
      { formula: "Na2SO4", coefficient: 1 },
      { formula: "HCN", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "NH3", coefficient: 3 },
      { formula: "H3PO4", coefficient: 1 },
    ],
    right: [{ formula: "(NH4)3PO4", coefficient: 1 }],
  },
  {
    left: [
      { formula: "Mg", coefficient: 1 },
      { formula: "H2SO4", coefficient: 1 },
    ],
    right: [
      { formula: "MgSO4", coefficient: 1 },
      { formula: "H2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "C4H10", coefficient: 2 },
      { formula: "O2", coefficient: 13 },
    ],
    right: [
      { formula: "CO2", coefficient: 8 },
      { formula: "H2O", coefficient: 10 },
    ],
  },
  {
    left: [
      { formula: "H2O", coefficient: 11 },
      { formula: "CO2", coefficient: 12 },
    ],
    right: [
      { formula: "C12H22O11", coefficient: 1 },
      { formula: "O2", coefficient: 12 },
    ],
  },
  {
    left: [
      { formula: "H2O", coefficient: 1 },
      { formula: "C", coefficient: 1 },
    ],
    right: [
      { formula: "H2", coefficient: 1 },
      { formula: "CO", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "S", coefficient: 1 },
      { formula: "O2", coefficient: 1 },
    ],
    right: [{ formula: "SO2", coefficient: 1 }],
  },
  {
    left: [
      { formula: "SO2", coefficient: 2 },
      { formula: "O2", coefficient: 1 },
    ],
    right: [{ formula: "SO3", coefficient: 2 }],
  },
  {
    left: [
      { formula: "NaOH", coefficient: 1 },
      { formula: "KHC8H4O4", coefficient: 1 },
    ],
    right: [
      { formula: "NaKC8H4O4", coefficient: 1 },
      { formula: "H2O", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "OH<sup>-</sup>", coefficient: 1 },
      { formula: "HC8H4O4<sup>-</sup>", coefficient: 1 },
    ],
    right: [
      { formula: "C8H4O4<sup>2-</sup>", coefficient: 1 },
      { formula: "H2O", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "NaOH", coefficient: 2 },
      { formula: "H2SO4", coefficient: 1 },
    ],
    right: [
      { formula: "Na2SO4", coefficient: 1 },
      { formula: "H2O", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "OH<sup>-</sup>", coefficient: 1 },
      { formula: "H<sup></sup>", coefficient: 1 },
    ],
    right: [{ formula: "H2O", coefficient: 1 }],
  },
  {
    left: [
      { formula: "CO3<sup>2-</sup>", coefficient: 1 },
      { formula: "H<sup></sup>", coefficient: 2 },
    ],
    right: [
      { formula: "CO2", coefficient: 1 },
      { formula: "H2O", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "H3PO4", coefficient: 1 },
      { formula: "OH<sup>-</sup>", coefficient: 2 },
    ],
    right: [
      { formula: "HPO4<sup>2-</sup>", coefficient: 1 },
      { formula: "H2O", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "FeS", coefficient: 1 },
      { formula: "HCl", coefficient: 2 },
    ],
    right: [
      { formula: "FeCl2", coefficient: 1 },
      { formula: "H2S", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "CaO", coefficient: 1 },
      { formula: "HCl", coefficient: 2 },
    ],
    right: [
      { formula: "CaCl2", coefficient: 1 },
      { formula: "H2O", coefficient: 1 },
    ],
  },
  {
    left: [{ formula: "C6H5N2Cl", coefficient: 1 }],
    right: [
      { formula: "C6H5Cl", coefficient: 1 },
      { formula: "N2", coefficient: 1 },
    ],
  },
  {
    left: [{ formula: "CH3CHO", coefficient: 1 }],
    right: [
      { formula: "CH4", coefficient: 1 },
      { formula: "CO", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "CH3COF", coefficient: 1 },
      { formula: "H2O", coefficient: 1 },
    ],
    right: [
      { formula: "CH3COOH", coefficient: 1 },
      { formula: "HF", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "NO", coefficient: 2 },
      { formula: "Cl2", coefficient: 1 },
    ],
    right: [{ formula: "NOCl", coefficient: 2 }],
  },
  {
    left: [{ formula: "N2O5", coefficient: 2 }],
    right: [
      { formula: "NO2", coefficient: 4 },
      { formula: "O2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "P", coefficient: 2 },
      { formula: "Br2", coefficient: 3 },
    ],
    right: [{ formula: "PBr3", coefficient: 2 }],
  },
  {
    left: [
      { formula: "CoO", coefficient: 4 },
      { formula: "O2", coefficient: 1 },
    ],
    right: [{ formula: "Co2O3", coefficient: 2 }],
  },
  {
    left: [
      { formula: "PCl5", coefficient: 1 },
      { formula: "H2O", coefficient: 4 },
    ],
    right: [
      { formula: "H3PO4", coefficient: 1 },
      { formula: "HCl", coefficient: 5 },
    ],
  },
  {
    left: [
      { formula: "C6H12O2", coefficient: 1 },
      { formula: "O2", coefficient: 8 },
    ],
    right: [
      { formula: "CO2", coefficient: 6 },
      { formula: "H2O", coefficient: 6 },
    ],
  },
  {
    left: [
      { formula: "Fe2O3", coefficient: 2 },
      { formula: "C", coefficient: 3 },
    ],
    right: [
      { formula: "Fe", coefficient: 4 },
      { formula: "CO2", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "Ba", coefficient: 2 },
      { formula: "O2", coefficient: 1 },
    ],
    right: [{ formula: "BaO", coefficient: 2 }],
  },
  {
    left: [
      { formula: "Al", coefficient: 2 },
      { formula: "S", coefficient: 3 },
    ],
    right: [{ formula: "Al2S3", coefficient: 1 }],
  },
  {
    left: [
      { formula: "ZnS", coefficient: 1 },
      { formula: "O2", coefficient: 3 },
    ],
    right: [
      { formula: "ZnO", coefficient: 2 },
      { formula: "SO2", coefficient: 2 },
    ],
  },
  {
    left: [{ formula: "C6H12O6", coefficient: 1 }],
    right: [
      { formula: "C2H5OH", coefficient: 2 },
      { formula: "CO2", coefficient: 2 },
    ],
  },
  {
    left: [{ formula: "C7H14", coefficient: 1 }],
    right: [
      { formula: "C7H8", coefficient: 1 },
      { formula: "H2", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "Al", coefficient: 2 },
      { formula: "Cr2O3", coefficient: 1 },
    ],
    right: [
      { formula: "Al2O3", coefficient: 1 },
      { formula: "Cr", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "CS2", coefficient: 1 },
      { formula: "Cl2", coefficient: 3 },
    ],
    right: [
      { formula: "CCl4", coefficient: 1 },
      { formula: "S2Cl2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "C", coefficient: 5 },
      { formula: "SO2", coefficient: 2 },
    ],
    right: [
      { formula: "CS2", coefficient: 1 },
      { formula: "CO", coefficient: 4 },
    ],
  },
  {
    left: [
      { formula: "Al", coefficient: 2 },
      { formula: "MnO", coefficient: 3 },
    ],
    right: [
      { formula: "Al2O3", coefficient: 1 },
      { formula: "Mn", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "Ca(OH)2", coefficient: 3 },
      { formula: "H3PO4", coefficient: 2 },
    ],
    right: [
      { formula: "Ca3(PO4)2", coefficient: 1 },
      { formula: "H2O", coefficient: 6 },
    ],
  },
  {
    left: [
      { formula: "NO", coefficient: 2 },
      { formula: "O2", coefficient: 1 },
    ],
    right: [{ formula: "NO2", coefficient: 2 }],
  },
  {
    left: [
      { formula: "C4H8O", coefficient: 2 },
      { formula: "O2", coefficient: 11 },
    ],
    right: [
      { formula: "CO2", coefficient: 8 },
      { formula: "H2O", coefficient: 8 },
    ],
  },
  {
    left: [{ formula: "NaNO3", coefficient: 2 }],
    right: [
      { formula: "NaNO2", coefficient: 2 },
      { formula: "O2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "C4H10O", coefficient: 1 },
      { formula: "O2", coefficient: 6 },
    ],
    right: [
      { formula: "CO2", coefficient: 4 },
      { formula: "H2O", coefficient: 5 },
    ],
  },
  {
    left: [
      { formula: "CaH2", coefficient: 1 },
      { formula: "H2O", coefficient: 2 },
    ],
    right: [
      { formula: "Ca(OH)2", coefficient: 1 },
      { formula: "H2", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "N2H4", coefficient: 1 },
      { formula: "H2O2", coefficient: 2 },
    ],
    right: [
      { formula: "N2", coefficient: 1 },
      { formula: "H2O", coefficient: 4 },
    ],
  },
  {
    left: [
      { formula: "P4", coefficient: 1 },
      { formula: "O2", coefficient: 5 },
    ],
    right: [{ formula: "P4O10", coefficient: 1 }],
  },
  {
    left: [{ formula: "(NH4)2Cr2O7", coefficient: 1 }],
    right: [
      { formula: "Cr2O3", coefficient: 1 },
      { formula: "N2", coefficient: 1 },
      { formula: "H2O", coefficient: 4 },
    ],
  },
  {
    left: [{ formula: "KClO3", coefficient: 2 }],
    right: [
      { formula: "KCl", coefficient: 2 },
      { formula: "O2", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "H2S", coefficient: 2 },
      { formula: "O2", coefficient: 3 },
    ],
    right: [
      { formula: "H2O", coefficient: 2 },
      { formula: "SO2", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "NH3", coefficient: 4 },
      { formula: "O2", coefficient: 5 },
    ],
    right: [
      { formula: "NO", coefficient: 4 },
      { formula: "H2O", coefficient: 6 },
    ],
  },
  {
    left: [
      { formula: "C2H4", coefficient: 1 },
      { formula: "O2", coefficient: 3 },
    ],
    right: [
      { formula: "CO2", coefficient: 2 },
      { formula: "H2O", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "PCl3", coefficient: 1 },
      { formula: "H2O", coefficient: 3 },
    ],
    right: [
      { formula: "H3PO3", coefficient: 1 },
      { formula: "HCl", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "Fe", coefficient: 1 },
      { formula: "FeCl3", coefficient: 2 },
    ],
    right: [{ formula: "FeCl2", coefficient: 3 }],
  },
  {
    left: [
      { formula: "C3H6O", coefficient: 2 },
      { formula: "O2", coefficient: 5 },
    ],
    right: [
      { formula: "CO", coefficient: 6 },
      { formula: "H2O", coefficient: 6 },
    ],
  },
  {
    left: [
      { formula: "C3H6", coefficient: 2 },
      { formula: "O2", coefficient: 9 },
    ],
    right: [
      { formula: "CO2", coefficient: 6 },
      { formula: "H2O", coefficient: 6 },
    ],
  },
  {
    left: [
      { formula: "C3H6", coefficient: 1 },
      { formula: "O2", coefficient: 3 },
    ],
    right: [
      { formula: "CO", coefficient: 3 },
      { formula: "H2O", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "HCl", coefficient: 3 },
      { formula: "Na3PO4", coefficient: 1 },
    ],
    right: [
      { formula: "H3PO4", coefficient: 1 },
      { formula: "NaCl", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "F2", coefficient: 2 },
      { formula: "H2O", coefficient: 2 },
    ],
    right: [
      { formula: "HF", coefficient: 4 },
      { formula: "O2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "Fe3O4", coefficient: 1 },
      { formula: "H2", coefficient: 4 },
    ],
    right: [
      { formula: "Fe", coefficient: 3 },
      { formula: "H2O", coefficient: 4 },
    ],
  },
  {
    left: [
      { formula: "K2O", coefficient: 1 },
      { formula: "H2O", coefficient: 1 },
    ],
    right: [{ formula: "KOH", coefficient: 2 }],
  },
  {
    left: [
      { formula: "NH3", coefficient: 4 },
      { formula: "O2", coefficient: 5 },
    ],
    right: [
      { formula: "NO", coefficient: 4 },
      { formula: "H2O", coefficient: 6 },
    ],
  },
  {
    left: [{ formula: "NaHCO3", coefficient: 2 }],
    right: [
      { formula: "Na2CO3", coefficient: 1 },
      { formula: "CO2", coefficient: 1 },
      { formula: "H2O", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "NO2", coefficient: 3 },
      { formula: "H2O", coefficient: 1 },
    ],
    right: [
      { formula: "HNO3", coefficient: 2 },
      { formula: "NO", coefficient: 1 },
    ],
  },
  {
    left: [{ formula: "H2O2", coefficient: 2 }],
    right: [
      { formula: "H2O", coefficient: 2 },
      { formula: "O2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "CH4", coefficient: 1 },
      { formula: "Cl2", coefficient: 4 },
    ],
    right: [
      { formula: "HCl", coefficient: 4 },
      { formula: "CCl4", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "Na2SO4", coefficient: 1 },
      { formula: "C", coefficient: 2 },
    ],
    right: [
      { formula: "Na2S", coefficient: 1 },
      { formula: "CO2", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "C7H16", coefficient: 1 },
      { formula: "O2", coefficient: 11 },
    ],
    right: [
      { formula: "CO2", coefficient: 7 },
      { formula: "H2O", coefficient: 8 },
    ],
  },
  {
    left: [{ formula: "HNO3", coefficient: 4 }],
    right: [
      { formula: "NO2", coefficient: 4 },
      { formula: "H2O", coefficient: 2 },
      { formula: "O2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "FeS2", coefficient: 4 },
      { formula: "O2", coefficient: 11 },
    ],
    right: [
      { formula: "Fe2O3", coefficient: 2 },
      { formula: "SO2", coefficient: 8 },
    ],
  },
  {
    left: [{ formula: "Li3N", coefficient: 2 }],
    right: [
      { formula: "Li", coefficient: 6 },
      { formula: "N2", coefficient: 1 },
    ],
  },
  {
    left: [{ formula: "Ag2CO3", coefficient: 2 }],
    right: [
      { formula: "Ag", coefficient: 4 },
      { formula: "CO2", coefficient: 2 },
      { formula: "O2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "SiO2", coefficient: 1 },
      { formula: "C", coefficient: 3 },
    ],
    right: [
      { formula: "SiC", coefficient: 1 },
      { formula: "CO", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "CO2", coefficient: 3 },
      { formula: "H2O", coefficient: 4 },
    ],
    right: [
      { formula: "C3H8", coefficient: 1 },
      { formula: "O2", coefficient: 5 },
    ],
  },
  {
    left: [
      { formula: "HNO3", coefficient: 2 },
      { formula: "NO", coefficient: 1 },
    ],
    right: [
      { formula: "NO2", coefficient: 3 },
      { formula: "H2O", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "N2", coefficient: 1 },
      { formula: "H2O", coefficient: 4 },
    ],
    right: [
      { formula: "H2O2", coefficient: 2 },
      { formula: "N2H4", coefficient: 1 },
    ],
  },
  {
    left: [{ formula: "NaN3", coefficient: 2 }],
    right: [
      { formula: "Na", coefficient: 2 },
      { formula: "N2", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "KO2", coefficient: 4 },
      { formula: "CO2", coefficient: 2 },
    ],
    right: [
      { formula: "K2CO3", coefficient: 2 },
      { formula: "O2", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "N2O5", coefficient: 1 },
      { formula: "H2O", coefficient: 1 },
    ],
    right: [{ formula: "HNO3", coefficient: 2 }],
  },
  {
    left: [
      { formula: "NH3", coefficient: 2 },
      { formula: "CO2", coefficient: 1 },
    ],
    right: [
      { formula: "CO(NH2)2", coefficient: 1 },
      { formula: "H2O", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "H2S", coefficient: 2 },
      { formula: "SO2", coefficient: 1 },
    ],
    right: [
      { formula: "S", coefficient: 3 },
      { formula: "H2O", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "CO2", coefficient: 3 },
      { formula: "H2O", coefficient: 4 },
    ],
    right: [
      { formula: "C3H8", coefficient: 1 },
      { formula: "O2", coefficient: 5 },
    ],
  },
  {
    left: [
      { formula: "CO", coefficient: 3 },
      { formula: "H2", coefficient: 7 },
    ],
    right: [
      { formula: "C3H8", coefficient: 1 },
      { formula: "H2O", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "Al", coefficient: 2 },
      { formula: "HCl", coefficient: 6 },
    ],
    right: [
      { formula: "AlCl3", coefficient: 2 },
      { formula: "H2", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "H2S", coefficient: 2 },
      { formula: "O2", coefficient: 3 },
    ],
    right: [
      { formula: "SO2", coefficient: 2 },
      { formula: "H2O", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "CCl4", coefficient: 1 },
      { formula: "HF", coefficient: 2 },
    ],
    right: [
      { formula: "CCl2F2", coefficient: 1 },
      { formula: "HCl", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "CaCN2", coefficient: 1 },
      { formula: "H2O", coefficient: 3 },
    ],
    right: [
      { formula: "CaCO3", coefficient: 1 },
      { formula: "NH3", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "Fe", coefficient: 2 },
      { formula: "Cl2", coefficient: 3 },
    ],
    right: [{ formula: "FeCl3", coefficient: 2 }],
  },
  {
    left: [{ formula: "N2O", coefficient: 2 }],
    right: [
      { formula: "N2", coefficient: 2 },
      { formula: "O2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "CO", coefficient: 1 },
      { formula: "H2", coefficient: 2 },
    ],
    right: [{ formula: "CH3OH", coefficient: 1 }],
  },
  {
    left: [
      { formula: "SO2", coefficient: 2 },
      { formula: "O2", coefficient: 1 },
    ],
    right: [{ formula: "SO3", coefficient: 2 }],
  },
  {
    left: [{ formula: "PC15", coefficient: 1 }],
    right: [
      { formula: "PC13", coefficient: 1 },
      { formula: "C12", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "Na", coefficient: 1 },
      { formula: "O2", coefficient: 1 },
    ],
    right: [{ formula: "Na2O", coefficient: 1 }],
  },
  {
    left: [
      { formula: "H2", coefficient: 4 },
      { formula: "C12", coefficient: 1 },
    ],
    right: [{ formula: "HC1", coefficient: 2 }],
  },
  {
    left: [
      { formula: "P", coefficient: 2 },
      { formula: "O2", coefficient: 3 },
    ],
    right: [{ formula: "P2O3", coefficient: 2 }],
  },
  {
    left: [
      { formula: "Cu", coefficient: 2 },
      { formula: "S", coefficient: 1 },
    ],
    right: [{ formula: "Cu2S", coefficient: 1 }],
  },
  {
    left: [{ formula: "NaNO3", coefficient: 2 }],
    right: [
      { formula: "NaNO2", coefficient: 1 },
      { formula: "O2", coefficient: 1 },
    ],
  },
  {
    left: [{ formula: "BaO2", coefficient: 2 }],
    right: [
      { formula: "BaO", coefficient: 2 },
      { formula: "O2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "A1", coefficient: 2 },
      { formula: "C12", coefficient: 3 },
    ],
    right: [{ formula: "A1C13", coefficient: 2 }],
  },
  {
    left: [
      { formula: "P4", coefficient: 1 },
      { formula: "O2", coefficient: 3 },
    ],
    right: [{ formula: "P4O10", coefficient: 1 }],
  },
  {
    left: [
      { formula: "H2", coefficient: 3 },
      { formula: "N2", coefficient: 1 },
    ],
    right: [{ formula: "NH3", coefficient: 2 }],
  },
  {
    left: [
      { formula: "A1", coefficient: 2 },
      { formula: "HC1", coefficient: 6 },
    ],
    right: [
      { formula: "A1C13", coefficient: 2 },
      { formula: "H2", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "Mg", coefficient: 3 },
      { formula: "N2", coefficient: 1 },
    ],
    right: [{ formula: "Mg3N2", coefficient: 1 }],
  },
  {
    left: [
      { formula: "C4H8O", coefficient: 2 },
      { formula: "O2", coefficient: 11 },
    ],
    right: [
      { formula: "CO2", coefficient: 8 },
      { formula: "H2O", coefficient: 8 },
    ],
  },
  {
    left: [
      { formula: "P", coefficient: 2 },
      { formula: "Br2", coefficient: 3 },
    ],
    right: [{ formula: "PBr3", coefficient: 2 }],
  },
  {
    left: [
      { formula: "CoO", coefficient: 4 },
      { formula: "O2", coefficient: 1 },
    ],
    right: [{ formula: "Co2O3", coefficient: 2 }],
  },
  {
    left: [
      { formula: "PCl5", coefficient: 1 },
      { formula: "H2O", coefficient: 4 },
    ],
    right: [
      { formula: "H3PO4", coefficient: 1 },
      { formula: "HCl", coefficient: 5 },
    ],
  },
  {
    left: [
      { formula: "C6H12O2", coefficient: 1 },
      { formula: "O2", coefficient: 8 },
    ],
    right: [
      { formula: "CO2", coefficient: 6 },
      { formula: "H2O", coefficient: 6 },
    ],
  },
  {
    left: [
      { formula: "Fe2O3", coefficient: 2 },
      { formula: "C", coefficient: 3 },
    ],
    right: [
      { formula: "Fe", coefficient: 4 },
      { formula: "CO2", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "Ba", coefficient: 2 },
      { formula: "O2", coefficient: 1 },
    ],
    right: [{ formula: "BaO", coefficient: 2 }],
  },
  {
    left: [
      { formula: "Al", coefficient: 2 },
      { formula: "S", coefficient: 3 },
    ],
    right: [{ formula: "Al2S3", coefficient: 1 }],
  },
  {
    left: [
      { formula: "ZnS", coefficient: 1 },
      { formula: "O2", coefficient: 3 },
    ],
    right: [
      { formula: "ZnO", coefficient: 2 },
      { formula: "SO2", coefficient: 2 },
    ],
  },
  {
    left: [{ formula: "C6H12O6", coefficient: 1 }],
    right: [
      { formula: "C2H5OH", coefficient: 2 },
      { formula: "CO2", coefficient: 2 },
    ],
  },
  {
    left: [{ formula: "C7H14", coefficient: 1 }],
    right: [
      { formula: "C7H8", coefficient: 1 },
      { formula: "H2", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "Al", coefficient: 2 },
      { formula: "Cr2O3", coefficient: 1 },
    ],
    right: [
      { formula: "Al2O3", coefficient: 1 },
      { formula: "Cr", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "CS2", coefficient: 1 },
      { formula: "Cl2", coefficient: 3 },
    ],
    right: [
      { formula: "CCl4", coefficient: 1 },
      { formula: "S2Cl2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "C", coefficient: 5 },
      { formula: "SO2", coefficient: 2 },
    ],
    right: [
      { formula: "CS2", coefficient: 1 },
      { formula: "CO", coefficient: 4 },
    ],
  },
  {
    left: [
      { formula: "Al", coefficient: 2 },
      { formula: "MnO", coefficient: 3 },
    ],
    right: [
      { formula: "Al2O3", coefficient: 1 },
      { formula: "Mn", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "Ca(OH)2", coefficient: 3 },
      { formula: "H3PO4", coefficient: 2 },
    ],
    right: [
      { formula: "Ca3(PO4)2", coefficient: 1 },
      { formula: "OH", coefficient: 6 },
    ],
  },
  {
    left: [
      { formula: "NO", coefficient: 2 },
      { formula: "O2", coefficient: 1 },
    ],
    right: [{ formula: "NO2", coefficient: 2 }],
  },
  {
    left: [
      { formula: "C4H8O", coefficient: 2 },
      { formula: "O2", coefficient: 11 },
    ],
    right: [
      { formula: "CO2", coefficient: 8 },
      { formula: "H2O", coefficient: 8 },
    ],
  },
  {
    left: [{ formula: "NaNO3", coefficient: 2 }],
    right: [
      { formula: "NaNO2", coefficient: 2 },
      { formula: "O2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "C4H10O", coefficient: 1 },
      { formula: "O2", coefficient: 6 },
    ],
    right: [
      { formula: "CO2", coefficient: 4 },
      { formula: "H2O", coefficient: 5 },
    ],
  },
  {
    left: [
      { formula: "CaH2", coefficient: 1 },
      { formula: "H2O", coefficient: 2 },
    ],
    right: [
      { formula: "Ca(OH)2", coefficient: 1 },
      { formula: "H2", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "N2H4", coefficient: 1 },
      { formula: "H2O2", coefficient: 2 },
    ],
    right: [
      { formula: "N2", coefficient: 1 },
      { formula: "H2O", coefficient: 4 },
    ],
  },
  {
    left: [
      { formula: "P4", coefficient: 1 },
      { formula: "O2", coefficient: 5 },
    ],
    right: [{ formula: "P4O10", coefficient: 1 }],
  },
  {
    left: [{ formula: "(NH4)2Cr2O7", coefficient: 1 }],
    right: [
      { formula: "Cr2O3", coefficient: 1 },
      { formula: "N2", coefficient: 1 },
      { formula: "H2O", coefficient: 4 },
    ],
  },
  {
    left: [{ formula: "KClO3", coefficient: 2 }],
    right: [
      { formula: "KCl", coefficient: 2 },
      { formula: "O2", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "H2S", coefficient: 2 },
      { formula: "O2", coefficient: 3 },
    ],
    right: [
      { formula: "H2O", coefficient: 2 },
      { formula: "SO2", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "NH3", coefficient: 4 },
      { formula: "O2", coefficient: 5 },
    ],
    right: [
      { formula: "NO", coefficient: 4 },
      { formula: "H2O", coefficient: 6 },
    ],
  },
  {
    left: [
      { formula: "C2H4", coefficient: 1 },
      { formula: "O2", coefficient: 3 },
    ],
    right: [
      { formula: "CO2", coefficient: 2 },
      { formula: "H2O", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "PCl3", coefficient: 1 },
      { formula: "H2O", coefficient: 3 },
    ],
    right: [
      { formula: "H3PO3", coefficient: 1 },
      { formula: "HCl", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "Fe", coefficient: 1 },
      { formula: "FeCl3", coefficient: 2 },
    ],
    right: [{ formula: "FeCl2", coefficient: 3 }],
  },
  {
    left: [
      { formula: "C3H6O", coefficient: 2 },
      { formula: "O2", coefficient: 5 },
    ],
    right: [
      { formula: "CO", coefficient: 6 },
      { formula: "H2O", coefficient: 6 },
    ],
  },
  {
    left: [
      { formula: "C3H6", coefficient: 2 },
      { formula: "O2", coefficient: 9 },
    ],
    right: [
      { formula: "CO2", coefficient: 6 },
      { formula: "H2O", coefficient: 6 },
    ],
  },
  {
    left: [
      { formula: "C3H6", coefficient: 1 },
      { formula: "O2", coefficient: 3 },
    ],
    right: [
      { formula: "CO", coefficient: 3 },
      { formula: "H2O", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "HCl", coefficient: 3 },
      { formula: "Na3PO4", coefficient: 1 },
    ],
    right: [
      { formula: "H3PO4", coefficient: 1 },
      { formula: "NaCl", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "F2", coefficient: 2 },
      { formula: "H2O", coefficient: 2 },
    ],
    right: [
      { formula: "HF", coefficient: 4 },
      { formula: "O2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "Fe3O4", coefficient: 1 },
      { formula: "H2", coefficient: 4 },
    ],
    right: [
      { formula: "Fe", coefficient: 3 },
      { formula: "H2O", coefficient: 4 },
    ],
  },
  {
    left: [
      { formula: "K2O", coefficient: 1 },
      { formula: "H2O", coefficient: 1 },
    ],
    right: [{ formula: "KOH", coefficient: 2 }],
  },
  {
    left: [
      { formula: "NH3", coefficient: 4 },
      { formula: "O2", coefficient: 5 },
    ],
    right: [
      { formula: "NO", coefficient: 4 },
      { formula: "H2O", coefficient: 6 },
    ],
  },
  {
    left: [{ formula: "NaHCO3", coefficient: 2 }],
    right: [
      { formula: "Na2CO3", coefficient: 1 },
      { formula: "CO2", coefficient: 1 },
      { formula: "H2O", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "NO2", coefficient: 3 },
      { formula: "H2O", coefficient: 1 },
    ],
    right: [
      { formula: "HNO3", coefficient: 2 },
      { formula: "NO", coefficient: 1 },
    ],
  },
  {
    left: [{ formula: "H2O2", coefficient: 2 }],
    right: [
      { formula: "H2O", coefficient: 2 },
      { formula: "O2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "CH4", coefficient: 1 },
      { formula: "Cl2", coefficient: 4 },
    ],
    right: [
      { formula: "HCl", coefficient: 4 },
      { formula: "CCl4", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "Na2SO4", coefficient: 1 },
      { formula: "C", coefficient: 2 },
    ],
    right: [
      { formula: "Na2S", coefficient: 1 },
      { formula: "CO2", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "C7H16", coefficient: null },
      { formula: "O2", coefficient: null },
    ],
    right: [
      { formula: "CO2", coefficient: null },
      { formula: "H2O", coefficient: null },
    ],
  },
  {
    left: [{ formula: "HNO3", coefficient: 4 }],
    right: [
      { formula: "NO2", coefficient: 4 },
      { formula: "H2O", coefficient: 2 },
      { formula: "O2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "FeS2", coefficient: 4 },
      { formula: "O2", coefficient: 11 },
    ],
    right: [
      { formula: "Fe2O3", coefficient: 2 },
      { formula: "SO2", coefficient: 8 },
    ],
  },
  {
    left: [{ formula: "Li3N", coefficient: 2 }],
    right: [
      { formula: "Li", coefficient: 6 },
      { formula: "N2", coefficient: 1 },
    ],
  },
  {
    left: [{ formula: "Ag2CO3", coefficient: 2 }],
    right: [
      { formula: "Ag", coefficient: 4 },
      { formula: "CO2", coefficient: 2 },
      { formula: "O2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "SiO2", coefficient: 1 },
      { formula: "C", coefficient: 3 },
    ],
    right: [
      { formula: "SiC", coefficient: 1 },
      { formula: "CO", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "CO2", coefficient: 3 },
      { formula: "H2O", coefficient: 4 },
    ],
    right: [
      { formula: "C3H8", coefficient: 1 },
      { formula: "O2", coefficient: 5 },
    ],
  },
  {
    left: [
      { formula: "HNO3", coefficient: 2 },
      { formula: "NO", coefficient: 1 },
    ],
    right: [
      { formula: "NO2", coefficient: 3 },
      { formula: "H2O", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "N2", coefficient: 1 },
      { formula: "H2O", coefficient: 4 },
    ],
    right: [
      { formula: "H2O2", coefficient: 2 },
      { formula: "N2H4", coefficient: 1 },
    ],
  },
  {
    left: [{ formula: "NaN3", coefficient: 2 }],
    right: [
      { formula: "Na", coefficient: 2 },
      { formula: "N2", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "KO2", coefficient: 4 },
      { formula: "CO2", coefficient: 2 },
    ],
    right: [
      { formula: "K2CO3", coefficient: 2 },
      { formula: "O2", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "N2O5", coefficient: 1 },
      { formula: "H2O", coefficient: 1 },
    ],
    right: [{ formula: "HNO3", coefficient: 2 }],
  },
  {
    left: [
      { formula: "NH3", coefficient: 2 },
      { formula: "CO2", coefficient: 1 },
    ],
    right: [
      { formula: "CO(NH2)2", coefficient: 1 },
      { formula: "H2O", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "H2S", coefficient: 2 },
      { formula: "SO2", coefficient: 1 },
    ],
    right: [
      { formula: "S", coefficient: 3 },
      { formula: "H2O", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "CO2", coefficient: 3 },
      { formula: "H2O", coefficient: 4 },
    ],
    right: [
      { formula: "C3H8", coefficient: 1 },
      { formula: "O2", coefficient: 5 },
    ],
  },
  {
    left: [
      { formula: "CO", coefficient: 3 },
      { formula: "H2", coefficient: 7 },
    ],
    right: [
      { formula: "C3H8", coefficient: 1 },
      { formula: "H2O", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "Al", coefficient: 2 },
      { formula: "HCl", coefficient: 6 },
    ],
    right: [
      { formula: "AlCl3", coefficient: 2 },
      { formula: "H2", coefficient: 3 },
    ],
  },
  {
    left: [
      { formula: "H2S", coefficient: 2 },
      { formula: "O2", coefficient: 3 },
    ],
    right: [
      { formula: "SO2", coefficient: 2 },
      { formula: "H2O", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "CCl4", coefficient: 1 },
      { formula: "HF", coefficient: 2 },
    ],
    right: [
      { formula: "CCl2F2", coefficient: 1 },
      { formula: "HCl", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "CaCN2", coefficient: 1 },
      { formula: "H2O", coefficient: 3 },
    ],
    right: [
      { formula: "CaCO3", coefficient: 1 },
      { formula: "NH3", coefficient: 2 },
    ],
  },
  {
    left: [
      { formula: "Fe", coefficient: 2 },
      { formula: "Cl2", coefficient: 3 },
    ],
    right: [{ formula: "FeCl3", coefficient: 2 }],
  },
  {
    left: [{ formula: "N2O", coefficient: 2 }],
    right: [
      { formula: "N2", coefficient: 2 },
      { formula: "O2", coefficient: 1 },
    ],
  },
  {
    left: [
      { formula: "CO", coefficient: 1 },
      { formula: "H2", coefficient: 2 },
    ],
    right: [{ formula: "CH3OH", coefficient: 1 }],
  },
];

const r = require("random");
const compoundUtils = require("./compoundUtils");

const getEquation = (idx) => {
  const equation = equations[idx];
  const baseMass =
    equation.left[0].coefficient *
    compoundUtils.getCompoundMass(equation.left[0].formula);
  equation.left = equation.left.map((c) => findFactor(c, baseMass));
  equation.right = equation.right.map((c) => findFactor(c, baseMass));
  return equation;
};
exports.getEquation = getEquation;

exports.getRandomEquation = () => {
  const idx = r.int(0, equations.length - 1);
  return getEquation(idx);
};

exports.getRandomEquationWithFourReagents = () => {
  const validIdx = equations.reduce((validIdx, eq, idx) => {
    if (eq.left.length === 2 && eq.right.length === 2) {
      validIdx.push(idx);
    }
    return validIdx;
  }, []);
  return getEquation(validIdx[r.int(0, validIdx.length - 1)]);
};

exports.getEquationHtml = (equation) => {
  return `${compoundUtils.getHtmlWithCoefficient(
    equation.left[0].coefficient,
    equation.left[0].formula
  )} + ${compoundUtils.getHtmlWithCoefficient(
    equation.left[1].coefficient,
    equation.left[1].formula
  )} => ${compoundUtils.getHtmlWithCoefficient(
    equation.right[0].coefficient,
    equation.right[0].formula
  )} + ${compoundUtils.getHtmlWithCoefficient(
    equation.right[1].coefficient,
    equation.right[1].formula
  )}`;
};

const findFactor = (c, baseMass) => {
  c.factor =
    (compoundUtils.getCompoundMass(c.formula) * c.coefficient) / baseMass;
  return c;
};
