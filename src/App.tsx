import Header from "./Component/Header";
import profil from "./assets/profil.jpg";
import {Card, CardBody, CardHeader, Carousel, Typography} from "@material-tailwind/react";
import data from "./data.json";

function App() {

    const realisation = data.realisation.map(item => (
        <Card className="mt-6 my-6 lg:w-80 md:w-60 xsm:w-40 hover:shadow-xl transition-shadow" key={item.name}>
            <CardHeader color="white" className="relative border-[1px]">
                {item.img.length === 1 ?
                    <img src={require("./assets/" + item.img[0])} alt={item.name} /> :
                    <Carousel>
                        {item.img.map((img, i) => (
                            <img src={require("./assets/" + img)} alt={item.name + "_" + i} key={item.name + "_" + i} />
                        ))}
                    </Carousel>
                }
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {item.name}
                </Typography>
                <Typography>
                    {item.desc}
                </Typography>
            </CardBody>
        </Card>
    ))

    return (
        <div className="App">
            <Header />
            <div className={"max-w-full flex md:p-32 sm:p-20 p-12 md:flex-row flex-col"}>
                <div className='h-fit md:my-auto md:mr-20 md:mr-10 self-center mb-10'>
                    <img src={profil} className="md:max-h-[50rem] lg:max-h-96 max-h-80 rounded-lg" alt="profil"/>
                </div>
                <div className={"flex flex-col m-auto"}>
                    <Typography variant="h2" className="mb-5">Qui suis-je ?</Typography>
                    <Typography variant="lead">Moi, c'est Fany, étudiante en communication actuellement en 5ᵉ année de Bachelor à Sup’ de Com Montpellier 😀</Typography>
                </div>
            </div>
            <div className="max-w-full grid md:p-32 sm:p-20 xms:p-12 p-4 flex-wrap justify-between gap-4 grid-cols-repeat-[400] grid-cols-repeat-300 items-center" >
                {realisation}
            </div>
        </div>
    );
}

export default App;
