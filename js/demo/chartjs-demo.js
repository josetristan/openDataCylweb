$(function () {

    
    var doughnutData = {
        labels: ["Resto España","Cyl" ],
        datasets: [{
            data: [71,19],
            backgroundColor: ["#a3e1d4","#dedede"]
        }]
    } ;


    var doughnutOptions = {
        responsive: true
    };


    var ctx4 = document.getElementById("doughnutChart").getContext("2d");
    new Chart(ctx4, {type: 'doughnut', data: doughnutData, options:doughnutOptions});


    //************************************
    var populationTotalDetailedData = {
        label:"Población",
        labels: ["2000","2019","2020","2021","2022"],
        datasets: [{
            label:"Varones",
            data: [1221973,1181401,1178846,1173114,1167883],//[1218147,1216072,1210025,1204757],
            borderColor: 'rgb(218,18,26,255)',            
        },
        {
            label:"Mujeres",
            data: [1257145,1218147,1216072,1210025,1204757],
            borderColor: 'rgb(37, 150, 190)',            
        },
        {
            label:"Total",
            data: [2479118,2399548,2394918,2383139,2372640],
            borderColor: 'rgb(26, 179, 148)',            
        }]
    } ;

    var populationTotalDetailedOptions = {
        responsive: true
    };

    var ctxPopulationData = document.getElementById("populationTotalDetailed").getContext("2d");
    //new Chart(ctxPopulationData, {type: 'line', data: populationTotalDetailedData, options:populationTotalDetailedOptions});
    new Chart(ctxPopulationData, {type: 'line', data: populationTotalDetailedData, options:populationTotalDetailedOptions});


//************************************
    var populationTotalDetailedSpainData = {
        label:"Población",
        labels: ["2000","2019","2020","2021"],
        datasets: [{
            label:"Varones",
            data: [24107382,23016783,23210668,23248611],
            borderColor: 'rgb(218,18,26,255)',            
        },
        {
            label:"Mujeres",
            data: [20643843,23902168 ,24107382,24152187],
            borderColor: 'rgb(37, 150, 190)',            
        },
        {
            label:"Total",
            data: [44751225,46918951,47318050,47400798],
            borderColor: 'rgb(26, 179, 148)',            
        }]
    } ;

    var populationTotalDetailedSpainOptions = {
        responsive: true
    };

    var ctxPopulationSpainData = document.getElementById("populationTotalDetailedSpain").getContext("2d");
    //new Chart(ctxPopulationData, {type: 'line', data: populationTotalDetailedData, options:populationTotalDetailedOptions});
    new Chart(ctxPopulationSpainData, {type: 'line', data: populationTotalDetailedSpainData, options:populationTotalDetailedSpainOptions});


    //*******************************
  const populationByAgeData = {
  labels:["De 0 A 14","De 15 a 29","De 30 a 64","A partir de 64"],
  datasets: [{
    label: 'Edad',    
    data: [164721,418647,1349580,622101],
    backgroundColor: [
      'rgba(26, 179, 148)',
      'rgba(37, 150, 190)',
      'rgba(218,18,26,255)',
      'rgba(75, 192, 192,08)'      
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)'      
    ],
    borderWidth: 1
  }]
};

var populationByAgeOptions = {
        responsive: true
};

var ctxPopulationByAgeData = document.getElementById("populationByAge").getContext("2d");    
new Chart(ctxPopulationByAgeData, {type: 'bar', data: populationByAgeData, options:populationByAgeOptions});

//*******************************
  const populationByAgeSpainData = {
  labels:["De 0 A 14","De 15 a 29","De 30 a 64","A partir de 64"],
  datasets: [{
    label: 'Edad',    
    data: [6714668,7333645,24041001,10886125],
    backgroundColor: [
      'rgba(26, 179, 148)',
      'rgba(37, 150, 190)',
      'rgba(218,18,26,255)',
      'rgba(75, 192, 192,08)'      
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)'      
    ],
    borderWidth: 1
  }]
};

var populationByAgeSpainOptions = {
        responsive: true
};

var ctxPopulationByAgeSpainData = document.getElementById("populationByAgeSpain").getContext("2d");    
new Chart(ctxPopulationByAgeSpainData, {type: 'bar', data: populationByAgeSpainData, options:populationByAgeSpainOptions});



//**************************************
const populationBornData = {    
    datasets: [{
        type: 'bar',
        label: 'Provincias',
        data: [1160,2779,3200,1155,2553,1194,723,3878,1232]
    }, {
        type: 'line',
        label: 'Total: se muestran los años 2000, 2020,2021 y 2022',
        data: [17874,14323,13652,13095],
    }],
    labels: ["AVILA","BURGOS","LEON","PALENCIA","SALAMANCA","SEGOVIA","SORIA","VALLADOLID","ZAMORA"]
    
};

var populationBornOptions = {
        responsive: true
};

var ctxPopulationBornData = document.getElementById("populationBorn").getContext("2d");    
new Chart(ctxPopulationBornData, {type: 'scatter', data: populationBornData, options:populationBornOptions});



//**************************************
const populationDeceaseData = {    
    datasets: [{
        type: 'bar',
        label: 'Provincias',
        data: [2065,3968,6220,2267,3995,1679,1184,5330,2591]
    }, {
        type: 'line',
        label: 'Total: se muestran los años 2000, 2020,2021 y 2022',
        data: [25676,28719,36197,29299],
    }],
    labels: ["AVILA","BURGOS","LEON","PALENCIA","SALAMANCA","SEGOVIA","SORIA","VALLADOLID","ZAMORA"]
    
};

var populationDeceaseOptions = {
        responsive: true
};

var ctxPopulationDeceaseData = document.getElementById("populationDecease").getContext("2d");    
new Chart(ctxPopulationDeceaseData, {type: 'scatter', data: populationDeceaseData, options:populationDeceaseOptions});



//*********************************
const productExportData = {
  labels: ["PRODUCTOS AGROPECUARIOS",
"PRODUCTOS QUIMICOS",
"PAPEL Y SUS MANUFACTURAS",
"METALES COMUNES Y SUS MANUFACTURAS",
"MAQUINARIA NO ELECTRICA",
"MAQUINARIA ELECTRICA",
"MATERIAL DE TRANSPORTE",
"INSTRUMENTOS DE OPTICA, FOTOGRAFIA"],
  datasets: [
        {
        label: '2023',
        data: [291976,294018,19954,90796,197895,59449,575435,3121],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor:'rgb(75, 192, 192)',
        tension: 01    
      },
      {
        label: '2022',
        data: [279697,256694,24550,96280,217972,53938,383502,2230],
        fill: false,
        borderColor: 'rgb(154, 208, 245)',
        backgroundColor:'rgb(154, 208, 245)',
        tension: 01
      },
      {
        label: '2021',
        data: [229706,181324,17589,72114,158238,45771,417021,1336,108070],
        fill: false,
        borderColor: '#676A6C',
        backgroundColor:'#676A6C',
        tension: 01
      },
      {
        label: '2020',
        data: [45286,86520,9105,33346,83154,7255,393651,1007,37941],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor:'rgb(255, 99, 132)',
        tension: 01
      }
  ]
};

var productExportOptions = {
        responsive: true
};

var ctxProductExportData = document.getElementById("productExport").getContext("2d");    
new Chart(ctxProductExportData, {type: 'bar', data: productExportData, options:productExportOptions});

/****************************************/

const productImportData = {
  labels: ["PRODUCTOS AGROPECUARIOS",
"PRODUCTOS QUIMICOS",
"PAPEL Y SUS MANUFACTURAS",
"METALES COMUNES Y SUS MANUFACTURAS",
"MAQUINARIA NO ELECTRICA",
"MAQUINARIA ELECTRICA",
"MATERIAL DE TRANSPORTE",
"INSTRUMENTOS DE OPTICA, FOTOGRAFIA"],
  datasets: [{
        label: '2023',
        data: [185932,299572,26181,111747,181766,150562,363050,16883],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor:'rgb(75, 192, 192)',
        tension: 01    
      },
      {
        label: '2022',
        data: [136580,238080,27645,115722,171471,73437,294328,18916],
        fill: false,
        borderColor: 'rgb(154, 208, 245)',
        backgroundColor:'rgb(154, 208, 245)',
        tension: 01
      },
      {
        label: '2021',
        data: [108874,161100,19856,96694,130373,68945,297224,12399],
        fill: false,
        borderColor: '#676A6C',
        backgroundColor:'#676A6C',
        tension: 01
      },
      {
        label: '2020',
        data: [35040,115562,8447,74369,123826,37741,298384,15066,46568],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor:'rgb(255, 99, 132)',
        tension: 01
      }]
};

var productImportOptions = {
        responsive: true
};

var ctxProductImportData = document.getElementById("productImport").getContext("2d");    
new Chart(ctxProductImportData, {type: 'bar', data: productImportData, options:productImportOptions});


//*****************************************

const solarEnergyData = {
  labels: [
    'Ávila',
    'Burgos',
    'León',
    'Palencia',
    'Salamanca',
    'Segovia',
    'Soria',
    'Valladolid',
    'Zamora'
  ],
  datasets: [{
    label: 'Potencia instalada fotovoltaica',
    data: [89395,81932,92304,165047,177328,83967,21218,434067,253780],
    backgroundColor: [
      'rgb(75, 192, 192)',
      'rgb(154, 208, 245)',
      'rgb(255, 99, 132)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)',
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)'
    ]
  }]
};

var solarEnergyOptions = {
        responsive: true
};

var ctxSolarEnergyData = document.getElementById("solarEnergy").getContext("2d");    
new Chart(ctxSolarEnergyData, {type: 'polarArea', data: solarEnergyData, options:solarEnergyOptions});


//************************************************

var solarEnergyEvolutionData = {
        label:"Población",
        labels: ["2001","2010","2015","2020","2021","2022"],
        datasets: [
        {            
            label:"Potencia instalada acumulada (kW)",
            data: [27,395714,490183,829658,1010200,1399037],
            borderColor: 'rgb(37, 150, 190)',            
        }]
    } ;

    var solarEnergyEvolutionOptions = {
        responsive: true
    };

    var ctxSolarEnergyEvolutionData = document.getElementById("solarEnergyEvolution").getContext("2d");    
    new Chart(ctxSolarEnergyEvolutionData, {type: 'line', data: solarEnergyEvolutionData, options:solarEnergyEvolutionOptions});

//************************************************

var facilitiesSolarData = {
        label:"Población",
        labels: ["2001","2010","2015","2020","2021","2022"],
        datasets: [{
            label:"Instalaciones",
            data: [6,4876,5457,5526,5576,5633],
            borderColor: 'rgb(218,18,26,255)',            
        }]
    } ;

    var facilitiesSolarOptions = {
        responsive: true
    };

    var ctxfacilitiesSolarData = document.getElementById("facilitiesSolar").getContext("2d");    
    new Chart(ctxfacilitiesSolarData, {type: 'line', data: facilitiesSolarData, options:facilitiesSolarOptions});    

//*******************************************

var dairyEvolutionData = {
        label:"Leche",
        labels: ["2020","2021","2022"],
        datasets: [{
            label:"Año",
            data: [904595545, 907275894, 900225313],
            borderColor: 'rgb(218,18,26,255)',            
        }]
    } ;

    var dairyEvolutionOptions = {
        responsive: true
    };

    var ctxdairyEvolutionData = document.getElementById("dairyEvolution").getContext("2d");    
    new Chart(ctxdairyEvolutionData, {type: 'line', data: dairyEvolutionData, options:dairyEvolutionOptions});    


/****************************************/

const dairyLocality1Data = {
  labels: ["Ávila","Burgos","León","Palencia","Salamanca","Segovia","Soria","Valladolid","Zamora"],
  datasets: [
        {
        label: '2020',
        data: [119749807,    35167327,    231303038,   169219345,   48565345,90647101,    1624222, 86877104,    121442256],
        fill: false,
        borderColor: '#676A6C',
        backgroundColor:'#676A6C',
        tension: 01
      },        
      {
        label: '2021',
        data: [121513490,    32724113,    232822429,    169310525,   48462678,88282447,    510400,  92240122,    121409690],
        fill: false,
        borderColor: 'rgb(154, 208, 245)',
        backgroundColor:'rgb(154, 208, 245)',
        tension: 01
      },
      {label: '2022',
        data: [121100003,    30497607,    224424371,   171180713,   47316763,87989475,    525088,  93654376,    123536917],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor:'rgb(75, 192, 192)',
        tension: 01    
      }
     ]
};

var dairyLocality1Options = {
        responsive: true
};

var ctxDairyLocality1Data = document.getElementById("dairyLocality1").getContext("2d");    
new Chart(ctxDairyLocality1Data, {type: 'bar', data: dairyLocality1Data, options:dairyLocality1Options});



//********************************************

const facilitiesCattleData = {
  labels: ["Ávila","Burgos","León","Palencia","Salamanca","Segovia","Soria","Valladolid","Zamora"],
  datasets: [{
        label: 'Explotaciones ganaderas de bobino',
        data: [225,147,193,108,322,143,71,125,188],                     
        hoverOffset: 4
    }]
};
var facilitiesCattleOptions = {
        responsive: true
};

var ctxFacilitiesCattleData = document.getElementById("facilitiesCattle").getContext("2d");    
new Chart(ctxFacilitiesCattleData, {type: 'doughnut', data: facilitiesCattleData, options:facilitiesCattleOptions});

//********************************************




//***********************************
const layingHensData = {
   labels: ["Ávila","Burgos","León","Palencia","Salamanca","Segovia","Soria","Valladolid","Zamora"],
   datasets: [{
        label: '2021',
        data: [211445,1302393,438311,410003,14534,1942462,64021,3856238,6890],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor:'rgb(75, 192, 192)',
        tension: 01    
      },
      {
        label: '2020',
        data: [252025,1296845,307823,373897,9218,1928940,68005,4239900,6540],
        fill: false,
        borderColor: 'rgb(154, 208, 245)',
        backgroundColor:'rgb(154, 208, 245)',
        tension: 01
      },
      {
        label: '2019',
        data: [204017,1301587,270839,373598,15939,1665344,67090,3880019,7300],
        fill: false,
        borderColor: '#676A6C',
        backgroundColor:'#676A6C',
        tension: 01
      }
     ]
};

var layingHensOptions = {
        responsive: true
};

var ctxLayingHensData = document.getElementById("layingHens").getContext("2d");    
new Chart(ctxLayingHensData, {type: 'bar', data: layingHensData, options:layingHensOptions});

//***********************************
const touristsData = {   
   labels: ["2016","2020","2021","2022"],
   datasets: [{        
        label:"Número de turistas",
        data: [1225331,430405,499370,1016508],        
        borderColor: 'rgb(75, 192, 192)',        
      }
     ]
};

var touristsOptions = {
        responsive: true
};

var ctxTouristsData = document.getElementById("tourists").getContext("2d");    
new Chart(ctxTouristsData, {type: 'line', data: touristsData, options:touristsOptions});

});

