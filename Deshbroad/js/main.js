anychart.onDocumentReady(function () {

    // create data
    var data = [
        {x: "A", value: 110},
        {x: "B", value: 90},
        {x: "C", value: 120},
        {x: "D", value: 125},
        {x: "E", value: 95}
    ];

    // create a pie chart and set the data
    var chart = anychart.pie(data);

    /* set the inner radius
    (to turn the pie chart into a doughnut chart)*/
    chart.innerRadius("75%");

    // set the position of labels
    var labels = chart.labels();
    labels.position("inside");

    // configure the labels: font, overlap, offset
    labels.fontColor("#000000");
    chart.overlapMode(true);
    chart.insideLabelsOffset("-75%");

    // disable the legend
    chart.legend(false);

    // set the chart title
    chart.title("Doughnut Chart: Inner Labels");

    // set the container id
    chart.container("container");

    // initiate drawing the chart
    chart.draw();
});