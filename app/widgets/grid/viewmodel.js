define(['durandal/composition', 'jquery'], function (composition, $) {
  var order = {
    ascending: 1,
    descending: 0
  },
  ctor = function () {},
  sortOrder = order.ascending;

  ctor.prototype.activate = function (settings) {
    this.settings = settings;
  };

  ctor.prototype._sort = function (fieldName, order) {
    debugger;
    
//    debugger;
//    if (data.sortable) {
//      return this._sort(data.fieldName);
//    }
//    return false;
//    this.settings.items.sort(function(a, b){
//      return a[fieldName] < b[fieldName] ? 0 : 1;
//    });
  };
  
  ctor.prototype.sort = function (parent) {
    return parent._sort;
  };

  ctor.prototype.afterRenderItem = function (elements, item) {
    var parts = composition.getParts(elements);
    var $itemContainer = $(parts.itemContainer);

    $itemContainer.hide();

    $(parts.headerContainer).bind('click', function () {
      $itemContainer.toggle('fast');
    });
  };

  return ctor;
});