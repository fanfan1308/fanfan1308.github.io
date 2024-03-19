import React from 'react';
import Header from "./Component/Header";
import "./App.css"
import profil from "./assets/profil.jpg";
import {Card, CardBody, CardHeader, Carousel, Typography} from "@material-tailwind/react";
import data from "./data.json";

function App() {

    const realisation = data.realisation.map(item => (
        <Card className="mt-6 my-6 w-96 hover:shadow-xl transition-shadow" key={item.name}>
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
            <div className={"max-w-full flex p-32"}>
                <img src={profil} className="h-80 mr-20 rounded-lg" alt="profil"/>
                <div className={"flex flex-col m-auto"}>
                    <Typography variant="h2" className="mb-5">Qui suis-je ?</Typography>
                    <Typography variant="lead">Moi, c'est Fany, étudiante en communication actuellement en 5ᵉ année de Bachelor à Sup’ de Com Montpellier 😀</Typography>
                </div>
            </div>
            <div className="max-w-full grid p-32 flex-wrap justify-between gap-4 grid-cols-repeat items-center" >
                {realisation}
            </div>
        </div>
    );
}

export default App;
