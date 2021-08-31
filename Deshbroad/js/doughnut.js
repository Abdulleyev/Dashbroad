new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        // labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
            {
                // label: "Population (millions)",
                backgroundColor: ["#003CFF", "#1EE9B6"],
                data: [27,73]
            }
        ]
    },
    options: {
        title: {
            display: true,
            // text: 'Predicted world population (millions) in 2050'
        }
    }
});

new Chart(document.getElementById("doughnut-chart_2"), {
    type: 'doughnut',
    data: {
        // labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
            {
                // label: "Population (millions)",
                backgroundColor: ["#003CFF", " #1EE9B6"],
                data: [18,82]
            }
        ]
    },
    options: {
        title: {
            display: true,
            // text: 'Predicted world population (millions) in 2050'
        }
    }
});
new Chart(document.getElementById("doughnut-chart_3"), {
    type: 'doughnut',
    data: {
        // labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
            {
                // label: "Population (millions)",
                backgroundColor: ["#003CFF", "#1EE9B6"],
                data: [23,63]
            }
        ]
    },
    options: {
        title: {
            display: true,
            // text: 'Predicted world population (millions) in 2050'
        }
    }
});

































new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: [20     ,1600,1700,1750,1800,1850,1900,1950,1999,2050],
        datasets: [ {
            data: [282,350,411,502,635,809,947,1402,3700,5267],
            label: "Asia",
            borderColor: "#8e5ea2",
            fill: true
        },
        ]
    },
    options: {
        title: {
            display: true,

        }
    }
});