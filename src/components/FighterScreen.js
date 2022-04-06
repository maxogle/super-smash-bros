const FighterScreen = ({isVisible, setVisible, selectedCharacter, name}) => {
    return (
        <div onClick={() => { return null }} className='fighter-screen' style={{display : isVisible ? "block" : "none"}}>
            <span className='name-bg'>{selectedCharacter.name}</span>              
            <h2 className="name-fg">{selectedCharacter.name}</h2>
            <img className="char-portrait" src={`https://www.smashbros.com/assets_v2/img/fighter/${selectedCharacter.name.toLowerCase()}/main.png`} />
            <p className="fighter-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sint magni. Consequuntur neque repellat maxime asperiores, iusto reiciendis voluptate nobis fugiat tempora facere labore doloremque dolor ratione a facilis quia.</p>
            
        </div>
    )
}

export default FighterScreen