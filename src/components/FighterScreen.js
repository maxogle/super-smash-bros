const FighterScreen = ({isVisible, setVisible, selectedCharacter}) => {
    return (
        <div className='fighter-screen' style={{display : isVisible ? "block" : "none"}}>
            <div onClick={() => { setVisible(false) }}>               
                <h2>Roy</h2>
                <img width="100" height="100" src={`https://www.smashbros.com/assets_v2/img/fighter/${selectedCharacter.name.toLowerCase()}/main.png`} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sint magni. Consequuntur neque repellat maxime asperiores, iusto reiciendis voluptate nobis fugiat tempora facere labore doloremque dolor ratione a facilis quia.</p>
            </div>
        </div>
    )
}

export default FighterScreen