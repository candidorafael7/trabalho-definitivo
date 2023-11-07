import Footer from "../../components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './index.css';

function Produtos() {
    return(
        <>

            <div className="text-produtos">
                <h2>Produtos</h2>
            </div>

            {/* Lista de Cards 1 */}
            <div className="cards">
                <h2>Cachorros</h2>
                <ul className="prod-cachorros">
                    <li>
                    <Card style={{ width: '18rem', height:'500px' }}>
                    <Card.Img style={{height:'286.4px'}} variant="top" src="https://media.discordapp.net/attachments/1167616242316742767/1171175723315241051/cachorro4.png?ex=655bb963&is=65494463&hm=0ecfef24a9f7fcd42eefd06baeeba22308ac801f3ce9980a5efedf4878d203ed&=&width=662&height=662" />
                    <Card.Body>
                        <Card.Title>Ração Pedigree para Adultos sabor Carne 900g</Card.Title>
                        <Card.Text>
                        R$ 80,00
                        </Card.Text>
                        <Button className="btn btn-success" variant="primary">Comprar</Button>
                    </Card.Body>
                    </Card>
                    </li>

                    <li>
                    <Card style={{ width: '18rem', height:'500px' }}>
                    <Card.Img style={{height:'286.4px'}} variant="top" src="https://cdn.discordapp.com/attachments/1167616242316742767/1171175723680153651/cachorro5.png?ex=655bb963&is=65494463&hm=7b670e0ebcf6d3eed9d31b398556af0f837d5cb9e4ec488fa76fb63d127d6ef9&" />
                    <Card.Body>
                        <Card.Title>Ração Pedigree para Adultos sabor Carne e Frango 2,7kg</Card.Title>
                        <Card.Text>
                        R$ 120,00
                        </Card.Text>
                        <Button className="btn btn-success" variant="primary">Comprar</Button>
                    </Card.Body>
                    </Card>
                    </li>
                    
                    <li>
                    <Card style={{ width: '18rem', height:'500px' }}>
                    <Card.Img style={{height:'286.4px'}} variant="top" src="https://cdn.discordapp.com/attachments/1167616242316742767/1171175724049236039/cachorro1.png?ex=655bb964&is=65494464&hm=e69556ef705199ca7e5d3d6ed8dc9fc4fe6c0b9ef6b4ff9e145a1e8d5a90dd0f&" />
                    <Card.Body>
                        <Card.Title>Ração Pedigree para Raças Pequenas sabor Carne e Vegetais 20kg</Card.Title>
                        <Card.Text>
                        R$ 200,00
                        </Card.Text>
                        <Button className="btn btn-success" variant="primary">Comprar</Button>
                    </Card.Body>
                    </Card>
                    </li>

                    <li>
                    <Card style={{ width: '18rem', height:'500px' }}>
                    <Card.Img style={{height:'286.4px'}} variant="top" src="https://cdn.discordapp.com/attachments/1167616242316742767/1171175724368011344/cachorro2.png?ex=655bb964&is=65494464&hm=5c412c7ead1cff3e52006bf6d520f523bae9a278fdd12ddd8a3c107f33e9d908&" />
                    <Card.Body>
                        <Card.Title>Ração Pedigree sabor Carne ao Leite 900g</Card.Title>
                        <Card.Text>
                        R$ 80,00
                        </Card.Text>
                        <Button className="btn btn-success" variant="primary">Comprar</Button>
                    </Card.Body>
                    </Card>
                    </li>

                    <li>
                    <Card style={{ width: '18rem', height:'500px' }}>
                    <Card.Img style={{height:'286.4px'}} variant="top" src="https://cdn.discordapp.com/attachments/1167616242316742767/1171175724665815211/cachorro3.png?ex=655bb964&is=65494464&hm=5c45b20a958198126770e6a941be7de9840dd1724ebc5c1d4eba93c10cf4b62f&" />
                    <Card.Body>
                        <Card.Title>Ração Pedigree para Filhotes sabor Frango e Cereais 2,7kg</Card.Title>
                        <Card.Text>
                        R$ 120,00
                        </Card.Text>
                        <Button className="btn btn-success" variant="primary">Comprar</Button>
                    </Card.Body>
                    </Card>
                    </li>
                </ul>
            </div>

            {/* Lista de Cards 2 */}
            <div className="cards">
                <h2>Gatos</h2>
                <ul className="prod-cachorros">
                    <li>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1167616242316742767/1171175850880802887/gato1.webp?ex=655bb982&is=65494482&hm=243294a918aaf849a2ebcfbbd34fba007035d8d2229c1a05e386b47cee7231dd&" />
                    <Card.Body>
                        <Card.Title>Ração PremieR para Adultos sabor Frango 1,5kg</Card.Title>
                        <Card.Text>
                        R$ 120,00
                        </Card.Text>
                        <Button className="btn btn-success" variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </li>

                    <li>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1167616242316742767/1171175851094724648/gato3.webp?ex=655bb982&is=65494482&hm=77141f883b32f5eaa6c93bd3f6059e7880d5accf5aa6214d0125c79494148fc8&" />
                    <Card.Body>
                        <Card.Title>Ração PremieR para Adultos sabor Salmão 500g</Card.Title>
                        <Card.Text>
                        SR$80,00
                        </Card.Text>
                        <Button className="btn btn-success" variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </li>
                    
                    <li>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1167616242316742767/1171175851321208852/gato4.webp?ex=655bb982&is=65494482&hm=1619e2f41b8427510d51c1d994e22e69515acba24f3348624f5eec2c953b32b2&" />
                    <Card.Body>
                        <Card.Title>Ração PremieR para Adultos sabor Frango 1,5kg</Card.Title>
                        <Card.Text>
                        R$ 120,00
                        </Card.Text>
                        <Button className="btn btn-success" variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </li>

                    <li>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1167616242316742767/1171175851556085800/gato5.webp?ex=655bb982&is=65494482&hm=ef2e35b1e608960930d678c6ec287ceee07c3270f924c82cbde2819c7c1f4541&" />
                    <Card.Body>
                        <Card.Title>Ração PremieR para Adultos sabor Salmão 1,5kg</Card.Title>
                        <Card.Text>
                        R$ 120,00
                        </Card.Text>
                        <Button className="btn btn-success" variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </li>

                    <li>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1167616242316742767/1171175851786784879/gato2.webp?ex=655bb982&is=65494482&hm=2e702ad3b1baf6f0b5986054cfbe7e27c074a46f101cec8fed28316b5edcfbfa&" />
                    <Card.Body>
                        <Card.Title>Ração PremieR para Adultos sabor Salmão 1,5kg</Card.Title>
                        <Card.Text>
                        R$ 120,00
                        </Card.Text>
                        <Button className="btn btn-success" variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </li>
                </ul>
            </div>

            {/* Lista de Cards 3 */}
            <div className="cards">
                <h2>Acessórios</h2>
                <ul className="prod-cachorros">
                    <li>
                    <Card style={{ width: '18rem', height:'500px' }}>
                    <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1167616242316742767/1171175988474937397/coleira1.png?ex=655bb9a3&is=654944a3&hm=ca487218c7ebb30d29e2061cc334fdb43711b6ca9351eba8e18c129de5776a66&" />
                    <Card.Body>
                        <Card.Title>Coleira Azul</Card.Title>
                        <Card.Text>
                        R$ 35,00
                        </Card.Text>
                        <Button className="btn btn-success" variant="primary">Comprar</Button>
                    </Card.Body>
                    </Card>
                    </li>

                    <li>
                    <Card style={{ width: '18rem', height:'500px' }}>
                    <Card.Img style={{height:'286.4px'}} variant="top" src="https://cdn.discordapp.com/attachments/1167616242316742767/1171175988735004743/coleira2.png?ex=655bb9a3&is=654944a3&hm=74d37c56c81c13bce4d6ab666c9fb51fe2a197eb73cdbad53b85161df6ca4289&" />
                    <Card.Body>
                        <Card.Title>Coleira Rosa</Card.Title>
                        <Card.Text>
                        R$ 35,00
                        </Card.Text>
                        <Button className="btn btn-success" variant="primary">Comprar</Button>
                    </Card.Body>
                    </Card>
                    </li>
                    
                    <li>
                    <Card style={{ width: '18rem', height:'500px' }}>
                    <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1167616242316742767/1171175988999233597/brinquedo2.png?ex=655bb9a3&is=654944a3&hm=6b10be06a29f6f19e2d8cff962305719eac1e8f741d044ff1213a8422b83346c&" />
                    <Card.Body>
                        <Card.Title>Brinquedo de Ossinho</Card.Title>
                        <Card.Text>
                        R$ 20,00
                        </Card.Text>
                        <Button className="btn btn-success" variant="primary">Comprar</Button>
                    </Card.Body>
                    </Card>
                    </li>

                    <li>
                    <Card style={{ width: '18rem', height:'500px' }}>
                    <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1167616242316742767/1171175989250883635/brinquedo3.webp?ex=655bb9a3&is=654944a3&hm=04a58f2f7d0c494f14ed58f4d8746c563d157ea92118e520eaf1d91962e28949&" />
                    <Card.Body>
                        <Card.Title>Lã de vó fazer croche para cachorros sei lá kkkkkkk </Card.Title>
                        <Card.Text>
                        R$ 5,00
                        </Card.Text>
                        <Button className="btn btn-success" variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </li>

                    <li>
                    <Card style={{ width: '18rem', height:'500px' }}>
                    <Card.Img style={{height:'286.4px'}} variant="top" src="https://cdn.discordapp.com/attachments/1167616242316742767/1171175989464813709/brinquedo1.webp?ex=655bb9a3&is=654944a3&hm=cd668a09a7567c53d13b597f7163e3e3be49f188ac5849ea643893ac3351e6b3&" />
                    <Card.Body>
                        <Card.Title>Vara de pescar para cachorros</Card.Title>
                        <Card.Text>
                        R$ 10,00
                        </Card.Text>
                        <Button className="btn btn-success" variant="primary">Comprar</Button>
                    </Card.Body>
                    </Card>
                    </li>
                </ul>
            </div>

           <Footer/>
        </>
    )

}

export default Produtos 