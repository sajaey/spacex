import React, {useState} from 'react';

export default class ItemFilters extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.baseState = this.state;
       // this.handleFilterByYear = this.handleFilterByYear.bind(this);
    }

    render(){
        return(   
            <div className="filters">   
               <h3>Filters</h3>
                <p>Launch Year</p>
                <ul>
                    <li data-year="2006" onClick={this.handleFilterByYear}><span>2006</span></li>
                    <li data-year="2007" onClick={this.handleFilterByYear}><span>2007</span></li>
                    <li data-year="2008" onClick={this.handleFilterByYear}><span>2008</span></li>
                    <li data-year="2009" onClick={this.handleFilterByYear}><span>2009</span></li>
                    <li data-year="2010" onClick={this.handleFilterByYear}><span>2010</span></li>
                    <li data-year="2011" onClick={this.handleFilterByYear}><span>2011</span></li>
                    <li data-year="2012" onClick={this.handleFilterByYear}><span>2012</span></li>
                    <li data-year="2013" onClick={this.handleFilterByYear}><span>2013</span></li>
                    <li data-year="2014" onClick={this.handleFilterByYear}><span>2014</span></li>
                    <li data-year="2015" onClick={this.handleFilterByYear}><span>2015</span></li>
                    <li data-year="2016" onClick={this.handleFilterByYear}><span>2016</span></li>
                    <li data-year="2017" onClick={this.handleFilterByYear}><span>2017</span></li>
                    <li data-year="2018" onClick={this.handleFilterByYear}><span>2018</span></li>
                    <li data-year="2019" onClick={this.handleFilterByYear}><span>2019</span></li>
                    <li data-year="2020" onClick={this.handleFilterByYear}><span>2020</span></li>
                </ul>
                <p>Successful Launch</p>
                <ul>
                    <li><span>True</span></li>
                    <li><span>False</span></li>
                </ul>
                <p>Successful Landing</p>
                <ul>
                    <li><span>True</span></li>
                    <li><span>False</span></li>
                </ul>
               
            </div>
         );
    }
}