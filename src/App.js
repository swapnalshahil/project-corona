import React, { Component } from 'react';

import { Cards, Chart, CountryPicker, } from './components';
import styles from './App.module.css';
import { fetchData, } from './api';

import coronaImage from './images/image.png'

class App extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data : {},
             country : '',
        }
    }
    
    async componentDidMount() {
        const fetchedData = await fetchData();
        
        this.setState({
            data: fetchedData,
        });
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);
        //fetching data
        this.setState({ data: fetchedData , country: country});
        
        //setstate
    }
    render() {
        const {data, country} = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Cards data = {data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App
