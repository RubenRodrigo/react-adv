import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components/";
import { products } from "../data/products";
import { useShoppingCard } from "../hooks/useShoppingCard";
import '../styles/custom-styles.css';

export const ShoppingPage = () => {

	// Tanto los valores del producto y el carrito son controlados con
	// este state. Si cambia, cambiaran los valores de ambos.
	const { shoppingCart, onProductCountChange } = useShoppingCard()

	return (
		<div>
			<h3>ShoppingPage</h3>
			<hr />
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap'
			}}>
				{
					products.map(product => {
						return (
							<ProductCard
								key={product.id}
								product={product}
								className="bg-dark text-white"
								onChange={onProductCountChange}
								value={shoppingCart[product.id]?.count || 0}
							>
								<ProductImage />
								<ProductTitle />
								<ProductButtons />
							</ProductCard>
						)
					})
				}
			</div>

			<div className="shopping-cart">
				{/* Basado en el carrito. Su estado depende del carrito */}
				{
					Object.entries(shoppingCart).map(([key, product]) => (
						<ProductCard
							key={key}
							product={product}
							className="bg-dark text-white"
							style={{ width: '100px' }}
							onChange={onProductCountChange}
							value={product.count}
						>
							<ProductImage />
							<ProductTitle />
							<ProductButtons />
						</ProductCard>
					))
				}
			</div>
		</div>
	);
};
