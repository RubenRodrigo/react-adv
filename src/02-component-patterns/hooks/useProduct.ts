import { useEffect, useRef, useState } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
	product: Product;
	value?: number;
	initialValues?: InitialValues
	onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ product, onChange, value = 0, initialValues }: useProductArgs) => {


	const [counter, setCounter] = useState<number>(initialValues?.count || value);
	const isMounted = useRef(false);

	// Si el onChange es controlado (Es enviado)
	// esta función no modificara el estado .
	// Sera el useEffect el que lo modificara segun el value 
	const increaseBy = (value: number) => {

		let newValue = Math.max(counter + value, 0)
		if (initialValues?.maxCount) {
			newValue = Math.min(newValue, initialValues.maxCount)
		}

		setCounter(newValue)
		onChange && onChange({ count: newValue, product })
	}

	const reset = () => {
		setCounter(initialValues?.count || value)
	}

	// Si el value llega a cambiar 
	// (Si esta siendo controlado, o sea, enviado según un parametro que varia en el tiempo)
	// Se actualizara
	useEffect(() => {
		if (!isMounted.current) return;
		setCounter(value)
	}, [value])

	useEffect(() => {
		isMounted.current = true
	}, [])



	return {
		counter,
		isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
		maxCount: initialValues?.maxCount,

		increaseBy,
		reset,
	}
};
