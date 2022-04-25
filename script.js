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
            switch(measureType){
                case 'pound':
                    converter.convertNoMeasures(this.measureTypeNo.value, 453 * measure);
                    break;
                case 'oz':
                    converter.convertNoMeasures(this.measureTypeNo.value, 28.3 * measure);
                    break;  
                case 'cup':
                    converter.convertNoMeasures(this.volumeTypeNo.value, 2.36 * measure);
                    break;
                case 'fluid':
                    converter.convertNoMeasures(this.volumeTypeNo.value, 0.29 * measure);
                    break;
                      
            }

        },
        convertNoMeasures:function(measureType, measure){
            switch(measureType){
                case 'kg':
                    this.noMeasure.value = (measure/ 1000).toFixed(2);
                    break;   
                case 'gram':
                    this.noMeasure.value = measure.toFixed(1);
                    break;
                case 'liter':
                    this.noVolume.value = (measure/10).toFixed(2);
                    break;
                case 'dl':
                    this.noVolume.value = measure.toFixed(1);
                    break;

            }

        }
            
}

        



   
