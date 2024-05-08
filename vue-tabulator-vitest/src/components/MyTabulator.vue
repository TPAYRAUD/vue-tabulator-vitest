<template>
  <div ref="tableRef"></div>
</template>

<script setup lang="js">
import {onMounted, ref} from 'vue';

//import { TabulatorFull } from 'tabulator-tables';//fixme: this line is replaced by the following to get test works
import TabulatorFull from 'tabulator-tables';

const tabulator = ref();
const tableData = [
  {id: 1, name: "Oli Bob", age: "12", col: "red", dob: ""},
  {id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982"},
  {id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982"},
  {id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980"},
  {id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999"},
];
const tableRef = ref();

onMounted(() => {
  // Instantiate Tabulator when element is mounted
  tabulator.value = new TabulatorFull(tableRef.value, {
    height: 205, // Set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    data: tableData, // Link data to table
    layout: "fitColumns", // Fit columns to width of table (optional)
    columns: [ // Define Table Columns
      {title: "Name", field: "name", width: 150},
      {title: "Age", field: "age", hozAlign: "left", formatter: "progress"},
      {title: "Favourite Color", field: "col"},
      {title: "Date Of Birth", field: "dob", sorter: "date", hozAlign: "center"},
    ]
  });
});
</script>
