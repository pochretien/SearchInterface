/**
 * Created by Unetitebiere on 31/05/2015.
 */
app.views.result = Backbone.View.extend({
    template: _.template($("#resultSearchTemplate").html()),
    events: {

    },
    initialize: function() {
        this.model = new app.collections.wines;
        this.model.request = 'q= &sortField="score"&numberOfResults=10';
        var that = this;
        this.model.fetch({
            success : function(){
                that.model = that.model.models[0].attributes.results;
                that.render();
            }
        });
    },
    render: function() {
        this.$el.html(this.template({model : this.model}));
        return this;
    }
});

