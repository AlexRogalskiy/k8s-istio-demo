const Table = require('cli-table3');
var clear = require("clear");
const cliCursor = require('cli-cursor');
cliCursor.hide();

const loadtest = require('loadtest');
const options = {
    url: 'http://localhost/version',
    concurrency: 1,
    statusCallback: statusCallback
};

// instantiate

var response = {};
var totalRequests = 0;

function statusCallback(error, result, latency) {
    response[result.body] = response[result.body] || 0;
    response[result.body] = response[result.body] + 1;
    totalRequests += 1;
    const table = new Table({
        head: ['Response', 'Percentage']
    });

    Object.keys(response).forEach((key, index) => {
        table.push([key, (((response[key] * 1.0) / totalRequests) * 100.0).toFixed(2)]);
    });

    clear({ fullClear: false });
    console.log(table.toString());
}

loadtest.loadTest(options, function (error) {
    if (error) {
        return console.error('Got an error: %s', error);
    }
    console.log('Tests run successfully');
});