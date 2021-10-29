import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
@Component
export default class TableCom extends Vue {
  @Prop({ default: true }) private border!: boolean
  @Prop({ default: true }) private stripe!: boolean
  @Prop({ default: false }) private useSelection!: boolean   // 多选
  @Prop({ required: false }) private handleSelectionChange!: any   // 多选
  private name(scope: any) {
    return (
      <div>
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{ scope.row.date }</span>
      </div>
    )
  }
  private columnData: any[] = [
    {
      prop: 'name',
      label: '名称',
      width: '100',
      resizable: false
    },
    {
      prop: 'date',
      label: '日期',
      width: '180',
      render: (scope: any) => {
        // console.log('this.$createElement', this.$createElement);
        const h = this.$createElement
        
        return this.name(scope)
        // return h('div', '哈哈哈')
      }
    },
    {
      prop: 'address',
      label: '地址',
      // width: '100',
    },
  ]

  private tableData: any[] = [
    {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄',
    },
    {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄',
    },
    {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    },
  ]
  // private handleSelectionChange(aa) {
  //   console.log(22, aa);
    
  // }
  render() {
    // return <el-table-column prop={ columnObj.prop } label={ columnObj.label } sortable={ columnObj.sortable } width={ columnObj.width }
    //           {...{
    //             scopedSlots: {
    //               default: scope => {
    //                 return columnObj.hasOwnProperty('render') ? columnObj.render(scope.index, scope.row) : scope.row[columnObj.prop]
    //               }
    //             }
    //           }}
    //         >
    // </el-table-column>
    console.log('this.$attrs', this.$attrs, this.$listeners);
    
    return (
      <el-table
        data={this.tableData}
        border={this.border}
        stripe={this.stripe}
        height="150"
        style="width: 100%"
        {...{props: this.$attrs, on: {'selection-change': this.$listeners.handleSelectionChange }}}
      >
        {
          this.useSelection ? <el-table-column
            type="selection"
            width="55">
          </el-table-column> : null}
        {
          this.columnData.map((item) => {
            const { prop, label, width } = item
            return (
              <el-table-column
                show-overflow-tooltip
                prop={prop}
                label={label}
                width={width}
                {...{
                  scopedSlots: {
                    default: (scope: any) => {
                      return item.render ? item.render(scope) : scope.row[item.prop]
                      // return this.name()
                    }
                  }
                }}
              >
            </el-table-column>
            )
          })
        }

      </el-table>
    )
  }
}