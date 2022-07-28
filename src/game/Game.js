export const Game = ({game}) => {
    return (
        <>
            <div className="img-div">
                <img src={game.thumb_url} width="100px"/>
            </div>
            <a href={"/games/" + game.id} className="game-card">{game.handle}</a><br /><br /><br />
        </>
    )
}