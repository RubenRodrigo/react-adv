import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
	product: Product;
	value?: number;
	onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ product, onChange, value = 0 }: useProductArgs) => {

	const [counter, setCounter] = useState(value);
	const isControlled = useRef(!!onChange)

	// Si el onChange es controlado (Es enviado)
	// esta función no modificara el estado .
	// Sera el useEffect el que lo modificara segun el value 
	const increaseBy = (value: number) => {
		if (isControlled.current) {
			return onChange!({ count: value, product })
		}

		const newValue = Math.max(counter + value, 0)
		setCounter(newValue)
		onChange && onChange({ count: newValue, product })
	}

	// Si el value llega a cambiar 
	// (Si esta siendo controlado, o sea, enviado según un parametro que varia en el tiempo)
	// Se actualizara
	useEffect(() => {
		setCounter(value)
	}, [value])


	return { counter, increaseBy }
};
