import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element

interface Route {
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunckName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'))
const Lazy1 = lazy(() => import(/* webpackChunckName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import(/* webpackChunckName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import(/* webpackChunckName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'))

export const routes: Route[] = [
	{
		path: '/lazyload/*',
		to: '/lazyload/',
		Component: LazyLayout,
		name: 'Lazy-Layout - Dashboard'
	},
	{
		to: '/no-lazy',
		path: 'no-lazy',
		Component: NoLazy,
		name: 'No Lazy'
	},
	// {
	// 	to: '/lazy2',
	// 	path: 'lazy2',
	// 	Component: Lazy2,
	// 	name: 'Lazy-2'
	// },
	// {
	// 	to: '/lazy3',
	// 	path: 'lazy3',
	// 	Component: Lazy3,
	// 	name: 'Lazy-3'
	// },
]