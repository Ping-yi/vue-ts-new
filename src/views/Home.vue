<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TableCom
      :columnData="columnData"
      :tableData="tableData"
      :useSelection="true" 
      @selection-change="handleSelectionChange"
      >
      <span slot="name" slot-scope="record">
          {{ record.row.name }}
        </span>
      </TableCom>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TableCom from '@/components/TableCom'
import { getTableList } from '@/api/table'

@Component({
  components: { TableCom },
})

export default class Home extends Vue {
  tableData = {}
  private handleSelectionChange(bb:any) {
    console.log('bb', bb);
    
  }
  private columnData: any[] = [
    {
      prop: 'name',
      label: '名称',
      width: '100',
      resizable: false,
      scopedSlots: { customRender: 'name' }
    },
    {
      prop: 'date',
      label: '日期',
      width: '180',
      render: (scope: any) => {
        // console.log('this.$createElement', this.$createElement);
        // const h = this.$createElement
        
        // return this.name(scope)
        // return <div></div>
        return 22
      }
    },
    {
      prop: 'address',
      label: '地址',
      // width: '100',
    },
  ]
  
  private async getTableList() {
    const obj = {
      pageNumber: 1,
      pageSize: 10,
    }

    const data = await getTableList(obj)
    this.tableData = data
  }
  created () {
    this.getTableList()
  }
}
</script>
