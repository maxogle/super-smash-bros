const SideNavigation = ({ setSelectedCharacter, characters, isVisible }) => {
    return(
        <nav className="side-nav" style={{display : isVisible ? "block" : "none"}}>
            {
                characters.map((character) => {
                    return(
                        <div className="char-nav" onClick={(characters) => {setSelectedCharacter({name: character.name, color: character.color})                        
                        }}>
                            <img src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_a/${character.name.toLowerCase()}.png`}></img>
                        </div>
                    )
                })
            }
        </nav>
    )
}

export default SideNavigation;