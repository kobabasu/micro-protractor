'use strict';

import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';
import shell from '/usr/local/lib/node_modules/gulp-shell';

import { dir } from '../dir.es6';

class E2e extends DefaultRegistry {

  init() {
    const e2e = {
      test: dir.root + 'protractor.conf.js';
    };

    gulp.task('e2e', shell.task([`
      protractor ${e2e.test}
    `]));
  }
};

module.exports = new E2e();
