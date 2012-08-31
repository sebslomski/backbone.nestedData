//     Backbone.nestedData 0.1

//     (c) 2012 Sebastian Slomski, Luluvise Inc.
//     Backbone.nestedData may be freely distributed under the MIT license.

(function(){

  Backbone.Model.prototype.get = function(attr) {
      attr = this.attributes[attr];
      return _.isObject(attr) ? JSON.parse(JSON.stringify(attr)) : attr;
  };

}).call(this);
