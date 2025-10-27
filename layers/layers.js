var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WardBoundary_1 = new ol.format.GeoJSON();
var features_WardBoundary_1 = format_WardBoundary_1.readFeatures(json_WardBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WardBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WardBoundary_1.addFeatures(features_WardBoundary_1);
var lyr_WardBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WardBoundary_1, 
                style: style_WardBoundary_1,
                popuplayertitle: 'WardBoundary',
                interactive: true,
    title: 'WardBoundary<br />\
    <img src="styles/legend/WardBoundary_1_0.png" /> ARANMULA<br />\
    <img src="styles/legend/WardBoundary_1_1.png" /> ARANMULA WEST<br />\
    <img src="styles/legend/WardBoundary_1_2.png" /> ARATTUPUZHA<br />\
    <img src="styles/legend/WardBoundary_1_3.png" /> EDASSERIMALA<br />\
    <img src="styles/legend/WardBoundary_1_4.png" /> EDAYARANMULA NORTH<br />\
    <img src="styles/legend/WardBoundary_1_5.png" /> ERUMAKKADU<br />\
    <img src="styles/legend/WardBoundary_1_6.png" /> GURUKKANKUNNU<br />\
    <img src="styles/legend/WardBoundary_1_7.png" /> KALARIKKODU<br />\
    <img src="styles/legend/WardBoundary_1_8.png" /> KIDANGANNUR EAST<br />\
    <img src="styles/legend/WardBoundary_1_9.png" /> KIDANGANNUR WEST<br />\
    <img src="styles/legend/WardBoundary_1_10.png" /> KOTTA EAST<br />\
    <img src="styles/legend/WardBoundary_1_11.png" /> KOTTA WEST<br />\
    <img src="styles/legend/WardBoundary_1_12.png" /> KOTTAKAKAM<br />\
    <img src="styles/legend/WardBoundary_1_13.png" /> KURICHIMUTTAM NORTH<br />\
    <img src="styles/legend/WardBoundary_1_14.png" /> KURICHIMUTTAM SOUTH<br />\
    <img src="styles/legend/WardBoundary_1_15.png" /> MALAKKARA<br />\
    <img src="styles/legend/WardBoundary_1_16.png" /> NALKALIKKAL<br />\
    <img src="styles/legend/WardBoundary_1_17.png" /> NEERVILAKAM<br />\
    <img src="styles/legend/WardBoundary_1_18.png" /> VALLANA<br />\
    <img src="styles/legend/WardBoundary_1_19.png" /> <br />' });
var format_RationShop_2 = new ol.format.GeoJSON();
var features_RationShop_2 = format_RationShop_2.readFeatures(json_RationShop_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RationShop_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RationShop_2.addFeatures(features_RationShop_2);
var lyr_RationShop_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RationShop_2, 
                style: style_RationShop_2,
                popuplayertitle: 'RationShop',
                interactive: true,
                title: '<img src="styles/legend/RationShop_2.png" /> RationShop'
            });
var format_Road01_3 = new ol.format.GeoJSON();
var features_Road01_3 = format_Road01_3.readFeatures(json_Road01_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road01_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road01_3.addFeatures(features_Road01_3);
var lyr_Road01_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road01_3, 
                style: style_Road01_3,
                popuplayertitle: 'Road01',
                interactive: true,
                title: '<img src="styles/legend/Road01_3.png" /> Road01'
            });

lyr_OSMStandard_0.setVisible(true);lyr_WardBoundary_1.setVisible(true);lyr_RationShop_2.setVisible(true);lyr_Road01_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_WardBoundary_1,lyr_RationShop_2,lyr_Road01_3];
lyr_WardBoundary_1.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_RationShop_2.set('fieldAliases', {'id': 'id', 'AssetName': 'AssetName', 'Location': 'Location', 'Date': 'Date', 'LULC': 'LULC', 'Remarks': 'Remarks', 'Photo': 'Photo', 'Surveyor': 'Surveyor', 'layer': 'layer', 'path': 'path', });
lyr_Road01_3.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_WardBoundary_1.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_RationShop_2.set('fieldImages', {'id': 'TextEdit', 'AssetName': 'TextEdit', 'Location': 'TextEdit', 'Date': 'DateTime', 'LULC': 'TextEdit', 'Remarks': 'TextEdit', 'Photo': 'TextEdit', 'Surveyor': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Road01_3.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_WardBoundary_1.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'inline label - always visible', 'LSGD': 'inline label - always visible', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'inline label - always visible', 'Lsgd_Type': 'inline label - visible with data', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_RationShop_2.set('fieldLabels', {'id': 'inline label - always visible', 'AssetName': 'inline label - always visible', 'Location': 'inline label - always visible', 'Date': 'no label', 'LULC': 'no label', 'Remarks': 'no label', 'Photo': 'no label', 'Surveyor': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Road01_3.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'inline label - always visible', 'waterway': 'inline label - always visible', 'aerialway': 'inline label - always visible', 'barrier': 'inline label - always visible', 'man_made': 'inline label - always visible', 'railway': 'inline label - always visible', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_Road01_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});