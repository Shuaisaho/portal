var plot5;
$(window).load(function () {

         var dashboard;
         var dashboard_level;
// get the table data

         $.ajax({
             url: "/ajax.php",
             method: 'post',
             data: {
                 task:'get_dashboard'
             },
             async: false,
             success: function(result){
                 dashboard = JSON.parse(result);
                 // console.log(dashboard[0]);
             }});

         // Morris.Area({
         //     element: 'line-area-example',
         //     data: [
         //         { y: '2009', a: 10, b: 3 },
         //         { y: '2010', a: 14, b: 5 },
         //         { y: '2011', a: 8, b: 2 },
         //         { y: '2012', a: 20, b: 15 }
         //     ],
         //     xkey: 'y',
         //     ykeys: ['a', 'b'],
         //     labels: ['Series A', 'Series B'],
         //     lineColors: ['#746c9f', '#ababab'],
         //     lineWidth: '0',
         //     grid: false,
         // });
         //
         // // Morris bar chart
         //
         // Morris.Bar({
         //     element: 'bar-example',
         //     data: [
         //         { y: '2009', a: 75, b: 65 },
         //         { y: '2010', a: 50, b: 40 },
         //         { y: '2011', a: 75, b: 65 },
         //         { y: '2012', a: 100, b: 90 }
         //     ],
         //     xkey: 'y',
         //     ykeys: ['a', 'b'],
         //     labels: ['Series A', 'Series B'],
         //     barColors: ['#2ec7c9', '#b6a2de']
         // });
         //
         // // Morris donut chart
         //
         // Morris.Donut({
         //     element: 'donut-example',
         //     data: [
         //         { label: "Download Sales", value: 10, color: '#5e90b5' },
         //         { label: "In-Store Sales", value: 32, color: '#66cd7d' },
         //         { label: "Mail-Order Sales", value: 21, color: '#aa9bff' }
         //     ]
         // });

         // Easy-pie charts
         // var charts = $('.easypiechart');
         //
         // //update instance every 5 sec
         // window.setInterval(function () {
         //
         //     // refresh easy pie chart
         //     charts.each(function () {
         //         $(this).data('easyPieChart').update(Math.floor(100 * Math.random()));
         //     });
         //
         // }, 5000);
         // Initialize Line Chart
         var data1 = [{
             data: [[1, 5.3], [2, 5.9], [3, 7.2], [4, 8], [5, 7], [6, 6.5], [7, 6.2], [8, 6.7], [9, 7.2], [10, 7], [11, 6.8], [12, 7]],
             label: 'Sales',
             points: {
                 show: true,
                 radius: 6
             },
             splines: {
                 show: true,
                 tension: 0.45,
                 lineWidth: 5,
                 fill: 0
             }
         }, {
             data: [[1, 6.6], [2, 7.4], [3, 8.6], [4, 9.4], [5, 8.3], [6, 7.9], [7, 7.2], [8, 7.7], [9, 8.9], [10, 8.4], [11, 8], [12, 8.3]],
             label: 'Orders',
             points: {
                 show: true,
                 radius: 6
             },
             splines: {
                 show: true,
                 tension: 0.45,
                 lineWidth: 5,
                 fill: 0
             }
         }];

         var options1 = {
             colors: ['#a2d200', '#cd97eb'],
             series: {
                 shadowSize: 0
             },
             xaxis: {
                 font: {
                     color: '#3d4c5a'
                 },
                 position: 'bottom',
                 ticks: [
                     [1, 'Jan'], [2, 'Feb'], [3, 'Mar'], [4, 'Apr'], [5, 'May'], [6, 'Jun'], [7, 'Jul'], [8, 'Aug'], [9, 'Sep'], [10, 'Oct'], [11, 'Nov'], [12, 'Dec']
                 ]
             },
             yaxis: {
                 font: {
                     color: '#3d4c5a'
                 }
             },
             grid: {
                 hoverable: true,
                 clickable: true,
                 borderWidth: 0,
                 color: '#ccc'
             },
             tooltip: true,
             tooltipOpts: {
                 content: '%s: %y.4',
                 defaultTheme: false,
                 shifts: {
                     x: 0,
                     y: 20
                 }
             }
         };

         // var plot1 = $.plot($("#line-chart"), data1, options1);
         //
         // $(window).resize(function () {
         //     // redraw the graph in the correctly sized div
         //     plot1.resize();
         //     plot1.setupGrid();
         //     plot1.draw();
         // });
         // * Initialize Line Chart

         // Initialize Pie Chart
         var data6 = [];


         var dashboard6 = dashboard[2];
         var dashboard5 = dashboard[0];
         for(i = 0; i < dashboard6.length; i++) {
             // var temp_arr = [];
             // temp_arr.push(i);
             // temp_arr.push(dashboard5[i].c);
             // data6_data.push(temp_arr);
             var temp = {label: dashboard6[i],data: dashboard5[i].c};
             data6.push(temp);
         }

         // var data6 = [
         //     { label: 'Level1', data: 40 },
         //     { label: 'Level2', data: 35 },
         //     { label: 'Level3', data: 17 },
         //     { label: 'Level4', data: 9 },
         //     { label: 'FDC', data: 4 },
         //     { label: 'Closed', data: 10 }
         // ];

         var options6 = {
             series: {
                 pie: {
                     show: true,
                     innerRadius: 0.01,
                     stroke: {
                         width: 0
                     }
                     // label: {
                     //     show: true,
                     //     threshold: 0.005
                     // }
                 }
             },
             colors: ['#46bc9f', '#e56b6b', '#ecc755', '#9bbd5a', '#a994cd', '#46add4','#56a334','#66ccd4','#76afd4'],
             grid: {
                 hoverable: false,
                 clickable: true,
                 borderWidth: 0,
                 color: '#3d4c5a'
             },
             tooltip: true,
             tooltipOpts: { content: '%s: %p.0%' }
         };

         var plot6 = $.plot($("#pie-chart"), data6, options6);

         $(window).resize(function () {
             // redraw the graph in the correctly sized div
             plot6.resize();
             plot6.setupGrid();
             plot6.draw();
         });
         // * Initialize Pie Chart

         // Initialize Donut Chart
         var data7 = [
             { label: 'Chrome', data: 35 },
             { label: 'Firefox', data: 25 },
             { label: 'Safari', data: 15 },
             { label: 'IE', data: 10 },
             { label: 'Opera', data: 5 },
             { label: 'Other', data: 10 }
         ];

         var options7 = {
             series: {
                 pie: {
                     show: true,
                     innerRadius: 0.5,
                     stroke: {
                         width: 0
                     },
                     label: {
                         show: true,
                         threshold: 0.01
                     }
                 }
             },
             colors: ['#74c7ff', '#ff8fa7', '#aa9bff', '#5e90b5', '#66cd7d', '#ffdc88'],
             grid: {
                 hoverable: true,
                 clickable: true,
                 borderWidth: 0,
                 color: '#3d4c5a'
             },
             tooltip: true,
             tooltipOpts: { content: '%s: %p.0%' }
         };

         // var plot7 = $.plot($("#donut-chart"), data7, options7);
         //
         // $(window).resize(function () {
         //     // redraw the graph in the correctly sized div
         //     plot7.resize();
         //     plot7.setupGrid();
         //     plot7.draw();
         // });
         // * Initialize Donut Chart

         // Initialize Bar Chart

         var barData = [];

         var dashboard2 = dashboard[3];

         for (var j=0; j<dashboard2.length; j++){
             var tempdata2 = [];
             tempdata2.push(j);
             tempdata2.push(dashboard2[j].c);
             barData.push(tempdata2);
         }

         // for (var i = 0; i < 20; ++i) {
         //     barData.push([i, Math.sin(i + 0.1)]);
         // }

         var data2 = [{
             data: barData,
             label: '',
             color: '#ff8fa7'
         }];

         var options2 = {
             series: {
                 shadowSize: 0
             },
             bars: {
                 show: true,
                 barWidth: 0.5,
                 lineWidth: 0,
                 fillColor: {
                     colors: [{ opacity: 0.8 }, { opacity: 0.8 }]
                 }
             },
             xaxis: {
                 font: {
                     color: '#3d4c5a'
                 },
                 position: 'bottom',
                 ticks: [
                     [0, 'No Retroactive Award'],[1, 'Received Direct Deposit'], [2, 'Not Received'], [3, 'Received Check']
                 ]

             },

             yaxis: {
                 font: {
                     color: '#3d4c5a'
                 }

             },
             grid: {
                 hoverable: false,
                 clickable: true,
                 borderWidth: 0,
                 color: '#ccc'
             },
             tooltip: true
         };

         var plot2 = $.plot($("#bar-chart"), data2, options2);

         $(window).resize(function () {
             // redraw the graph in the correctly sized div
             plot2.resize();
             plot2.setupGrid();
             plot2.draw();
         });
         // * Initialize Bar Chart

         // Initialize Realtime Chart
         var realTimeData = [];
         var totalPoints = 300;
         var updateInterval = 30;

         function getData() {
             if (realTimeData.length > 0)
                 realTimeData = realTimeData.slice(1);

             // Do a random walk

             while (realTimeData.length < totalPoints) {

                 var prev = realTimeData.length > 0 ? realTimeData[realTimeData.length - 1] : 50,
                     y = prev + Math.random() * 10 - 5;

                 if (y < 0) {
                     y = 0;
                 } else if (y > 100) {
                     y = 100;
                 }

                 realTimeData.push(y);
             }

             // Zip the generated y values with the x values

             var res = [];
             for (var i = 0; i < realTimeData.length; ++i) {
                 res.push([i, realTimeData[i]]);
             }

             return res;
         }

         var options8 = {
             colors: ['#a2d200'],
             series: {
                 shadowSize: 0,
                 lines: {
                     show: true,
                     fill: 0.1
                 }
             },
             xaxis: {
                 font: {
                     color: '#3d4c5a'
                 },
                 tickFormatter: function () {
                     return '';
                 }
             },
             yaxis: {
                 font: {
                     color: '#3d4c5a'
                 },
                 min: 0,
                 max: 110
             },
             grid: {
                 hoverable: true,
                 clickable: true,
                 borderWidth: 0,
                 color: '#ccc'
             },
             tooltip: true,
             tooltipOpts: {
                 content: '%y%',
                 defaultTheme: false,
                 shifts: {
                     x: 0,
                     y: 20
                 }
             }
         };

         // var plot8 = $.plot($("#rea
         // function update() {
         //     plot8.setData([getData()]);
         //     plot8.draw();
         //     setTimeoutltime-chart"), [getData()], options8);
         //          //(update, updateInterval);
         // }
         //
         // update();
         //
         // $(window).resize(function () {
         //     // redraw the graph in the correctly sized div
         //     plot8.resize();
         //     plot8.setupGrid();
         //     plot8.draw();
         // });
         // * Initialize Realtime Chart

         // Rickshaw Chart
         // var graph3 = new Rickshaw.Graph({
         //     element: document.querySelector("#rickshaw"),
         //     renderer: 'area',
         //     series: [{
         //         name: 'Series 1',
         //         color: '#99b0c5',
         //         data: [{ x: 0, y: 23 }, { x: 1, y: 15 }, { x: 2, y: 79 }, { x: 3, y: 31 }, { x: 4, y: 60 }]
         //     }, {
         //         name: 'Series 2',
         //         color: '#a6bcd1',
         //         data: [{ x: 0, y: 30 }, { x: 1, y: 20 }, { x: 2, y: 64 }, { x: 3, y: 50 }, { x: 4, y: 15 }]
         //     }]
         // });
         // graph3.render();
         // *Rickshaw Chart

         // Initialize Combined Chart
         var data5_data = [];
      for(i = 0; i < dashboard5.length; i++) {
          var temp_arr = [];
          temp_arr.push(i);
          temp_arr.push(dashboard5[i].c);
          data5_data.push(temp_arr);
      }
         // function get_data5_data() {
         //     $.ajax({
         //         url: "/ajax.php",
         //         method: 'post',
         //         data: {
         //             task:'get_dashboard'
         //
         //         },
         //         async: false,
         //         success: function(result){
         //             dashboard = JSON.parse(result);
         //             // console.log(dashboard[0]);
         //         }});
         //     var dashboard5 = dashboard[0];
         //     for(i = 0; i < dashboard5.length; i++) {
         //         var temp_arr = [];
         //         temp_arr.push(i);
         //         temp_arr.push(dashboard5[i].c);
         //         data5_data.push(temp_arr);
         //     }
         //     return data5_data;
         // }

         var data5 = [{
             // data: [[0, 5], [1, 9], [2, 10], [3, 8], [4, 9], [5, 12], [6, 14], [7, 12], [8, 14]],
             data: data5_data,
             label: '',
             bars: {
                 show: true,
                 barWidth: 0.4,
                 lineWidth: 0,
                 fillColor: { colors: [{ opacity: 0.6 }, { opacity: 0.8 }] }
             },
             font: {
                 color: '#3d4c5a'
             },
             position: 'bottom',
             ticks: [
                 [1, 'Jan'], [2, 'Feb'], [3, 'Mar'], [4, 'Apr'], [5, 'May'], [6, 'Jun'], [7, 'Jul'], [8, 'Aug'], [9, 'Sep'], [10, 'Oct'], [11, 'Nov'], [12, 'Dec']
             ]
         }];

         var options5 = {
             colors: ['#5e90b5'],
             series: {
                 shadowSize: 0
             },
             xaxis: {
                 font: {
                     color: '#3d4c5a'
                 },
                 position: 'bottom',
                 ticks: [
                     [0, 'Level 1'],[1, 'Level 2'], [2, 'Level 3'], [3, 'Level 4'], [4, 'Level 5'],[5, 'Pending Level 3 Remand'],[6, 'Post AC Denial'],[7, 'Level 3 Remand FDC'],[8, 'Level 3 Remand FDC']
                 ]
             },
             yaxis: {
                 font: {
                     color: '#3d4c5a'
                 }
             },
             grid: {
                 hoverable: false,
                 clickable: true,
                 borderWidth: 0,
                 color: '#ccc'
             },
             tooltip: true,
             tooltipOpts: { content: '%s of %x.1 is %y.4', defaultTheme: false, shifts: { x: 0, y: 20 } }
         };

         plot5 = $.plot($("#combined-chart"), data5, options5);

         $(window).resize(function () {
             // redraw the graph in the correctly sized div
             plot5.resize();
             plot5.setupGrid();
             plot5.draw();
         });

         // var plot5 = $.plot($("#combined-chart"),[get_data5_data()],options5);
         // function update() {
         //     plot5.setData([get_data5_data()]);
         //     plot5.setupGrid();
         //     plot5.draw();
         //     setTimeout(update, 30);
         //          //(update, updateInterval);
         // }
         //
         // update();
         //
         // $(window).resize(function () {
         //     // redraw the graph in the correctly sized div
         //     plot5.resize();
         //     plot5.setupGrid();
         //     plot5.draw();
         // });


         // Initialize Close Chart
         var data9_data = [];
         var dashboard9 = dashboard[1];
         for (i = 0; i < dashboard9.length; i++){
             var temp_data9 = [];
             temp_data9.push(i);
             temp_data9.push(dashboard9[i].c);
             data9_data.push(temp_data9);
         }

         var data9 = [{
             // data: [[0, 5], [1, 9], [2, 10], [3, 8], [4, 9], [5, 12], [6, 14], [7, 13], [8, 10], [9, 12],[10,15],[11,19],[12,10]],
             data: data9_data,
             label: '',
             bars: {
                 show: true,
                 barWidth: 0.4,
                 lineWidth: 0,
                 fillColor: { colors: [{ opacity: 0.6 }, { opacity: 0.8 }] }
             }
         }];

         var options9 = {
             colors: ['#5e90b5'],
             series: {
                 shadowSize: 0
             },
             xaxis: {
                 font: {
                     color: '#3d4c5a'
                 },
                 position: 'bottom',
                 ticks: [
                     [0, 'A'],[1, 'B'], [2, 'C'], [3, 'D'], [4, 'E'],[5, 'F'],[6, 'G'],[7,'H'],[8,'I'],[9,'J'],[10,'K'],[11,'L'],[12,'M']
                 ]

             },
             yaxis: {
                 font: {
                     color: '#3d4c5a'
                 }
             },
             grid: {
                 hoverable: false,
                 clickable: true,
                 borderWidth: 0,
                 color: '#ccc'
             },
             tooltip: true,
             tooltipOpts: { content: '%s of %x.1 is %y.4', defaultTheme: false, shifts: { x: 0, y: 20 } }
         };

         var plot9 = $.plot($("#close-chart"), data9, options9);

         $(window).resize(function () {
             // redraw the graph in the correctly sized div
             plot5.resize();
             plot5.setupGrid();
             plot5.draw();
         });
         // * Initialize Stacked Chart

         // Rickshaw Realtime Chart
         // var graph2;
         //
         // var seriesData = [[], []];
         // var random = new Rickshaw.Fixtures.RandomData(50);
         // var updateInterval = 800;
         //
         // for (var i = 0; i < 50; i++) {
         //     random.addData(seriesData);
         // }

         // graph2 = new Rickshaw.Graph({
         //     element: document.querySelector("#rickshaw-realtime"),
         //     height: 250,
         //     renderer: 'area',
         //     series: [{
         //         name: 'Series 1',
         //         color: '#9675ce',
         //         data: seriesData[0]
         //     }, {
         //         name: 'Series 2',
         //         color: '#d4bdfa',
         //         data: seriesData[1]
         //     }]
         // });
         //
         // var hoverDetail = new Rickshaw.Graph.HoverDetail({
         //     graph: graph2
         // });
         //
         // setInterval(function () {
         //     random.removeData(seriesData);
         //     random.addData(seriesData);
         //     graph2.update();
         //
         // }, updateInterval);
         // *Rickshaw Realtime Chart





 });

// });