export const Game = ({game}) => {
    return (
        <>
            <a href={"/games/" + game.id} className="game-card">{game.handle}</a><br /><br /><br />
        </>
    )
}