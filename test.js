const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');
const { fetchData, processResult } = require('./app');

describe('Test Suite for fetchData', function() {
  it('should return data from API', async function() {
    const data = await fetchData();
    assert.isObject(data);
    assert.property(data, 'id');
    assert.property(data, 'name');
    assert.property(data, 'email');
  });

  it('should handle API errors', async function() {
    const fetchDataStub = sinon.stub().rejects(new Error('API error'));
    try {
      await fetchDataStub();
    } catch (error) {
      assert.strictEqual(error.message, 'API error');
    }
  });
});

describe('Test Suite for processResult', function() {
  it('should process result correctly', function() {
    const result = processResult({ id: 1, name: 'John', email: 'john@example.com' });
    assert.isString(result);
    assert.strictEqual(result, 'Hello, John (john@example.com)!');
  });

  it('should handle empty input', function() {
    const result = processResult({});
    assert.strictEqual(result, 'Hello,  (undefined)!');
  });
});
