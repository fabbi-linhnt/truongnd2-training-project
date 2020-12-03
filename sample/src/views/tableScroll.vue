<template>
  
<div class="fixedTable" id="demo">
  <header class="fixedTable-header">
    <table class="table table-bordered table-header">
      <thead>
        <tr>
          <th id="table-fixed-th">A</th>
          <th>STT</th>
          <th>FirstName</th>
          <th>Age</th>
          <th>Class</th>
          <th>Address</th>
          <th>G</th>
          <th>H</th>
          <th>I</th>
          <th>J</th>
          <th>K</th>
          <th>L</th>
          <th>L</th>
        </tr>
      </thead>
    </table>
  </header>
  <aside class="fixedTable-sidebar">
    <table class="table table-bordered table-sidebar">
      <tbody>
        <tr v-for="(data, index) in data" :key="index">
          <td>{{ data.number }}2222222</td>
        </tr>
      </tbody>
    </table>
  </aside>
  <div class="fixedTable-body">
    <table class="table table-bordered">
      <tbody>
        <tr v-for="(data, index) in data" :key="index">
          <td>{{ data.number }}</td>
          <td>{{ data.class }}</td>
          <td>6</td>
          <td>d</td>
          <td>e</td>
          <td>f</td>
          <td>g</td>
          <td>h</td>
          <td>i</td>
          <td>j</td>
          <td>k</td>
          <td>l</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '2',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '3',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '4',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '4',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '5',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
        {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '2',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '3',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '5',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '4',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '5',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
        {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '2',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '3',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': 'Tran Hong Son',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '4',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '5',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
        {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '2',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '3',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': 'Tran Hong Son',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '4',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '5',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '1',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '2',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '3',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': 'Tran Hong Son',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '4',
         'class': '患者私はし',
         'age': 20
       },
       {
         'number': '1',
         'class': '',
         'age': 20
       },
       {
         'number': '5',
         'class': '',
         'age': 20
       },
        {
         'number': '4',
         'class': '',
         'age': 20
       },
       {
         'number': '1',
         'class': '',
         'age': 20
       },
       {
         'number': '5',
         'class': '',
         'age': 20
       },
       
       
    
      ]
    };
  },
  mounted() {
    let fixedTable = document.getElementsByClassName("fixedTable");
    let body = document.getElementsByClassName("fixedTable-body");
    let sidebar = document.getElementsByClassName("table-sidebar");
    let header = document.getElementsByClassName("table-header");
    console.log(header[0]);

    body[0].addEventListener("scroll", function() {
      console.log('a');
      sidebar[0].style.marginTop = -body[0].scrollTop + 'px';
      header[0].style.marginLeft = -body[0].scrollLeft + 'px';
    })
  },

};
</script>
<style scoped="">
.fixedTable .table {
  background-color: white;
  width: auto;
}
.fixedTable .table tr td,
.fixedTable .table tr th {
  min-width: 100px;
  width: 100px;
  min-height: 20px;
  height: 20px;
  padding: 5px;
  text-align: center;
}
.fixedTable-header {
  text-align: center;
  width: 601px;
  height: 30px;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.fixedTable-sidebar {
  width: 100px;
  height: 278px;
  float: left;
  overflow: hidden;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.fixedTable-body {
  overflow: auto;
  width: 516px;
  height: 295px;
  float: left;
  /* border-bottom: 1px solid #ccc; */
}
/* #table-fixed-th {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
} */
.table-header th:first-child {
  position: sticky;
  left: 0;
  background: Red;
  z-index: 1;
}
@media only screen and (max-width: 1366px) {
  .fixedTable-body {
    overflow: auto;
    width: 503px;
    height: 281px;
    float: left;
    /* border-bottom: 1px solid #ccc; */
  }
}

</style>
