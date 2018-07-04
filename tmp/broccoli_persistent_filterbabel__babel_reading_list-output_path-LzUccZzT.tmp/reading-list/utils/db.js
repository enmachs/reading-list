define("reading-list/utils/db", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Object.create({

    _records: [{ title: "El Aleph" }, { title: "2666" }, { title: "The Black Swan" }],

    books: function books() {
      return Ember.copy(this._records);
    },
    addBook: function addBook(book) {
      this._records.push(book);
    },
    removeBook: function removeBook(book) {
      var index = this._records.indexOf(book);
      this._records.splice(index, 1);
    }
  });
});