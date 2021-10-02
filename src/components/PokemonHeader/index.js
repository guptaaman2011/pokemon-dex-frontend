import './index.css';
import { Layout } from 'antd';
const { Header } = Layout;

function PokemonHeader() {
    return (
        <Layout className="layout">
            <Header className="header">
                <div className="logo">
                    <img src="/pokeapi_256.png" height="40px" alt="PokemonImage" />
                </div>
            </Header>
        </Layout>
    )
}

export default PokemonHeader;