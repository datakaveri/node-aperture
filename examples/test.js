var aperture = require('../');
var assert = require('assert-plus');

var apertureOpts = {
    types: aperture.types,
    typeTable: {
        dirname: 'string',
        sourceip: 'ip'
    }
};
var parser = aperture.createParser(apertureOpts);
var evaluator = aperture.createEvaluator(apertureOpts);

var text = [
    'Fred can read *.js when dirname = examples and sourceip = 10.0.0.0/8 at 5 inr',
];

var policies = text.map(function (t) {
    return (parser.parse(t));
});

var context = {
    principal: 'Fred',
    action: 'read',
    resource: 'parser.example.js',
    conditions: {
        dirname: 'examples',
        sourceip: '10.0.0.1'
    }
};

console.log(evaluator.evaluate(policies, context));
