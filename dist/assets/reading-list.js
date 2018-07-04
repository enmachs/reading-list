"use strict";



define('reading-list/app', ['exports', 'reading-list/resolver', 'ember-load-initializers', 'reading-list/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('reading-list/components/one-way-checkbox', ['exports', 'ember-one-way-controls/components/one-way-checkbox'], function (exports, _oneWayCheckbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWayCheckbox.default;
    }
  });
});
define('reading-list/components/one-way-color', ['exports', 'ember-one-way-controls/components/one-way-color'], function (exports, _oneWayColor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWayColor.default;
    }
  });
});
define('reading-list/components/one-way-date', ['exports', 'ember-one-way-controls/components/one-way-date'], function (exports, _oneWayDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWayDate.default;
    }
  });
});
define('reading-list/components/one-way-datetime-local', ['exports', 'ember-one-way-controls/components/one-way-datetime-local'], function (exports, _oneWayDatetimeLocal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWayDatetimeLocal.default;
    }
  });
});
define('reading-list/components/one-way-email', ['exports', 'ember-one-way-controls/components/one-way-email'], function (exports, _oneWayEmail) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWayEmail.default;
    }
  });
});
define('reading-list/components/one-way-file', ['exports', 'ember-one-way-controls/components/one-way-file'], function (exports, _oneWayFile) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWayFile.default;
    }
  });
});
define('reading-list/components/one-way-hidden', ['exports', 'ember-one-way-controls/components/one-way-hidden'], function (exports, _oneWayHidden) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWayHidden.default;
    }
  });
});
define('reading-list/components/one-way-input', ['exports', 'ember-one-way-controls/components/one-way-input'], function (exports, _oneWayInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWayInput.default;
    }
  });
});
define('reading-list/components/one-way-month', ['exports', 'ember-one-way-controls/components/one-way-month'], function (exports, _oneWayMonth) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWayMonth.default;
    }
  });
});
define('reading-list/components/one-way-number', ['exports', 'ember-one-way-controls/components/one-way-number'], function (exports, _oneWayNumber) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWayNumber.default;
    }
  });
});
define('reading-list/components/one-way-password', ['exports', 'ember-one-way-controls/components/one-way-password'], function (exports, _oneWayPassword) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWayPassword.default;
    }
  });
});
define('reading-list/components/one-way-radio', ['exports', 'ember-one-way-controls/components/one-way-radio'], function (exports, _oneWayRadio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWayRadio.default;
    }
  });
});
define('reading-list/components/one-way-range', ['exports', 'ember-one-way-controls/components/one-way-range'], function (exports, _oneWayRange) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWayRange.default;
    }
  });
});
define('reading-list/components/one-way-search', ['exports', 'ember-one-way-controls/components/one-way-search'], function (exports, _oneWaySearch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWaySearch.default;
    }
  });
});
define('reading-list/components/one-way-select', ['exports', 'ember-one-way-controls/components/one-way-select'], function (exports, _oneWaySelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWaySelect.default;
    }
  });
});
define('reading-list/components/one-way-select/option', ['exports', 'ember-one-way-controls/components/one-way-select/option'], function (exports, _option) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _option.default;
    }
  });
});
define('reading-list/components/one-way-tel', ['exports', 'ember-one-way-controls/components/one-way-tel'], function (exports, _oneWayTel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWayTel.default;
    }
  });
});
define('reading-list/components/one-way-text', ['exports', 'ember-one-way-controls/components/one-way-text'], function (exports, _oneWayText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWayText.default;
    }
  });
});
define('reading-list/components/one-way-textarea', ['exports', 'ember-one-way-controls/components/one-way-textarea'], function (exports, _oneWayTextarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWayTextarea.default;
    }
  });
});
define('reading-list/components/one-way-time', ['exports', 'ember-one-way-controls/components/one-way-time'], function (exports, _oneWayTime) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWayTime.default;
    }
  });
});
define('reading-list/components/one-way-url', ['exports', 'ember-one-way-controls/components/one-way-url'], function (exports, _oneWayUrl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWayUrl.default;
    }
  });
});
define('reading-list/components/one-way-week', ['exports', 'ember-one-way-controls/components/one-way-week'], function (exports, _oneWayWeek) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oneWayWeek.default;
    }
  });
});
define('reading-list/components/reading-list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    title: "",
    actions: {
      onEnter: function onEnter() {
        var title = this.get('title');
        if (title) {
          this.get('addBook')({ title: title });
        }
        this.set('title', ""); // reset title
      }
    }
  });
});
define('reading-list/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('reading-list/helpers/app-version', ['exports', 'reading-list/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('reading-list/helpers/one-way-select/contains', ['exports', 'ember-one-way-controls/helpers/one-way-select/contains'], function (exports, _contains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
});
define('reading-list/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('reading-list/helpers/route-action', ['exports', 'ember-route-action-helper/helpers/route-action'], function (exports, _routeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _routeAction.default;
    }
  });
});
define('reading-list/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('reading-list/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'reading-list/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('reading-list/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('reading-list/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('reading-list/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('reading-list/initializers/export-application-global', ['exports', 'reading-list/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('reading-list/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('reading-list/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('reading-list/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("reading-list/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('reading-list/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('reading-list/router', ['exports', 'reading-list/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('programmers');
    this.route('books');
  });

  exports.default = Router;
});
define('reading-list/routes/application', ['exports', 'reading-list/utils/db'], function (exports, _db) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return _db.default.books();
    },

    actions: {
      addBook: function addBook(book) {
        _db.default.addBook(book);
        this.refresh();
      },
      removeBook: function removeBook(book) {
        _db.default.removeBook(book);
        this.refresh();
      }
    }
  });
});
define('reading-list/routes/books', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('reading-list/routes/programmers', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('reading-list/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("reading-list/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JQ9JSiha", "block": "{\"symbols\":[],\"statements\":[[6,\"h1\"],[7],[0,\" The book store \"],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "reading-list/templates/application.hbs" } });
});
define("reading-list/templates/books", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ntmw2gG+", "block": "{\"symbols\":[],\"statements\":[[6,\"h2\"],[7],[0,\"Book list\"],[8],[0,\"\\n\\n\"],[1,[25,\"reading-list\",null,[[\"books\",\"addBook\",\"removeBook\"],[[19,0,[\"model\"]],[25,\"route-action\",[\"addBook\"],null],[25,\"route-action\",[\"removeBook\"],null]]]],false],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "reading-list/templates/books.hbs" } });
});
define("reading-list/templates/components/reading-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YrFypfda", "block": "{\"symbols\":[\"book\"],\"statements\":[[1,[25,\"one-way-input\",[[19,0,[\"title\"]]],[[\"update\",\"keyEvents\"],[[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"title\"]]],null]],null],[25,\"hash\",null,[[\"13\"],[[25,\"action\",[[19,0,[]],\"onEnter\"],null]]]]]]],false],[0,\"\\n\\n\"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"books\"]]],null,{\"statements\":[[0,\"  \"],[6,\"li\"],[7],[1,[19,1,[\"title\"]],false],[0,\" \"],[6,\"button\"],[3,\"action\",[[19,0,[]],[19,0,[\"removeBook\"]],[19,1,[]]]],[7],[0,\"Remove\"],[8],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "reading-list/templates/components/reading-list.hbs" } });
});
define("reading-list/templates/programmers", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "O2zZwsGE", "block": "{\"symbols\":[],\"statements\":[[6,\"h2\"],[7],[0,\"Programmers list\"],[8],[0,\"\\n\\n\"],[1,[25,\"reading-list\",null,[[\"books\",\"addBook\",\"removeBook\"],[[19,0,[\"model\"]],[25,\"route-action\",[\"addBook\"],null],[25,\"route-action\",[\"removeBook\"],null]]]],false],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "reading-list/templates/programmers.hbs" } });
});
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


define('reading-list/config/environment', ['ember'], function(Ember) {
  var prefix = 'reading-list';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("reading-list/app")["default"].create({"name":"reading-list","version":"0.0.0+934a8675"});
}
//# sourceMappingURL=reading-list.map
