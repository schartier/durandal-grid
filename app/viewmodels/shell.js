define(['plugins/router', "durandal/app"], function (router, app) {
    return {
        router: router,

        search: function() {
            app.showMessage("Not Implemented", "Error");
        },

        activate: function () {
            router.map([
                { route: '', moduleId: 'viewmodels/home', title: "Home", nav: true },
                {"route":"jqgrid","moduleId":"viewmodels/jqgrid","title":"jqgrid","nav":true},
                /*{durandal:routes}*/
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});