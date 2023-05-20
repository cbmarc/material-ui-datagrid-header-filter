import { DataGrid } from "@mui/x-data-grid";
import { useExampleTable } from "./useEampleTable.tsx";

export function ExampleTable() {
  const { rows, columns, filterModel } = useExampleTable();
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      filterModel={filterModel}
      disableColumnFilter
    />
  );
}
