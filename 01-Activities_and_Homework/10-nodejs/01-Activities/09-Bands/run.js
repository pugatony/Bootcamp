var bandas = new Array();

$.getJSON("bands.json", function(data) {
    bandas = data.bands;
    console.log(bandas);
});
