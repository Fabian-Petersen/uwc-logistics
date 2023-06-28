const vehicleTableColumns = [
  {
    name: "Model",
    selector: (row) => row.model,
    width: "30rem",
  },
  {
    name: "Department",
    selector: (row) => row.department,
    sortable: true,
    width: "25rem",
  },
  {
    name: "entity",
    selector: (row) => row.entity,
    sortable: true,
    width: "20rem",
  },
  {
    name: "Registration",
    selector: (row) => row.registration,
  },
  {
    name: "Fuel",
    selector: (row) => row.fuel,
    sortable: true,
    width: "15rem",
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
];

export default vehicleTableColumns;
