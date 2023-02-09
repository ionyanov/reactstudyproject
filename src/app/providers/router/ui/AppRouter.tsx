import React, { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter: FC = () => (
	<div className='page-wrapper'>
		<Routes>
			{Object.values(routeConfig).map(route =>
				<Route key={route.path} path={route.path} element={route.element}/>
			)}
		</Routes>
	</div>
)

export default AppRouter
