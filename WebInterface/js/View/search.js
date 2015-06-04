/**
 * Created by Unetitebiere on 31/05/2015.
 */
app.views.search = Backbone.View.extend({
    template: _.template($("#searchTemplate").html()),
    options: ["tpdisponibilite","tpprixbande","tpfamilledevinsplitgroup","tppays","tpregion","tpcouleur","tpformat","tpcategorie"],
    optionsDict: {
        "tpdisponibilite" : 'Disponibilit\u00E9',
        "tpprixbande" : "Gamme de prix",
        "tpfamilledevinsplitgroup": "Famille de vin",
        "tppays": "Pays",
        "tpregion": "Region",
        "tpcouleur":"Couleur",
        "tpformat":"Format",
        "tpcategorie": "Cat\u00E9gorie"},
    events: {
       'click #searchButton' : 'searchApi'
    },
    initialize: function() {

        this.model = new app.collections.groupWineAttributes(this.options);
        app.currentModels = this.model;
        /* attach event to the input */
        $('#user-search').submit(this.searchApi);
        $('#click-search-button').click(this.searchApi);
        var that = this;
        this.model.fetch({
           success: function(){
               that.model = that.model.models[0].attributes.groupByResults;
               that.render();
           }
        })
    },
    render: function() {
        this.$el.html(this.template({model: this.model, dict: this.optionsDict}));
        return this;
    },
    searchApi : function(){
        var options = {};
        /* Get the input value */
        var clientSearchInput = $('#searchInput').val();
        var htmlTable = $("#user-search input:checkbox:checked");
        htmlTable.each(function(index, value) {
            options['@'+ value.name] = '"'+value.id+'"';
        });
        var dataObject = createDataObject(clientSearchInput, options);
           var model = new app.collections.wines();
        //model.request = resquestUrl +'&sortField="score"&numberOfResults=10';

        model.fetch({
            type: "post",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: dataObject,
            success: function (model) {
                app.currentView["result"].model = model.models[0].attributes.results;
                app.currentView["result"].render();
            }
        });

        /* Clear all entry */
        $("#searchInput").val('');
        $('input:checkbox').removeAttr('checked')
        $("#collapseOptions").attr('class', 'collapse');

        return false; /* no real submit */
     }
});



var createDataObject = function(input,options){
   var dataObject = {};
    if(input){
        dataObject['q'] = input.toString();
    }
    if(options) {
        $.each(options,function(name, value){
            dataObject['aq'] = name +"=="+ value;
        });
    }
    return dataObject;
};