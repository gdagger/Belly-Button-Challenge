// const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// let jsonData = d3.json(url);

// // Create empty arrays for each of the attributes
// let samplesData = [];
// let ids = [];
// let otu_ids = [];
// let otu_labels = [];
// let sample_values = [];
// let metadata = [];

// jsonData.then(data => {
//   // Fetch list of samples [{id, otu_ids, sample_values, otu_labels},...]
//   samplesData = data.samples;
//   console.log("samplesData", samplesData);

//   metadata = data.metadata;
//   // console.log("metadata", metadata);

//   // Create function that takes in a sample ID and returns an array of the top ten otus
//   function topTenOTU(sampleID, data) {
//     for (let i=0; i<data.length; i++) {
//       if (data[i] === sampleID) {
//         let currentSample = data[i];
//       }
//     }

//     let sortedCurrentOTUids = currentSample;
//     // let sortedCurrentSampleValues = currentSample.sample_values.sort((a,b) => {a.sample_values - b.sample_values})
//     //                                                .slice(0,10);
//     // let sortedCurrentOTULabels = currentSample.otu_labels.sort((a,b) => {a.sample_values - b.sample_values})
//     //                                                .slice(0,10);

//     return(sortedCurrentOTULabels);
//   }

//   console.log("function", topTenOTU('941', samplesData));

  // function initBar() {


  //   console.log("sample", topTenOTUs);

  //   data = [{
  //     x: topTenOTUs.sample_values,
  //     y: samplesData.otu_ids,
  //     type: "bar",
  //     orientation: "h"
  //   }];
      
  //       Plotly.newPlot("bar", data);
  // }

  // initBar();




//   // // Loop to create separate lists for each of the attributes
//   // for (i=0; i<samplesData.length; i++) {
//   //   samplesData.push(data.samples[i]);
//   //   ids.push(sortedBySampleValues[i].id);
//   //   otu_ids.push(samplesData[i].otu_ids);
//   //   otu_labels.push(samplesData[i].otu_labels);
//   //   sample_values.push(samplesData[i].sample_values);
//   //   metadata.push(jsonData.metadata);
  
// });


// // console.log("samples data", samplesData);

// // // Initializes the page with a default plot

// // function updateBar(sampleID) {


// // }

// // function initBubble() {

// // }

// // function updateBar(sampleID) {


// // }

// // console.log("samplesData",samplesData);

// // // Dropdown
// // let selectDataset = d3.select("#selDataset").text();
// // console.log(selectDataset);


// // // Call updatePlotly() when a change takes place to the DOM
// // d3.selectAll("#selDataset").on("change", updatePlotly);

// // // This function is called when a dropdown menu item is selected
// // function updatePlotly() {
// //   // Use D3 to select the dropdown menu
// //   let dropdownMenu = d3.select("#selDataset");
// //   // Assign the value of the dropdown menu option to a variable
// //   let dataset = dropdownMenu.property("value");

// //   // Initialize x and y arrays
// //   let x = [];
// //   let y = [];

// //   if (dataset === 'dataset1') {
// //     x = [1, 2, 3, 4, 5];
// //     y = [1, 2, 4, 8, 16];
// //   }

// //   else if (dataset === 'dataset2') {
// //     x = [10, 20, 30, 40, 50];
// //     y = [1, 10, 100, 1000, 10000];
// //   }

// //   // Note the extra brackets around 'x' and 'y'
// //   Plotly.restyle("plot", "x", [x]);
// //   Plotly.restyle("plot", "y", [y]);
// // }

// // init();