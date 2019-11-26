import React from 'react';



//Parent Class

class Cricketer {
    constructor(name, team) {
        this.name = name;
        this.team = team;
    }
    getName = () => this.name;

    getTeamName = () => this.team;
}

//Subclass

export class Bowler extends Cricketer {
    constructor(name, team, wickets) {
        super(name, team);
        this.wickets = wickets;
    }
    getWickets = () => this.wickets;
}

//SubClass

export class Batsmen extends Cricketer {
    constructor(name, team, runs) {
           super( name, team);
           this.runs = runs;
       } 
       getRuns = () => this.runs;
    }
