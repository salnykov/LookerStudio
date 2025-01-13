google.charts.load('current', {packages: ['orgchart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Employee');
  data.addColumn('string', 'Manager');

  // Replace this with dynamic data if needed
  data.addRows([
    ['Alice', 'Bob'],
    ['Bob', 'Carol'],
    ['Carol', null],
    ['Dave', 'Alice'],
    ['Eve', 'Bob']
  ]);

  const chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
  chart.draw(data, {allowHtml: true, orientation: 'horizontal'});
}
