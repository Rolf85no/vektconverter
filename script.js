const converter = {
    noMeasure: document.getElementById('metricWeight'),
    noVolume:document.getElementById('metricVolume'),
    volumeTypeUs:document.getElementById('usVolumeType'),
    volumeTypeNo:document.getElementById('metricVolumeType'),
    measureTypeUs:document.getElementById('usWeightType'),
    measureTypeNo:document.getElementById('metricWeightType'),
        getWeight:function(usMeasure){
            converter.convertUsMeasures(this.measureTypeUs.value, usMeasure);
            
        },
        getVolume:function(usaVolume){
           converter.convertUsMeasures(this.volumeTypeUs.value, usaVolume);
        },
        convertUsMeasures:function(measureType, measure){ 
            let convertedMeasure;           
            switch(measureType){
                case 'pound':
                    convertedMeasure = 453 * measure;
                    converter.convertNoMeasures(this.measureTypeNo.value, convertedMeasure);
                    break;
                case 'oz':
                    convertedMeasure = 28.3 * measure;
                    converter.convertNoMeasures(this.measureTypeNo.value, convertedMeasure);
                    break;
                    
                case 'cup':
                    convertedMeasure = 2.36 * measure;
                    converter.convertNoMeasures(this.volumeTypeNo.value, convertedMeasure);
                    break;
                case 'fluid':
                    convertedMeasure = 0.29 * measure;
                    converter.convertNoMeasures(this.volumeTypeNo.value, convertedMeasure);
                    break;
                      
            }

        },
        convertNoMeasures:function(measureType, measure){
            switch(measureType){
                case 'kg':
                    this.noMeasure.value = measure.toFixed(2) / 1000;
                    break;
                
                case 'gram':
                    this.noMeasure.value = measure.toFixed(1);
                    break;

                case 'liter':
                    this.noVolume.value = measure.toFixed(2) / 10;
                    break;

                case 'dl':
                    this.noVolume.value = measure.toFixed(1);
                    break;

            }

        }
            
}

        



   
