import React, {useState} from 'react';

export default class ItemListing extends React.Component{
    constructor(props){
        super(props);
        this.state = {data:[],year:null,launch_success:null,land_success:null}
        this.baseState = this.state;
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleYear = this.handleYear.bind(this);
        this.handleLaunch = this.handleLaunch.bind(this);
        this.handleLand = this.handleLand.bind(this);
    }

    loadData(){
        fetch(this.props.url,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({data: data})
        })
        .catch(err => console.error(this.props.url, err.toString()))
    }

    //https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014

    async handleYear(e){
        await this.setState({year:e.currentTarget.dataset.year});
        this.handleItemClick();   
    }

    async handleLaunch(e){
        await this.setState({launch_success:e.currentTarget.dataset.launch_success});
        this.handleItemClick();   
    }

    async handleLand(e){
        await this.setState({land_success:e.currentTarget.dataset.land_success});
        this.handleItemClick();   
    }


    handleItemClick(e){
        var year = this.state.year ? '&launch_year='+this.state.year : "";
        var launch_success = this.state.launch_success ? '&launch_success='+this.state.launch_success : '';
        var land_success = this.state.land_success ? '&land_success='+this.state.land_success : '';
       var url = 'https://api.spacexdata.com/v3/launches?limit=100'+year+launch_success+land_success;
        fetch(url,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({data: data});
        })
        .catch(err => console.error(url, err.toString()))
    }

    componentDidMount(){
        this.loadData();
    }

    render(){
        return( 
            <div>
            <div className="filters">   
            <h3>Filters</h3>
             <p>Launch Year</p>
             <ul>
                 <li data-year="2006" onClick={this.handleYear}><span>2006</span></li>
                 <li data-year="2007" onClick={this.handleYear}><span>2007</span></li>
                 <li data-year="2008" onClick={this.handleYear}><span>2008</span></li>
                 <li data-year="2009" onClick={this.handleYear}><span>2009</span></li>
                 <li data-year="2010" onClick={this.handleYear}><span>2010</span></li>
                 <li data-year="2011" onClick={this.handleYear}><span>2011</span></li>
                 <li data-year="2012" onClick={this.handleYear}><span>2012</span></li>
                 <li data-year="2013" onClick={this.handleYear}><span>2013</span></li>
                 <li data-year="2014" onClick={this.handleYear}><span>2014</span></li>
                 <li data-year="2015" onClick={this.handleYear}><span>2015</span></li>
                 <li data-year="2016" onClick={this.handleYear}><span>2016</span></li>
                 <li data-year="2017" onClick={this.handleYear}><span>2017</span></li>
                 <li data-year="2018" onClick={this.handleYear}><span>2018</span></li>
                 <li data-year="2019" onClick={this.handleYear}><span>2019</span></li>
                 <li data-year="2020" onClick={this.handleYear}><span>2020</span></li>
             </ul>
             <p>Successful Launch</p>
             <ul>
                 <li data-launch_success="true" onClick={this.handleLaunch}><span>True</span></li>
                 <li data-launch_success="false" onClick={this.handleLaunch}><span>False</span></li>
             </ul>
             <p>Successful Landing</p>
             <ul>
                 <li data-land_success="true" onClick={this.handleLand}><span>True</span></li>
                 <li data-land_success="false" onClick={this.handleLand}><span>False</span></li>
             </ul>
         </div>  
            <div className="itemListing">   
                 {this.state.data.map((item, i) => (
                    <div className="item" key={i}>
                      <image src={item.links.mission_patch} alt="Card image cap"/>
                      <h4>{item.mission_name} #{item.flight_number}</h4>
                     <ul>
                        <li><strong>Mission Ids:</strong></li>
                        <li><strong>Launch Year:</strong> {item.launch_year}</li>
                        <li><strong>Successful Launch:</strong> {item.launch_success ? "True" : "False"}</li>
                        <li><strong>Successful Landings:</strong> {!!(item.rocket.first_stage.cores[0].land_success) ? item.rocket.first_stage.cores[0].land_success : "NA" }</li>
                     </ul>
                    </div>
                  ))
                  }
            </div>
            </div>
         );
    }
}