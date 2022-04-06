const SideNavigation = ({ characters, isVisible }) => {
    return(
        <nav className="side-nav" style={{display : isVisible ? "block" : "none"}}>
            {
                characters.map((character) => {
                    return(
                        <div>
                            <img src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_a/${character.name.toLowerCase()}.png`}></img>
                        </div>
                    )
                })
            }
        </nav>
    )
}

export default SideNavigation;