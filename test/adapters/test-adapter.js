/* globals describe, it */

var should = require('should'),
    sinon = require('sinon'),
    
    // Test items
    adapter = require('../../src/adapters/adapter.js')();


describe('The adapter abstract', function() {
    
    it('should contain a default configuration', function() {
        adapter.should.have.property('config');
        should(adapter.config).be.empty();
    });
    
    
    it('should contain connection protocols', function() {
        adapter.connect().should.be.false;
        adapter.isConnected().should.be.false;
        (adapter.close() === undefined).should.be.true;
    });
    
    
    it('should contain query functionality', function() {
        (adapter.query() === null).should.be.true;
        (adapter.query('select * from `table`') === null).should.be.true;
        (adapter.query('select * from `table` where id = :id', { id: 1 }) === null).should.be.true;
        
        (adapter.prepare() === null).should.be.true;
        (adapter.prepare('select * from `table`') === null).should.be.true;
    });
    
    
    it('should fire transaction closures as-is', function() {
        var callback = sinon.spy();
        
        adapter.transact(callback);
        
        callback.called.should.be.true;
    });
    
    
    it('should reflect quote requests as-is', function() {
        adapter.quote('test').should.equal('test');
    });
    
    
    it('should have no last inserted ID', function() {
        adapter.lastInsertId().should.equal(0);
    });
    
});
