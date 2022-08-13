import { Outlet, Route, Routes } from "react-router-dom"
import { GameList } from "../game/GameList"
import { GameDetail } from "../game/GameDetail"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1 className="ward-games">WardGames</h1>
                    
                    <Outlet />
                </>
            }>

                <Route path="gamelist" element={ <GameList /> } />
				{/* <Route path="games/:id" element={ <GameDetail /> } /> */}
				

            </Route>
        </Routes>
    )
}

