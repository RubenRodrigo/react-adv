import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export interface Props {
	className?: string;
	style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {

	const { increaseBy, counter, maxCount } = useContext(ProductContext);

	// TODO: isMaxReached = useCallback, dependencias [counter, maxCount]


	// const isMaxReached = useCallback(() => {
	// 	if (!maxCount) return false
	// 	if (counter === maxCount) return true
	// 	return false
	// }, [counter, maxCount])


	const isMaxReached = useCallback(
		() => !!maxCount && counter === maxCount,
		[counter, maxCount],
	)

	// TRUE si el counter == maxCount
	// FALSE si no lo es

	return (
		<div className={`${styles.buttonsContainer} ${className}`} style={style}>
			<button
				className={styles.buttonMinus}
				onClick={() => increaseBy(-1)}
			>
				-
			</button>
			<div className={styles.countLabel}> {counter} </div>
			<button
				className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
				disabled={isMaxReached()}
				onClick={() => increaseBy(1)}
			>
				+
			</button>

		</div>
	)
}