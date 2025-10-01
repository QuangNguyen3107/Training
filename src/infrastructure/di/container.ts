import { Container } from 'inversify';
import { Watch } from '../../presentation/pages/watch';
import { Product } from '../../presentation/pages/Products';
import  { ContainerItems } from '../../shared';
const container = new Container();
container.bind<Watch>(ContainerItems.watch).to(Watch).inSingletonScope();
container.bind<Product>(ContainerItems.products).to(Product).inSingletonScope();


export default container;