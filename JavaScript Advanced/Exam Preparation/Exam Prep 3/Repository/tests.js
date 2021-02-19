let { Repository } = require("./solution.js");
let assert = require('chai').assert;

describe("Tests Repository", function () {
    let repository;
    beforeEach(() => {
        repository = new Repository({ name: "string", age: "number" });
    })

    it("instantiate with one parameter", function () {
        assert.deepEqual(repository.props, { name: "string", age: "number" });
        assert.equal(repository.nextId(), 0);
    })

    it('Test get count', () => {
        assert.equal(repository.count, 0);
    })

    it('Test add method with missing property', () => {
        let entity = { a: 'x', age: "number", };
        assert.throw(() => repository.add(entity), 'Property name is missing from the entity!')
    })

    it('Test add method with incorrect property type', () => {
        let entity = { name: 'az', age: "2", };
        assert.throw(() => repository.add(entity), 'Property age is not of correct type!')
    })

    it('Test add method with correct entity', () => {
        let entity = { name: 'az', age: 2, };
        assert.equal(repository.add(entity), 0);
        assert.deepEqual(repository.data.get(0), { name: 'az', age: 2 });

        repository.add(entity);
        assert.deepEqual(repository.data.get(1), { name: 'az', age: 2 });
    })

    it('Test getId', () => {
        let entity = { name: 'az', age: 2, };
        assert.throw(() => repository.getId(0), 'Entity with id: 0 does not exist!');
        repository.add(entity);
        assert.deepEqual(repository.data.get(0), { name: 'az', age: 2, });
    })

    it('Test update with non-existing entity', () => {
        let newEntity = { name: 'Gosho', age: 20};
        assert.throw(() => repository.update(0, newEntity), 'Entity with id: 0 does not exist!');
    })

    it('Test update with invalid new entity', () => {
        let entity = { name: 'az', age: 2, };
        let invalidAge = { name: 'Gosho', age: '20'};
        repository.add(entity);
        assert.throw(() => repository.update(0, invalidAge), 'Property age is not of correct type!');

        let invalidName = { age: 1};
        assert.throw(() => repository.update(0, invalidName), 'Property name is missing from the entity!');
    })

    it('Test update with valid new entity', () => {
        let entity = { name: 'az', age: 2, };
        let newEntity = { name: 'Gosho', age: 20};
        repository.add(entity);
        repository.add(newEntity);
        repository.update(0, newEntity);
        assert.deepEqual(repository.data.get(0), { name: 'Gosho', age: 20});
        assert.deepEqual(repository.data.get(1), { name: 'Gosho', age: 20});
    })

    it('Test del with non-existing id', () => {
        assert.throw(() => repository.del(0), 'Entity with id: 0 does not exist!');
        assert.throw(() => repository.del(1), 'Entity with id: 1 does not exist!');
    })

    it('Test del with existing id', () => {
        let entity = { name: 'az', age: 2, };
        repository.add(entity);
        repository.add(entity);
        repository.del(1);
        assert.throw(() => repository.getId(1), 'Entity with id: 1 does not exist!');
    })
});