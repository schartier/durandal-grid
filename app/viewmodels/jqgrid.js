define(["jquery", "knockout", "durandal/app", "durandal/system", "plugins/router"], function ($, ko, app, system, router) {
  return {
    isLoading: ko.observable(false),
    filterText: ko.observable('ra'),
    headers: ko.observableArray([
      {title: 'name', fieldName: 'name', sortable: true},
      {title: 'sales', fieldName: 'sales', sortable: true},
      {title: 'price', fieldName: 'price', sortable: false}
    ]),
    items: ko.observableArray([
      {name: "Well-Travelled Kitten", sales: 352, price: 75.95},
      {name: "Speedy Coyote", sales: 89, price: 190.00},
      {name: "Furious Lizard", sales: 152, price: 25.00},
      {name: "Indifferent Monkey", sales: 1, price: 99.95},
      {name: "Brooding Dragon", sales: 0, price: 6350},
      {name: "Ingenious Tadpole", sales: 39450, price: 0.35},
      {name: "Optimistic Snail", sales: 420, price: 1.50}
    ])
  };
});
