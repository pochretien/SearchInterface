/**
 * Created by Unetitebiere on 31/05/2015.
 */
app.models.wine = Backbone.Model.extend({
    urlRoot: "https://cloudplatform.coveo.com/rest/search?access_token="+access_token+"&",
    /*defaults: {
     "title" : "",
     "uri" : "",
     "printableUri" : "",
     "clickUri" : "",
     "uniqueId" : "",
     "excerpt" : "",
     "firstSentences" : null,
     "summary" : null,
     "flags" : "",
     "hasHtmlVersion" : false,
     "hasMobileHtmlVersion" : false,
     "score" : 0,
     "percentScore" : 0,
     "rankingInfo" : null,
     "rating" : 0,
     "isTopResult" : false,
     "isRecommendation" : false,
     "titleHighlights" : [ ],
     "firstSentencesHighlights" : [ ],
     "excerptHighlights" : [ ],
     "printableUriHighlights" : [ ],
     "summaryHighlights" : [ ],
     "parentResult" : null,
     "childResults" : [ ],
     "totalNumberOfChildResults" : 0,
     "raw" : {
     "sysurihash" : "",
     "tpthumbnailuri" : "",
     "sysindexeddate" : 0,
     "tpnomdebouteille" : "",
     "tpcepagesplitgroup" : "Merlot 100 %",
     "sysconcepts" : "",
     "sysfolders" : "",
     "sysdate" : 0,
     "tpproducteur" : "",
     "sysrowid" : 0,
     "tpcategorieraw" : "",
     "tpcoveoconnectorhasbinarydata" : "",
     "tpregion" : "",
     "tppays" : "États-Unis",
     "sysclickableuri" : "",
     "systitle" : "",
     "systopparentid" : 0,
     "tpcepagenomsplitgroup" : "Merlot",
     "syscollection" : "Default",
     "tpcodesaq" : "11106396",
     "tpcouleur" : "Rouge",
     "tpinventairetypenomsuccursalerawsplitgroup" : "",
     "tpdisponibilite" : "",
     "tpprixnum" : 0,
     "syssize" : 0,
     "syslanguage" : "",
     "tpinventairenomsuccursalesplitgroup" : "",
     "tppagetitle" : "",
     "tpprixbande" : "",
     "tpinventairetypesuccursalesplitgroup" : "",
     "tpbouchon" : "Liège",
     "tpdisponibiliteraw" : "",
     "systopparent" : "",
     "tppagebody" : "",
     "syssite" : "",
     "tpcategorie" : "",
     "tpcodecup" : "",
     "tpproductid" : "",
     "tpcontenant" : "",
     "sysfiletype" : "",
     "syssource" : "",
     "tpformat" : "",
     "sysuri" : "",
     "sysprintableuri" : "",
     "tpprixnormal" : ""
     }
     }*/
     });

app.collections.wines = Backbone.Collection.extend({
    // Reference to this collection's model.
    model: app.models.wine,
    request:"",
    url: function(){
        return 'https://cloudplatform.coveo.com/rest/search?access_token='+access_token+'&' + this.request;
    },
    initialize:function(){

    }
});