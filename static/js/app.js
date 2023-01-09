const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Set default sample ID to initialize dashboard
let defaultID = '940';

///// Create function to pull API data for a sample ID and create charts
function createCharts(sampleID = defaultID) {
  // Use D3 to extract data from API
  d3.json(url).then(data => {
    // Store samples information
    let samples = data.samples;
    // Filter sample information to find info for current sample ID
    let sampleData = samples.filter(sample => sample.id === sampleID)[0];
    // Store otu_ids array for current sample ID
    let otu_ids = sampleData.otu_ids;
    // Store sample_values array for current sample ID
    let sample_values = sampleData.sample_values;
    // Store otu_labels array for current sample ID
    let otu_labels = sampleData.otu_labels;

    /// BAR CHART
    let barData = [{
      // Set x values equal to top ten sample values and reverse them so highest value is at top of bar chart
      x: sample_values.slice(0,10).reverse(),
      // Set y values equal to the otu_ids mapped to correct format
      y: otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse(),
      // Set to horizontal bar chart
      type: "bar",
      orientation: 'h',
      // Set text equal to top ten otu_labels
      text: otu_labels.slice(0,10).reverse()
    }];

    let barLayout = {
      width: 450,
      height: 350,
      margin: {
        t: 30,
        b: 0
      }
    };

    // Create bar chart in the "bar" div
    Plotly.newPlot("bar", barData, barLayout);

    /// BUBBLE CHART
    let bubbleData = [{
      // Set x values equal to otu_ids
      x: otu_ids,
      // Set y values equal to the corresponding sample values
      y: sample_values,
      // Set hover text to corresponding otu_labels
      text: otu_labels,
  
      // Set to bubble chart with marker color based on otu_id and marker size based on sample_values
      mode: 'markers',

      marker: {
        color: otu_ids,
        colorscale: "Earth",
        size: sample_values
      }
    }];

    // Customize bubble chart layout
    let bubbleLayout = {
      // Adjust size of chart
      width: 1200,
      height: 600,
      // Add x-axis label
      xaxis: {
        title: {
          text: 'OTU ID',
          }
      },
      margin: {
        t:0
      }
    };

    // Create bubble chart in the "bubble" div
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    /// BONUS: GAUGE CHART
    // Pull metadata for current sample ID
    let metadata = data.metadata.filter(item => parseInt(item.id) === parseInt(sampleID))[0];
    // Store washing frequency value
    let wfreq = metadata.wfreq;

    // 
    let gaugeData = [
      {
        domain: {
          x: [0, 1], y: [0, 1]
        },
        value: wfreq,
        title: { 
          text: "Belly Button Washing Frequency <br><sup>Scrubs per Week</sup>"
        },
        type: "indicator",
        mode: "number+gauge",
        // delta: { reference: 380 },
        gauge: {
          axis: { 
            range: [null, 9],
            visible: true,
            tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
          },
          bar: {
            color: "gray"
          },
          steps: [
            { range: [0, 1], color: 'rgb(230, 232, 233)'},
            { range: [1, 2], color: 'rgb(204, 215, 221)'},
            { range: [2, 3], color: 'rgb(178, 198, 210)'},
            { range: [3, 4], color: 'rgb(153, 181, 199)'},
            { range: [4, 5], color: 'rgb(129, 165, 189)'},
            { range: [5, 6], color: 'rgb(104, 148, 179)'},
            { range: [6, 7], color: 'rgb(79, 131, 169)'},
            { range: [7, 8], color: 'rgb(52, 115, 159)'},
            { range: [8, 9], color: 'rgb(6, 99, 149)'}
          ]
        }
      }
    ];

    let gaugeLayout = { 
      width: 600, 
      height: 500, 
      margin: {t: 0, b: 0} 
    };
    Plotly.newPlot('gauge', gaugeData, gaugeLayout);

  });
}


///// Create function to pull and update metadata for sample ID
function getMetadata(sampleID = defaultID) {
  // Use D3 to extract data from API
  d3.json(url).then(data => {
    // Store metadata for current sampleID
    let metadata = data.metadata.filter(item => parseInt(item.id) === parseInt(sampleID))[0];

    // Create separate arrays for keys and values of demographic data
    let metadataKeys = Object.keys(metadata);
    let metadataValues = Object.values(metadata);

    // Reset demographic text to empty
    let panelBody = d3.select(".panel-body");
    panelBody.html("");

    // Loop through key value pairs in metadata
    for (let i=0; i<metadataKeys.length; i++) {
      // Append new text element to the panel body for each key value pair
      let newTextEl = panelBody.append("text");
      // Add key value pair text to the text element
      newTextEl.text(`${metadataKeys[i]}: ${metadataValues[i]}`);
      // Append linebreak after each piece of information
      newTextEl.append("br");
      
      // No linebreak after last metadata element
      if (i===metadataKeys.length-1) {
        newTextEl.text(`${metadataKeys[i]}: ${metadataValues[i]}`);
      }
    };
  });
}

///// Create function to initialize dashboard and create dropdown menu
function createDropdownMenu() {
  // Use D3 to extract data from API
  d3.json(url).then(data => {
    // Store sample ID names as array
    names = data.names;
    // Loop through sample data to add sample IDs to dropdown menu
    for (i=0; i<names.length; i++) {
      // Select the dropdown menu element using D3
      let dropDownMenu = d3.select("#selDataset");
      // Add new "option" element for every sample in dataset
      let newOption = dropDownMenu.append("option");
      // Set text in each option to the sample ID
      newOption.text(names[i]);
    }
  })
};

///// Create function to update page based on changes in dropdown menu
function optionChanged(sampleID = defaultID) {
  // Update charts to data for selected sample ID
  createCharts(sampleID);
  // Updata demographic info panel for selected sample ID
  getMetadata(sampleID);
}


///// EXECUTING FUNCTIONALITY

// Create dropdown menu of list of IDs 
createDropdownMenu();
// Pull data for selected ID (default is 940) and create charts
createCharts();
// Pull metadata for selected ID (default is 940) and update demographic info panel
getMetadata();


