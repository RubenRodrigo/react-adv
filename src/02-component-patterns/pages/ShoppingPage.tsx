import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components/";
import '../styles/custom-styles.css'

const product = {
	id: '1',
	title: "Coffe Mug - Card",
	img: './coffee-mug.png'
}

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
					className="bg-dark"
					product={product}
				>
					<ProductCard.Image className="custom-image" />
					<ProductCard.Title className="text-white" activeClass="active" />
					<ProductCard.Buttons className="custom-buttons" />
				</ProductCard>

				<ProductCard
					className="bg-dark"
					product={product}
				>
					<ProductImage className="custom-image" />
					<ProductTitle className="text-white" activeClass="active" />
					<ProductButtons className="custom-buttons" />
				</ProductCard>

				<ProductCard
					product={product}
					style={{
						backgroundColor: '#70d1F8'
					}}
				>
					<ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
					<ProductTitle style={{ fontWeight: 'bold' }} activeClass="active" />
					<ProductButtons style={{ justifyContent: 'end' }} />
				</ProductCard>
			</div>
		</div >
	);
};
