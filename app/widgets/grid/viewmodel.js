define(['durandal/composition', 'jquery'], function (composition, $) {
  var order = {
    ascending: 1,
    descending: 0
  },
  sortOrder = order.ascending;

  function ctor() {

    // todo: For now it is the best way I found to "proxy" this object to the
    // function. There must be a better way to do this...
    this.sort = (function (that) {
      return function (data, event) {
        return that._sort(data.fieldName);
      };
    })(this);
  }

  ctor.prototype.activate = function (settings) {
    this.settings = settings;
    this.settings.grid = {
      sort: {
        order: order.ascending,
        field: null
      }
    };
  };

  ctor.prototype._sort = function (fieldName) {
    var that = this;

    if (this.settings.grid.sort.field === fieldName) {
      this.settings.grid.sort.order = !this.settings.grid.sort.order;
    }
    this.settings.grid.sort.field = fieldName;
    
    this.settings.items.sort(function (a, b) {
      return a[fieldName] < b[fieldName] ? that.settings.grid.sort.order : !that.settings.grid.sort.order;
    });
  };

  ctor.prototype.filter = function (searchTerms) {
    // todo
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