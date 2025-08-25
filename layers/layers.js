var wms_layers = [];

var lyr_MdiaV3PM25_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Média V3 PM2,5<br />\
    <img src="styles/legend/MdiaV3PM25_0_0.png" /> <= 5,0000<br />\
    <img src="styles/legend/MdiaV3PM25_0_1.png" /> 5,0000 - 8,0000<br />\
    <img src="styles/legend/MdiaV3PM25_0_2.png" /> 8,0000 - 10,0000<br />\
    <img src="styles/legend/MdiaV3PM25_0_3.png" /> 10,0000 - 12,0000<br />\
    <img src="styles/legend/MdiaV3PM25_0_4.png" /> 12,0000 - 14,0000<br />\
    <img src="styles/legend/MdiaV3PM25_0_5.png" /> 14,0000 - 16,0000<br />\
    <img src="styles/legend/MdiaV3PM25_0_6.png" /> 16,0000 - 18,0000<br />\
    <img src="styles/legend/MdiaV3PM25_0_7.png" /> > 18,0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MdiaV3PM25_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13181340.904832, -7556425.196423, -3210454.114478, 3858197.348685]
        })
    });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.403000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

lyr_MdiaV3PM25_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);
var layersList = [lyr_MdiaV3PM25_0,lyr_OSMStandard_1];
