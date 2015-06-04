/**
 * Created by Unetitebiere on 01/06/2015.
 */
app.models.wineAttributes = Backbone.Model.extend({
    urlRoot:'https://cloudplatform.coveo.com/rest/search?access_token='+ access_token +'&',
});

app.collections.groupWineAttributes = Backbone.Collection.extend({
    model: app.models.wineAttributes,
    url: function (){
        var urlMerge = 'https://cloudplatform.coveo.com/rest/search?access_token='+access_token+'&q= &groupBy=[';
        var optionsLength = this.options.length;
        if(optionsLength > 0) {
            this.options.forEach(function(option,index){
                urlMerge += '{"field":"@'+option+'","sortCriteria":"Score"}';
                if(index < optionsLength-1){
                    urlMerge += ",";
                }
            });
            urlMerge += "]";
        }
        return urlMerge;
    },
    initialize: function(options){
        this.options = options;}
});