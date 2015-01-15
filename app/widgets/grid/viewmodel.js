define(['durandal/composition', 'jquery'], function (composition, $) {
  var order = {
    ascending: 1,
    descending: 0
  };

  function ctor() {

    // todo: For now it is the best way I found to "proxy" this object to the
    // function. There must be a better way to do this...
    this.sort = (function (that) {
      return function (data, event) {
        return that._sort(data.fieldName);
      };
    })(this);
    this.filter = (function (that) {
      return function (data, event) {
        return that._filter(data.fieldName);
      };
    })(this);
  }

  ctor.prototype.activate = function (settings) {
    this.settings = settings;
    this.items = new Object(settings.items());
    this.settings.grid = {
      sort: {
        order: order.ascending,
        field: null
      }
    };
  };

  ctor.prototype.attached = function (view, parent) {
    var that = this;

    // todo: perfome DOM manipulations here (try to avoid if you ask me...)
//    $('.filter-text', view).on('change', function (event) {
//      that._filter(that.settings.filterText);
//    });
//    $('.grid-sort', view).on('click', function(event){
//      
//    });
  };

  ctor.prototype._sort = function (fieldName) {
    var that = this;

    if (this.settings.grid.sort.field === fieldName) {
      this.settings.grid.sort.order = !this.settings.grid.sort.order;
    }
    this.settings.grid.sort.field = fieldName;

    var items = this.items.sort(function (a, b) {
      return a[fieldName] < b[fieldName]
          ? that.settings.grid.sort.order : !that.settings.grid.sort.order;
    });
    
    this.settings.items(items);
  };

  ctor.prototype._filter = function () {
    var field,
        searchTerms = this.settings.filterText();

    var items = this.items.filter(function (item) {
      for (field in item) {
        if (item[field].toString().indexOf(searchTerms) > -1) {
          return true;
        }
      }    
      return false;
    });
    
    this.settings.items(items);
  };

//  ctor.prototype.afterRenderItem = function (elements, item) {
//    var parts = composition.getParts(elements);
//    var $itemContainer = $(parts.itemContainer);
//
//    $itemContainer.hide();
//
//    $(parts.headerContainer).bind('click', function () {
//      $itemContainer.toggle('fast');
//    });
//  };

  return ctor;
});