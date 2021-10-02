import { Card } from 'antd';
const { Meta } = Card;

function PokemonCard(props) {
    const { pokemonName, pokemonImage, pokemonAbilties, pokemonHeight, pokemonWeight } = props;
    return (
        <Card
            hoverable
            cover={<img alt="example" src={pokemonImage} />}
        >
            <Meta title={pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)} />
            <Meta title={"Height: " + pokemonHeight + " Weight: " + pokemonWeight} />
            <Meta title={"Abilities: "+ pokemonAbilties} />
        </Card>
    )
}

export default PokemonCard;