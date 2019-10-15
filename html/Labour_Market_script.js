d3.json('http://localhost:5000/canada_labour_market/wages', data =>{
    var w = parseInt(document.getElementById("myDiv").offsetWidth);
    var h = parseInt(document.getElementById("myDiv").offsetHeight);
  
    var tData = data;
    console.log(tData[0])
    var year = tData.map(year => year['year']);
    var construction = tData.map(constr => constr['construction'])
    var agriculture = tData.map(agri => agri['agriculture_7'])
    var accommodation = tData.map(agri => agri['accommodation_and_food_services'])
    var business = tData.map(agri => agri['business_building_and_other_support_services_11'])
    var educational = tData.map(agri => agri['educational_services'])
    var finance = tData.map(agri => agri['finance_insurance_real_estate_rental_and_leasing'])
    var forestry = tData.map(agri => agri['forestry_fishing_mining_quarrying_oil_and_gas_8_9'])
    var good = tData.map(agri => agri['good_producing_sector_6'])
    var health = tData.map(agri => agri['health_care_and_social_assistance'])
    var information = tData.map(agri => agri['information_culture_and_recreation'])
    var manufacturing = tData.map(agri => agri['manufacturing'])
    var other = tData.map(agri => agri['other_services_except_public_administration'])
    var professional = tData.map(agri => agri['professional_scientific_and_technical_services'])
    var public = tData.map(agri => agri['public_administration'])
    var services = tData.map(agri => agri['services_producing_sector_10'])
    var total = tData.map(agri => agri['total_employees_all_industries_5'])
    var transportation = tData.map(agri => agri['transportation_and_warehousing'])
    var utilities = tData.map(agri => agri['utilities'])
    var wholesale = tData.map(agri => agri['wholesale_and_retail_trade'])

    console.log(year)
  
    var trace1 = {
      name: 'Construction',
      x: year,
      y: construction,
      type: 'scatter'
    };

    var trace2 = {
      name: 'Agriculture',
      x: year,
      y: agriculture,
      type: 'scatter'
    };
  
    var trace3 = {
      name: 'Accomodation and Food Services',
      x: year,
      y: accommodation,
      type: 'scatter'
    };

    var trace4 = {
      name: 'Buisness Building and Other Support Services',
      x: year,
      y: business,
      type: 'scatter'
    };

    var trace5 = {
      name: 'Educational Services',
      x: year,
      y: educational,
      type: 'scatter'
    };

    var trace6 = {
      name: 'Finance Insurance Real Estate Rental and Leasing',
      x: year,
      y: finance,
      type: 'scatter'
    };
  
    var trace7 = {
      name: 'Forestry Fishing Mining Quarrying Oil and Gas',
      x: year,
      y: forestry,
      type: 'scatter'
    };

    var trace8 = {
      name: 'Good Producing Sector',
      x: year,
      y: good,
      type: 'scatter'
    };

    var trace9 = {
      name: 'Health Care and Social Assistance',
      x: year,
      y: health,
      type: 'scatter'
    };

    var trace10 = {
      name: 'information Culture and Recreation',
      x: year,
      y: information,
      type: 'scatter'
    };

    var trace11 = {
      name: 'Manufacturing',
      x: year,
      y: manufacturing,
      type: 'scatter'
    };

    var trace12 = {
      name: 'Other Services Except Public Administration',
      x: year,
      y: other,
      type: 'scatter'
    };

    var trace13 = {
      name: 'Other Services Except Public Administration',
      x: year,
      y: other,
      type: 'scatter'
    };

    var trace14 = {
      name: 'Professional Scientific and Technical Services',
      x: year,
      y: professional,
      type: 'scatter'
    };

    var trace15 = {
      name: 'Public Administration',
      x: year,
      y: public,
      type: 'scatter'
    };

    var trace16 = {
      name: 'Services Producing Sector',
      x: year,
      y: services,
      type: 'scatter'
    };

    var trace17 = {
      name: 'Total Employees All Industries',
      x: year,
      y: total,
      type: 'scatter'
    };

    var trace18 = {
      name: 'Transportation and Warehousing',
      x: year,
      y: transportation,
      type: 'scatter'
    };
    
    var trace19 = {
      name: 'Utilities',
      x: year,
      y: utilities,
      type: 'scatter'
    };

    var trace20 = {
      name: 'Wholesale and Retail Trade',
      x: year,
      y: wholesale,
      type: 'scatter'
    };

    var data = [trace1, trace2, trace3, trace4,
                trace5, trace6, trace7, trace8,
                trace9, trace10, trace11, trace12,
                trace13, trace14, trace15, trace16,
                trace17, trace18, trace19, trace20];
  
    var layout = {
      title: 'Canadian Wages by Services 2010-2018',
      width: w - 30,
      height: h - 30,

      xaxis: {
        title: 'Year'
      },

      yaxis: {
        title: 'Wages'
      }
    };
  
    var graph = document.getElementById("myDiv");
    Plotly.newPlot(graph, data, layout);
  });
    
d3.json('http://localhost:5000/canada_labour_market/cpi_Canada', data =>{
  var w = parseInt(document.getElementById("myDiv2").offsetWidth);
  var h = parseInt(document.getElementById("myDiv2").offsetHeight);

  var tData = data;
  console.log(tData[0])

  var year = tData.map(year => year['date']);
  var alcholic = tData.map(alchol => alchol['alcoholic_beverages_tobacco_products_and_recreational_cannabis'])
  var all_items = tData.map(alchol => alchol['all_items'])
  var all_items_excluding_energy = tData.map(alchol => alchol['all_items_excluding_energy_6'])
  var all_items_excluding_food = tData.map(alchol => alchol['all_items_excluding_food_and_energy_6'])
  var clothing = tData.map(alchol => alchol['clothing_and_footwear'])
  var energy = tData.map(alchol => alchol['energy_6'])
  var food = tData.map(alchol => alchol['food_4'])
  var gasoline = tData.map(alchol => alchol['gasoline'])
  var goods = tData.map(alchol => alchol['goods_7'])
  var health = tData.map(alchol => alchol['health_and_personal_care'])
  var household = tData.map(alchol => alchol['household_operations_furnishings_and_equipment'])
  var recreation = tData.map(alchol => alchol['recreation_education_and_reading'])
  var services = tData.map(alchol => alchol['services_8'])
  var shelter = tData.map(alchol => alchol['shelter_5'])
  var transportation = tData.map(alchol => alchol['transportation'])


  var trace1 = {
    name: 'Alcoholic Beverages Tobacco Products and Recreational Cannabis',
    x: year,
    y: alcholic,
    type: 'scatter'
  };

  var trace2 = {
    name: 'All Items',
    x: year,
    y: all_items,
    type: 'scatter'
  };

  var trace3 = {
    name: 'All Items Excluding Energy',
    x: year,
    y: all_items_excluding_energy,
    type: 'scatter'
  };

  var trace4 = {
    name: 'All Items Excluding Food and Energy',
    x: year,
    y: all_items_excluding_food,
    type: 'scatter'
  };

  var trace5 = {
    name: 'Clothing and Footwear',
    x: year,
    y: clothing,
    type: 'scatter'
  };

  var trace6 = {
    name: 'Energy',
    x: year,
    y: energy,
    type: 'scatter'
  };

  var trace7 = {
    name: 'Food',
    x: year,
    y: food,
    type: 'scatter'
  };

  var trace8 = {
    name: 'Gasoline',
    x: year,
    y: gasoline,
    type: 'scatter'
  };

  var trace9 = {
    name: 'Goods',
    x: year,
    y: goods,
    type: 'scatter'
  };

  var trace10 = {
    name: 'Health and Personal Care',
    x: year,
    y: health,
    type: 'scatter'
  };

  var trace11 = {
    name: 'Household Operations Furnishings and Equipment',
    x: year,
    y: household,
    type: 'scatter'
  };

  var trace12 = {
    name: 'Recreation Education and Reading',
    x: year,
    y: recreation,
    type: 'scatter'
  };

  var trace13 = {
    name: 'Services',
    x: year,
    y: services,
    type: 'scatter'
  };
  
  var trace14 = {
    name: 'Shelter',
    x: year,
    y: shelter,
    type: 'scatter'
  };

  var trace15 = {
    name: 'Transportation',
    x: year,
    y: transportation,
    type: 'scatter'
  };



  var data = [trace1, trace2, trace3, trace4, 
              trace5, trace6, trace7, trace8,
              trace9, trace10, trace11, trace12,
              trace13, trace14, trace15]

  var layout = {
    title: 'CPI Canada 2010-2019',
    width: w - 30,
    height: h - 30,

    xaxis: {
      title: 'Month'
    },

    yaxis: {
      title: 'CPI'
    }
  };

  var graph = document.getElementById("myDiv2");
  Plotly.newPlot(graph, data, layout);
});


d3.json('http://localhost:5000/canada_labour_market/cpi_Canada', data => {
  console.log(data);
  });