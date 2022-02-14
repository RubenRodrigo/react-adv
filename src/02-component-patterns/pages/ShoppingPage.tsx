import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components/";
import { products } from "../data/products";
import '../styles/custom-styles.css';

const product = products[0]

export const ShoppingPage = () => {

	return (
		<div>
			<h3>ShoppingPage</h3>
			<hr />
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap'
			}}>
				<ProductCard
					product={product}
					className="bg-dark text-white"
					initialValues={{
						count: 3,
						maxCount: 10
					}}
				>
					{
						({ reset, count, maxCount, increaseBy, isMaxCountReached }) => (
							<>
								<ProductImage />
								<ProductTitle />
								<ProductButtons className="custom-buttons" />
								<button onClick={reset}>Reset</button>
								<button onClick={() => increaseBy(-2)}>-2</button>
								{/* Si no se llega al isMaxCount, ocultar */}
								{
									(!isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button>)
								}
								<span>{count} - {maxCount}</span>
							</>
						)
					}
				</ProductCard>
			</div>
		</div>
	);
};
