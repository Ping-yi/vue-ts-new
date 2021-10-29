<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TableCom :useSelection="true" @handleSelectionChange="handleSelectionChange" msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TableCom from '@/components/TableCom'

@Component({
  components: { TableCom },
})

export default class Home extends Vue {
  private handleSelectionChange(bb:any) {
    console.log('bb', bb);
    
  }
}
</script>
