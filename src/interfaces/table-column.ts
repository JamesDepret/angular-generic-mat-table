export interface TableColumn {
  columnDef: string;
  header: string;
  cell: (any) => string;
}