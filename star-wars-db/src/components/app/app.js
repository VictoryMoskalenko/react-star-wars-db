import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
// import ItemList from "../item-list/item-list";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from '../error-boundry/error-boundry';
import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';


export default class App extends Component {

    swapiService = new SwapiService();
    
    state = {
        showRandomPlanet: true
        // hasError: false
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    
    render() {

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet /> : null;

        const { getPerson,
                getStarship,
                getStarshipImage,
                getPersonImage,
                getPlanet,
                getPlanetImage,
                getAllPeople,
                getAllPlanets } = this.swapiService;
        
        const personDetails = (
          <ItemDetails
            itemId={11}
            getData={getPerson}
            getImageUrl={getPersonImage} >

            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />

          </ItemDetails>
        )

        const planetDetails = (
          <ItemDetails
            itemId={9}
            getData={getPlanet}
            getImageUrl={getPlanetImage} >

            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rtation Period" />
            <Record field="diameter" label="Diameter" />

          </ItemDetails>
        )

        const starshipDetails = (
          <ItemDetails
           itemId={5}
           getData={getStarship}
           getImageUrl={getStarshipImage} >

          <Record field="model" label="Model" />
          <Record field="length" label="Length" />
          <Record field="costInCredits" label="Cost" />

          </ItemDetails>
        );

            return (
              <ErrorBoundry>
                <div className="stardb-app">
                  <Header />

                  <PersonDetails itemId={11} />

                  <PlanetDetails itemId={5} />

                  <StarshipDetails itemId={9} />

                  <PersonList />
                     
                  <PlanetList />
                     
                  <StarshipList />
                
                </div>
              </ErrorBoundry>
            );

            // return (
            //     <div className="stardb-app">
            //       <Header />
            //       { planet }
          
            //       <div className="row mb2 button-row">
            //         <button
            //           className="toggle-planet btn btn-warning btn-lg"
            //           onClick={this.toggleRandomPlanet}>
            //           Toggle Random Planet
            //         </button>
            //         <ErrorButton />
            //       </div>

            //       <PeoplePage />

            //       <div className="row mb2">
            //         <div className="col-md-6">
            //           <ItemList onItemSelected={this.onPersonSelected}
            //           getData={this.swapiService.getAllPlanets}
            //           renderItem={(item) => (
            //           <span>{ item.name }<button>!</button></span>
            //           )} />
            //         </div>
            //         <div className="col-md-6">
            //           <ItemDetails personId={this.state.selectedPerson} />
            //         </div>
            //       </div>

            //       <div className="row mb2">
            //         <div className="col-md-6">
            //           <ItemList onItemSelected={this.onPersonSelected}
            //           getData={this.swapiService.getAllStarships}
            //           renderItem={(item) => item.name} />
            //         </div>
            //         <div className="col-md-6">
            //           <ItemDetails personId={this.state.selectedPerson} />
            //         </div>
            //       </div>
          
            //     </div>
             // );
            }
          }