import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
// import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry/error-boundry'; 

import './people-page.css';



export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
    // hasError: false

  };
  // componentDidCatch(error, info) {

  //   this.setState({
  //     hasError: true
  //   });
  // }


  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    // if (this.state.hasError) {
    //   return <ErrorIndicator />;
    // }

    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected}
          getData={this.swapiService.getAllPeople}
          renderItem={({name, gender, birthYear}) => (
            `${name} (${gender}, ${birthYear})`)} />
            
    );
    // const itemList = (
    //   <ItemList onItemSelected={this.onPersonSelected}
    //       getData={this.swapiService.getAllPeople}>
    //         {(i) => (
    //         `${i.name} (${i.birthYear})`
    //         )}
    //   </ItemList>   
    // );

    const personDetails = (
      <ErrorBoundry >
         <ItemDetails personId={this.state.selectedPerson} />
       </ErrorBoundry>
     
    );

    return (
      //<ErrorBoundry >
        <Row left={itemList} right={personDetails} />
      //</ErrorBoundry>
      
    );
  }
}