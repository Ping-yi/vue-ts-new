export interface ITableColumnData {
  prop: string
  label: string
  width: string | number
  resizable: boolean
  render: function,
  scopedSlots: {customRender: string}
}

export interface ITableData {
  list: array
  total: number
  
}