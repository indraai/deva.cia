"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:49179454498674546440 LICENSE.md

const {expect} = require('chai')
const CIADeva = require('./index.js');

describe(CIADeva.me.name, () => {
  beforeEach(() => {
    return CIADeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(CIADeva).to.be.an('object');
    expect(CIADeva).to.have.property('agent');
    expect(CIADeva).to.have.property('vars');
    expect(CIADeva).to.have.property('listeners');
    expect(CIADeva).to.have.property('methods');
    expect(CIADeva).to.have.property('modules');
  });
})
