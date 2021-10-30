import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'

import { ITableColumnData } from '../types';
import Pagination from './Pagination.vue'
@Component
export default class TableCom extends Vue {
  @Prop({ default: () => [] }) private columnData!: ITableColumnData[]
  @Prop({ default: () => [] }) private tableData!: any[]
  @Prop({ default: true }) private border!: boolean
  @Prop({ default: true }) private stripe!: boolean
  @Prop({ default: false }) private useSelection!: boolean   // 多选
  // @Prop({ required: false }) private handleSelectionChange!: any   // 多选

  private handleSelectionChange(aa:any) {
    console.log(22, this.$listeners);
     const change = this.$listeners['selection-change']
     change(aa)
  }
  // const paginationEl = () => {
  //   return (
  //   <el-pagination
  //     @size-change="handleSizeChange"
  //     @current-change="handleCurrentChange"
  //     :current-page="currentPage4"
  //     :page-sizes="[100, 200, 300, 400]"
  //     :page-size="100"
  //     layout="total, sizes, prev, pager, next, jumper"
  //     :total="400">
  //   </el-pagination>
  //   )
  // }
  private paginationProps = {
    pageSize: 50,
    total: 200,
  }

  render(h:CreateElement) {
    console.log('this', this);
    
    return (
      <div>
        <el-table
          data={this.tableData}
          border={this.border}
          stripe={this.stripe}
          height="150"
          style="width: 100%"
          // {...{props: this.$attrs, on: {'selection-change': this.handleSelectionChange }}}
          {...{props: this.$attrs, on: this.$listeners}}
        >
          {
            this.useSelection ? <el-table-column
              type="selection"
              width="55">
            </el-table-column> : null}
          {
            this.columnData.map((item) => {
              const { prop, label, width, render, scopedSlots } = item
              const props = { prop, label, width }
              return (
                <el-table-column
                  show-overflow-tooltip
                  {...{
                    props,
                    scopedSlots: {
                      default: (scope: any) => {
                        let el
                        if (scopedSlots) {
                          const e:any = this.$scopedSlots[scopedSlots.customRender]
                          el = h('div', {}, e(scope))
                        } else if (render) {
                          el = item.render(scope)
                        } else {
                          el = scope.row[item.prop]
                        }
                        
                        return el
                      }
                    }
                  }}
                >
              </el-table-column>
              )
            })
          }
        </el-table>
        <Pagination props={this.paginationProps} />
      </div>
    )
  }
}