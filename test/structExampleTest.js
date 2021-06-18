const StructExample = artifacts.require('StructExample');

contract('StructExample', () => {

    let instance = null;
    before(async () => {
        instance = await StructExample.deployed();
    });

    it('Should create a new user', async () => {
        await instance.create('Frank');
        const user = await instance.read(1);
        assert(user[0].toNumber() === 1);
        assert(user[1] === 'Frank');
    });

    it('Should update a user', async () => {
        await instance.update(1,'Charlie')
        const user = await instance.read(1);
        assert(user[0].toNumber() === 1);
        assert(user[1] === 'Charlie');
    });

    it('should not update a non-existant user', async () => {
        try {
            await instance.update(2,'Mac');
        } catch(e) {
            assert(e.message.includes('User does not exist!'));
            return;
        }
        assert(false);
    });

    it('Should delete a user', async () => {
        await instance.destroy(1);
        try {
            await instance.read(1);
        } catch(e) {
            assert(e.message.includes('User does not exist!'));
            return;
        }
        assert(false);
    });

    it('Should NOT delete a non existant user', async () => {
        try {
            await instance.destroy(10);
        } catch(e) {
            assert(e.message.includes('User does not exist!'));
            return;
        }
        assert(false);
    });

});