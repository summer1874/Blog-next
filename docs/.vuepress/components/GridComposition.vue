<template>
  <div class="grid-container">
    <div class="container" v-show="gridType === '1'">
      <span>front</span>
      <div class="grid sudoku" >
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>
      <span>ending</span>
    </div>
    <div class="container" v-show="gridType === '2'">
      <span>front</span>
      <div class="grid sudoku inline" >
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>
      <span>ending</span>
    </div>
      <div class="container-100 grid sudoku inline" v-show="gridType === '3'">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'GridComposition',
  props: {
    gridType: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
.grid-container
  .grid 
    display: grid;     
  .container
    min-width: 170px;
    padding: 10px;
    box-shadow: 0px 0px 6px 0px #9a9a9a;
    overflow: hidden;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ;
  .inline 
    display: inline-grid;
  .sudoku
    grid-template-columns: 50px 50px 50px;
    grid-template-rows: 50px 50px 50px;
  .item 
    font-size: 2em;
    line-height: 50px;
    text-align: center;
    border: 1px solid #e5e4e9;
  .item-1 
    background-color: #ef342a;
  .item-2 
    background-color: #f68f26;
  .item-3 
    background-color: #4ba946;
  .item-4 
    background-color: #0376c2;
  .item-5 
    background-color: #c077af;
  .item-6 
    background-color: #f8d29d;
  .item-7 
    background-color: #b5a87f;
  .item-8 
    background-color: #d0e4a9;
  .item-9 
    background-color: #4dc7ec;
  .container-100 
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
</style>