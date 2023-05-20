import { GridColDef, GridFilterModel, GridRowsProp } from "@mui/x-data-grid";
import { SelectColumn, SelectColumnOption } from "./SelectColumn.tsx";
import { useState } from "react";

export interface ExampleTableFilter {
  type?: string;
}

export function useExampleTable() {
  const [filters, setFilters] = useState<ExampleTableFilter>();
  const rows: GridRowsProp = [
    { id: 1, name: "Marc", type: "Team lead" },
    { id: 2, name: "John", type: "CTO" },
    { id: 3, name: "Jack", type: "Developer" },
    { id: 4, name: "Zack", type: "Developer" },
    { id: 5, name: "Dimitri", type: "Developer" },
    { id: 6, name: "Josef", type: "Developer" },
    { id: 7, name: "Carla", type: "Developer" },
    { id: 8, name: "Caren", type: "Developer" },
    { id: 9, name: "Madelaine", type: "Team lead" },
    { id: 10, name: "Pascal", type: "Developer" },
    { id: 11, name: "Sergi", type: "Developer" },
    { id: 12, name: "Cloud", type: "Developer" },
  ];

  const typeOptions: SelectColumnOption[] = [
    {
      label: "Team lead",
      value: "Team lead",
    },
    { label: "CTO", value: "CTO" },
    { label: "Developer", value: "Developer" },
  ];

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "type",
      headerName: "Type",
      width: 200,
      filterable: false,
      sortable: false,
      hideable: false,
      disableColumnMenu: true,
      renderHeader: () => (
        <SelectColumn
          label="Type"
          options={typeOptions}
          onChange={(value) =>
            setFilters({
              ...filters,
              type: value,
            })
          }
          selectedValue={filters?.type || ""}
        />
      ),
    },
  ];

  const filterModel: GridFilterModel = {
    items: [
      { id: 1, field: "type", operator: "contains", value: filters?.type },
    ],
  };

  return {
    rows,
    columns,
    filterModel,
  };
}
