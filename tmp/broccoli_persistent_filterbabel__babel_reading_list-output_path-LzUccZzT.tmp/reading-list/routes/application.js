define('reading-list/routes/application', ['exports', 'reading-list/utils/db'], function (exports, _db) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return _db.default.books();
    }
  });
});