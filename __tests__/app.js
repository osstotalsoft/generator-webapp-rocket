'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const rimraf = require('rimraf');

describe('generator-webapp-rocket:app', () => {
  const projectName = 'test';

  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, 'tmp'))
      .withPrompts({
        projectName,
        projectDescriptionName: 'test description',
        gqlAddress: 'localhost:4000',
        theme: 'default',
        addHelm: false,
        identityClientId: 'id',
        identityScope: '',
        identityAuthority: 'localhost:5000',
        packageManager: 'npm'
      }).then(runContext => {
        return runContext
      })
  });

  afterAll(() => {
    rimraf.sync(path.join(__dirname, 'tmp'));
  });

  it('create component with given name', () => {
    const resPath = path.join(__dirname, `tmp/${projectName}/src/index.js`)
    assert.file(resPath);
  });

});
