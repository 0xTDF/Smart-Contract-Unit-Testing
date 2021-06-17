const SimpleStorage = artifacts.require("SimpleStorage");

contract('SimpleStorage', () => {

    it('Should set value of data variable', async () => {
        const instance = await SimpleStorage.deployed();
        await instance.set('this');
        const result = await instance.get();
        assert(result === 'this');
    });

});