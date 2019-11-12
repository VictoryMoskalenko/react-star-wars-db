import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorBoundry from '../error-boundry/error-boundry';
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {
   
    state = {
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
      this.setState(({ swapiService }) => {
        
        const Service = swapiService instanceof SwapiService ?
                      DummySwapiService : SwapiService;

            return {
              swapiService: new Service()
            };        
        });
    };

    render() {

            return (
              <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                  <Router>
                    <div className="stardb-app">

                      <Header onServiceChange={this.onServiceChange} />

                      <RandomPlanet/>

                      <Route path="/"
                       render={() => <h2>Welcome to Star Wars DB</h2>}
                       exact />
                       
                       <Route path="/people"
                       render={() => <h2>People</h2>}
                       exact />

                      <Route path="/people/:id?" component={PeoplePage} />
                      <Route path="/planets" component={PlanetsPage} />
                      <Route path="/starships" exact component={StarshipsPage} />
                      <Route path="/starships/:id" 
                             render={({match, location, history}) => {
                                const { id } = match.params;
                                console.log(match);
                                return <StarshipDetails itemId={id} />
                                }} />

                    </div>
                  </Router>
                </SwapiServiceProvider>
              </ErrorBoundry>
            );
            }
          }