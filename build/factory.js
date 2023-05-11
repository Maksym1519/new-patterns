class ModelBusiness {
    info(name, price) {
        console.log(`This is ${name} and its price ${price}`);
    }
}
class ModelGame {
    info(name, price) {
        console.log(`This is ${name} and its price ${price}`);
    }
}
class ComputerFactory {
    createComuter() { }
}
class BussinesFactory extends ComputerFactory {
    createComuter() {
        return new ModelBusiness();
    }
}
class GameFactory extends ComputerFactory {
    createComuter() {
        return new ModelGame();
    }
}
const PcBussinesFactory = new BussinesFactory();
const PcGamaFactory = new GameFactory();
const bs = PcBussinesFactory.createComuter();
const gm = PcGamaFactory.createComuter();
bs.info('lenovo bussines pc', 1000);
gm.info('lenovo game pc', 1200);
export {};
//# sourceMappingURL=factory.js.map