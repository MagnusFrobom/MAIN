import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

interface Config {
    num: [number, number];
    rps: number;
    radius: [number, number];
    life: [number, number];
    v: [number, number];
    tha: [number, number];
    // body: string;
    // rotate: [number, number];
    alpha: [number, number];
    scale: [number, number];
    position: { x: number, y: number, width: number, height: number };
    color: string[];
    cross: string;
    random: number | null;
    g: number;
    // f: [number, number];
    onParticleUpdate: (ctx: any, particle: any) => void;
}

let config: Config = {
    num: [0.2, 0.2],
    rps: 0.0001,
    radius: [40, 40],
    life: [0.1, 1],
    v: [0.5, 1],
    tha: [-40, 40],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.2, 0.2],
    scale: [0.1, 0.2],
    position: { x: 1, y: 1, width: 2000, height: 800 }, // all or center or {x:1,y:1,width:100,height:100}
    color: ["#333333"],
    cross: "dead", // cross or bround
    random: 100, // or null,
    g: 0.01, // gravity
    // f: [2, -1], // force
    onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
    },
};

interface User {
    id: string;
    name: string;
    email: string;
    entries: number;
    joined: string;
}

interface Box {
    leftCol: number;
    topRow: number;
    rightCol: number;
    bottomRow: number;
}

interface State {
    input: string;
    imageUrl: string;
    box: Box;
    route: string;
    isSignedIn: boolean;
    user: User;
}

class App extends Component<{}, State> {
    constructor(props: {}) {

        onRouteChange = (route) => {
            if (route === 'signout') {
                this.setState({ isSignedIn: false })
            } else if (route === 'home') {
                this.setState({ isSignedIn: true })
            }
            this.setState({ route: route });
        }

        render() {
            const { isSignedIn, imageUrl, route, box } = this.state;
            return (
                <div className= "App" >
                <ParticlesBg type="cobweb" config = { config } bg = { true} />
                    <Navigation isSignedIn={ isSignedIn } onRouteChange = { this.onRouteChange } />
                        { route === 'home'
                        ? <div>
                        <Logo />
                        < Rank
                name = { this.state.user.name }
            entries = { this.state.user.entries }
                />
                <ImageLinkForm
                onInputChange={ this.onInputChange }
            onButtonSubmit = { this.onButtonSubmit }
                />
                <FaceRecognition box={ box } imageUrl = { imageUrl } />
                    </div>
          : (
                route === 'signin'
                    ? <Signin loadUser= { this.loadUser } onRouteChange = { this.onRouteChange } />
             : <Register loadUser={ this.loadUser } onRouteChange = { this.onRouteChange } />
            )
        }
        </div>
    );
    }
}

export default App;
