let ChristmasMovies = require("./Christmas Movies");
const assert = require('chai').assert;

describe('Test ChristmasMovies', () => {
    let christmas;
    beforeEach(() => {
        christmas = new ChristmasMovies();
    })

    it('Test initialization with 0 params', () => {
        assert.isArray(christmas.movieCollection);
        assert.isEmpty(christmas.movieCollection);
        assert.isObject(christmas.watched);
        assert.isArray(christmas.actors);
        assert.isEmpty(christmas.actors);
    })

    it('Test buyMovie', () => {
        assert.equal(christmas.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']), 'You just got Last Christmas to your collection in which Madison Ingoldsby, Emma Thompson, Boris Isakovic are taking part!');
        assert.throw(() => christmas.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']), 'You already own Last Christmas in your collection!');
        assert.equal(christmas.movieCollection[0].name, 'Last Christmas');
    })

    it('Test discardMovie', () => {
        christmas.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);
        assert.throw(() => christmas.discardMovie('The Grunch'), 'The Grunch is not at your collection!');
        assert.throw(() => christmas.discardMovie('Last Christmas'), 'Last Christmas is not watched!');

        christmas.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);
        christmas.watchMovie('Last Christmas');
        assert.equal(christmas.discardMovie('Last Christmas'), 'You just threw away Last Christmas!');
    })

    it('Test watchMovie', () => {
        assert.throw(() => christmas.watchMovie('The Grunch'), 'No such movie in your collection!');
        christmas.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);

        christmas.watchMovie('Last Christmas');
        christmas.watchMovie('Last Christmas');
        christmas.watchMovie('Last Christmas');
        assert.equal(christmas.watched['Last Christmas'], 3);
    })

    it('Test favouriteMovie', () => {
        assert.throw(() => christmas.favouriteMovie(), 'You have not watched a movie yet this year!');
        christmas.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);
        christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
        christmas.watchMovie('Last Christmas');
        christmas.watchMovie('Last Christmas');
        christmas.watchMovie('Last Christmas');
        christmas.watchMovie('Home Alone');
        assert.equal(christmas.favouriteMovie(), 'Your favourite movie is Last Christmas and you have watched it 3 times!');
    })

    it('Test mostStarredActor', () => {
        assert.throw(() => christmas.mostStarredActor(), 'You have not watched a movie yet this year!');
        christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
        christmas.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);
        christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
        christmas.buyMovie('Home Alone 3', ['Macaulay Culkin', 'Emma Thompson']);
        assert.equal(christmas.mostStarredActor(), 'The most starred actor is Macaulay Culkin and starred in 3 movies!');
    })
})