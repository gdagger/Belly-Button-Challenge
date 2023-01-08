// /// GAUGE

// function createGauge(sampleID) {
//     // Use D3 to extract data from API
//     d3.json(url).then(data => {
//     // Store metadata for current sampleID
//     let metadata = data.metadata.filter(item => parseInt(item.id) === parseInt(sampleID))[0];

//     let wfreq = metadata.wfreq;

//     // console.log("hi", wfreq);

//     let gaugeData = [
//         {
//         domain: { x: [0, 1], y: [0, 1] },
//         value: wfreq,
//         title: { text: "Speed" },
//         type: "indicator",
//         mode: "gauge+number",
//         delta: { reference: 380 },
//         gauge: {
//         axis: { range: [null, 9] },
//         steps: [
//             { range: [0, 1], color: "red" },
//             { range: [1, 2], color: "orange" },
//             { range: [2, 3], color: "yellow" },
//             { range: [3, 4], color: "green" },
//             { range: [4, 5], color: "blue" },
//             { range: [5, 6], color: "purple" },
//             { range: [6, 7], color: "pink" },
//             { range: [7, 8], color: "gray" },
//             { range: [8, 9], color: "black" }
//         ]
//         }
//         }
//     ];
    
//     let gaugeLayout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
//     Plotly.newPlot('gauge', gaugeData, gaugeLayout);
//     });
// }

// createGauge('940');
