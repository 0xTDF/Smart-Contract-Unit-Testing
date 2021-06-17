const AdvancedStorage = artifacts.require("AdvancedStorage");

contract('AdvancedStorage', () => {

    let instance = null;
    before(async () => {
        instance = await AdvancedStorage.deployed();
    });

    it('should add element to ids array', async () => {
        await instance.add(10);
        const result = await instance.ids(0);
        assert(result.toNumber() === 10);
    });

    it('should get element the ids array', async () => {
        await instance.add(20);
        const result = await instance.get(1);
        assert(result.toNumber() === 20);
    });

    it('should return the ids array', async () => {
        const rawIds = await instance.getAll();
        const ids = rawIds.map(id => id.toNumber());
        assert.deepEqual(ids, [10, 20]);
    });

    it('should return the ids array length', async () => {
        const length = await instance.length();
        assert(length.toNumber() === 2);
    });

});