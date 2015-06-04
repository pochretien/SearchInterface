/**
 * Created by Unetitebiere on 31/05/2015.
 */
var access_token = '6318103b-f9da-437c-854b-9e6f1f44e27b';

var app = (function() {

    var api = {
        views: {},
        models: {},
        collections: {},
        currentView:{},
        content: null,
        router: null,
        wines: null,
        init: function() {
            this.content = $("#content");
            this.currentView["search"] = ViewsFactory.search();
            this.currentView["result"] = ViewsFactory.result();
            //Backbone.history.start();   ????
            return this;
        },
        changeContent: function(el) {
            this.content.empty().append(el);
            return this;
        },
            title: function(str) {
            $("h1").text(str);
            return this;
        }
    };


    var ViewsFactory = {
        result: function() {
            if(!this.resultView) {
                this.resultView = new api.views.result({
                    el: $("#result-content"),
                    model: api.collections.wines
                });
            }
            return this.resultView;
        },
        search: function() {
            if(!this.searchView) {
                this.searchView = new api.views.search({
                    el: $("#options-content"),
                    model: api.models.wineAttributes
                });
            }
            return this.searchView;
        }
    };
    api.title("SAQ");
    return api;
})();
