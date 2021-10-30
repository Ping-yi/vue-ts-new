<template>
  <div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      :layout="layout"
      :total="total">
    </el-pagination>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component
  export default class  extends Vue {
    @Prop({  }) private sizeChange!: any
    @Prop({  }) private currentChange!: any
    @Prop({ default: 1 }) private currentPage!: number
    @Prop({ default: () => [10, 50, 100, 200] }) private pageSizes!: number[]
    @Prop({ default: 10 }) private pageSize!: string | number
    @Prop({ default: 'total, sizes, prev, pager, next, jumper' }) private layout!: string
    @Prop({ default: 0 }) private total!: number

    private handleSizeChange(aa:number) {
      console.log('handleSizeChange', aa);
      
    }
    private handleCurrentChange(aa:number) {
      console.log('handleCurrentChange', aa);
      
    }
    created() {
      console.log('Pagination', this);
      
    }
    
  }
</script>

<style scoped>

</style>