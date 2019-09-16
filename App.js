import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, ScrollView } from 'react-native';
const axios = require('axios');

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      isLoading: true, 
    }
  }
  async componentDidMount(){
    var block1 = 'https://api.tfl.gov.uk/Line/';
    var block2 = '/Status?app_id=8a96a5d4&app_key=eba6a3f37a34b19d33687b156dc57abb';
    var request_1 = block1 + 'bakerloo' + block2;
    var request_2 = block1 + 'central' + block2;
    var request_3 = block1 + 'circle' + block2;
    var request_4 = block1 + 'district' + block2;
    var request_5 = block1 + 'hammersmith-city' + block2;
    var request_6 = block1 + 'jubilee' + block2;
    var request_7 = block1 + 'metropolitan' + block2;
    var request_8 = block1 + 'northern' + block2;
    var request_9 = block1 + 'piccadilly' + block2;
    var request_10 = block1 + 'victoria' + block2;
    var request_11 = block1 + 'waterloo-city' + block2;
    var request_12 = block1 + 'london-overground' + block2;
    var request_13 = block1 + 'tfl-rail' + block2;
    var request_14 = block1 + 'dlr' + block2;
    var request_15 = block1 + 'tram' + block2;
    // var block3 = 'https://api.tfl.gov.uk/Line/';
    // var block4 = '/Status/';
    // var block5 = '/to/';

  // Make the  first 14 requests
  const [func1, func2, func3, func4, func5, 
  func6, func7, func8, func9, func10, 
  func11, func12, func13, func14
  ] = await Promise.all([
    axios.get(request_1),
    axios.get(request_2),
    axios.get(request_3),
    axios.get(request_4),
    axios.get(request_5),
    axios.get(request_6),
    axios.get(request_7),
    axios.get(request_8),
    axios.get(request_9),
    axios.get(request_10),
    axios.get(request_11),
    axios.get(request_12),
    axios.get(request_13),
    axios.get(request_14)
  ]);

  // Make the 15th and final request using responses from the first two
  const func15 = await axios.get(request_15);

  // Update state once with all 15 responses
  this.setState({
    dataSource: func1.data[0].lineStatuses,
    dataSource2: func2.data[0].lineStatuses,
    dataSource3: func3.data[0].lineStatuses,
    dataSource4: func4.data[0].lineStatuses,
    dataSource5: func5.data[0].lineStatuses,
    dataSource6: func6.data[0].lineStatuses,
    dataSource7: func7.data[0].lineStatuses,
    dataSource8: func8.data[0].lineStatuses,
    dataSource9: func9.data[0].lineStatuses,
    dataSource10: func10.data[0].lineStatuses,
    dataSource11: func11.data[0].lineStatuses,
    dataSource12: func12.data[0].lineStatuses,
    dataSource13: func13.data[0].lineStatuses,
    dataSource14: func14.data[0].lineStatuses,
    dataSource15: func15.data[0].lineStatuses,
    isLoading: false
  });
//End of setState
  }
//End of Component Did Mount

render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    } else 
    return (
      <ScrollView style={styles.container}>
      <View style={styles.textBit}>
      <Text style={styles.titleText}> Service updates </Text>
      </View>
      <View style={styles.box}>
        <View style={styles.lineItem}>

        <View style={styles.lineRow}>
        <Text style={[styles.leftColumn, styles.line01]}>Bakerloo</Text>
        
        <FlatList
          style={styles.rightColumn}
          data={this.state.dataSource}
          renderItem={({item}) => <Text style={[styles.rightColumnText, {color:  item.statusSeverityDescription == "Good Service" ? 'black' : item.statusSeverityDescription == "Minor Delays" ? 'orange' : 'red'}]}>{item.statusSeverityDescription} </Text>}
          keyExtractor={({id}, index) => id.toString()}          
        />
        </View>
        </View>

        <View style={styles.lineItem}>
        <View style={styles.lineRow}>
        <Text style={[styles.leftColumn, styles.line02]}>Central</Text>

        <FlatList
          style={styles.rightColumn}
          data={this.state.dataSource2}
          renderItem={({item}) => <Text style={[styles.rightColumnText, {color:  item.statusSeverityDescription == "Good Service" ? 'black' : item.statusSeverityDescription == "Minor Delays" ? 'orange' : 'red'}]}>{item.statusSeverityDescription} </Text>}
          keyExtractor={({id}, index) => id.toString()}
        />
        </View>
        </View>
        <View style={styles.lineItem}>
        <View style={styles.lineRow}>
        <Text style={[styles.leftColumn, styles.line03]}>Circle</Text>

        <FlatList
          style={styles.rightColumn}
          data={this.state.dataSource3}
          renderItem={({item}) => <Text style={[styles.rightColumnText, {color:  item.statusSeverityDescription == "Good Service" ? 'black' : item.statusSeverityDescription == "Minor Delays" ? 'orange' : 'red'}]}>{item.statusSeverityDescription} </Text>}
          keyExtractor={({id}, index) => id.toString()}
        />
        </View>
        </View>
        <View style={styles.lineItem}>
        <View style={styles.lineRow}>
        <Text style={[styles.leftColumn, styles.line04]}>District</Text>
        
        <FlatList
          style={styles.rightColumn}
          data={this.state.dataSource4}
          renderItem={({item}) => <Text style={[styles.rightColumnText, {color:  item.statusSeverityDescription == "Good Service" ? 'black' : item.statusSeverityDescription == "Minor Delays" ? 'orange' : 'red'}]}>{item.statusSeverityDescription} </Text>}
          keyExtractor={({id}, index) => id.toString()}
        />
        </View>
        </View>

        <View style={styles.lineItem}>
        <View style={styles.lineRow}>
        <Text style={[styles.leftColumn, styles.line05]}>H'smith & City</Text>

        <FlatList
          style={styles.rightColumn}
          data={this.state.dataSource5}
          renderItem={({item}) => <Text style={[styles.rightColumnText, {color:  item.statusSeverityDescription == "Good Service" ? 'black' : item.statusSeverityDescription == "Minor Delays" ? 'orange' : 'red'}]}>{item.statusSeverityDescription} </Text>}
          keyExtractor={({id}, index) => id.toString()}
        />
        </View>
        </View>

        <View style={styles.lineItem}>
        <View style={styles.lineRow}>
        <Text style={[styles.leftColumn, styles.line06]}>Jubilee</Text>

        <FlatList
          style={styles.rightColumn}
          data={this.state.dataSource6}
          renderItem={({item}) => <Text style={[styles.rightColumnText, {color:  item.statusSeverityDescription == "Good Service" ? 'black' : item.statusSeverityDescription == "Minor Delays" ? 'orange' : 'red'}]}>{item.statusSeverityDescription} </Text>}
          keyExtractor={({id}, index) => id.toString()}
        />
        </View>
        </View>

         <View style={styles.lineItem}>
         <View style={styles.lineRow}>
        <Text style={[styles.leftColumn, styles.line07]}>Metropolitan</Text>

        <FlatList
          style={styles.rightColumn}
          data={this.state.dataSource7}
          renderItem={({item}) => <Text style={[styles.rightColumnText, {color:  item.statusSeverityDescription == "Good Service" ? 'black' : item.statusSeverityDescription == "Minor Delays" ? 'orange' : 'red'}]}>{item.statusSeverityDescription} </Text>}
          keyExtractor={({id}, index) => id.toString()}
        />
        </View>
        </View>

        <View style={styles.lineItem}>
        <View style={styles.lineRow}>
        <Text style={[styles.leftColumn, styles.line08]}>Northern</Text>
        <FlatList
          style={styles.rightColumn}
          data={this.state.dataSource8}
          renderItem={({item}) => <Text style={[styles.rightColumnText, {color:  item.statusSeverityDescription == "Good Service" ? 'black' : item.statusSeverityDescription == "Minor Delays" ? 'orange' : 'red'}]}>{item.statusSeverityDescription} </Text>}
          keyExtractor={({id}, index) => id.toString()}
        />
        </View>
        </View>

        <View style={styles.lineItem}>
        <View style={styles.lineRow}>
        <Text style={[styles.leftColumn, styles.line09]}>Piccadilly</Text>

        <FlatList
          style={styles.rightColumn}
          data={this.state.dataSource9}
          renderItem={({item}) => <Text style={[styles.rightColumnText, {color:  item.statusSeverityDescription == "Good Service" ? 'black' : item.statusSeverityDescription == "Minor Delays" ? 'orange' : 'red'}]}>{item.statusSeverityDescription} </Text>}
          keyExtractor={({id}, index) => id.toString()}
        />
        </View>
        </View>

        <View style={styles.lineItem}>
        <View style={styles.lineRow}>
        <Text style={[styles.leftColumn, styles.line10]}>Victoria</Text>

        <FlatList
          style={styles.rightColumn}
          data={this.state.dataSource10}
          renderItem={({item}) => <Text style={[styles.rightColumnText, {color:  item.statusSeverityDescription == "Good Service" ? 'black' : item.statusSeverityDescription == "Minor Delays" ? 'orange' : 'red'}]}>{item.statusSeverityDescription} </Text>}
          keyExtractor={({id}, index) => id.toString()}
        />
        </View>
        </View>

        <View style={styles.lineItem}>
        <View style={styles.lineRow}>
        <Text style={[styles.leftColumn, styles.line11]}>Waterloo & City</Text>

        <FlatList
          style={styles.rightColumn}
          data={this.state.dataSource11}
          renderItem={({item}) => <Text style={[styles.rightColumnText, {color:  item.statusSeverityDescription == "Good Service" ? 'black' : item.statusSeverityDescription == "Minor Delays" ? 'orange' : 'red'}]}>{item.statusSeverityDescription} </Text>}
          keyExtractor={({id}, index) => id.toString()}
        />
        </View>
        </View>

        <View style={styles.lineItem}>
        <View style={styles.lineRow}>
        <Text style={[styles.leftColumn, styles.line12]}>Overground</Text>

        <FlatList
          style={styles.rightColumn}
          data={this.state.dataSource12}
          renderItem={({item}) => <Text style={[styles.rightColumnText, {color:  item.statusSeverityDescription == "Good Service" ? 'black' : item.statusSeverityDescription == "Minor Delays" ? 'orange' : 'red'}]}>{item.statusSeverityDescription} </Text>}
          keyExtractor={({id}, index) => id.toString()}
        />
        </View>
        </View>

        <View style={styles.lineItem}>
        <View style={styles.lineRow}>
        <Text style={[styles.leftColumn, styles.line13]}>TFL Rail</Text>

        <FlatList
          style={styles.rightColumn}
          data={this.state.dataSource13}
          renderItem={({item}) => <Text style={[styles.rightColumnText, {color:  item.statusSeverityDescription == "Good Service" ? 'black' : item.statusSeverityDescription == "Minor Delays" ? 'orange' : 'red'}]}>{item.statusSeverityDescription} </Text>}
          keyExtractor={({id}, index) => id.toString()}
        />
        </View>
        </View>

        <View style={styles.lineItem}>
        <View style={styles.lineRow}>
        <Text style={[styles.leftColumn, styles.line14]}>DLR</Text>

        <FlatList
          style={styles.rightColumn}
          data={this.state.dataSource14}
          renderItem={({item}) => <Text style={[styles.rightColumnText, {color:  item.statusSeverityDescription == "Good Service" ? 'black' : item.statusSeverityDescription == "Minor Delays" ? 'orange' : 'red'}]}>{item.statusSeverityDescription} </Text>}
          keyExtractor={({id}, index) => id.toString()}
        />
        </View>
        </View>

        <View style={styles.lineItem}>
        <View style={styles.lineRow}>
        <Text style={[styles.leftColumn, styles.line15]}>Tram</Text>

        <FlatList
          style={styles.rightColumn}
          data={this.state.dataSource15}
          renderItem={({item}) => <Text style={[styles.rightColumnText, {color:  item.statusSeverityDescription == "Good Service" ? 'black' : item.statusSeverityDescription == "Minor Delays" ? 'orange' : 'red'}]}>{item.statusSeverityDescription} </Text>}
          keyExtractor={({id}, index) => id.toString()}
        />
        </View>
        </View>
        </View>
      </ScrollView>
      )
}
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    paddingLeft: '8%',
    paddingRight: '8%',
    paddingTop: '2%',
    paddingBottom: '5%',
    fontFamily: 'Ariel',
  },
  textBit: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 21,
    color: '#0019a8',
    flex: 0.9,
  },
    box: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderLeftWidth: 0.5,
    borderLeftColor: 'black',
    borderRightWidth: 0.5,
    borderRightColor: 'black',
    borderTopWidth: 0.5,
    borderTopColor: 'black',
  },
  lineRow: {
    flexDirection: 'row',
  },
  leftColumn: {
    width: '50%',
    borderRightWidth: 0.5,
    borderRightColor: 'grey',
    paddingLeft: 5,
    fontSize: 18,
  },
  line01: {
    backgroundColor: '#996633',
    fontWeight: 'bold',
    color: 'white'
  },
  line02: {
    backgroundColor: '#CC3333',
    fontWeight: 'bold',
    color: 'white'
  },
  line03: {
    backgroundColor: '#FFCC00',
    fontWeight: 'bold',
    color: '#1A5A92'
  },
  line04: {
    backgroundColor: '#006633',
    fontWeight: 'bold',
    color: 'white'
  },
  line05: {
    backgroundColor: '#CC9999',
    fontWeight: 'bold',
    color: '#0019a8'
  },
  line06: {
    backgroundColor: '#868F98',
    fontWeight: 'bold',
    color: 'white'
  },
  line07: {
    backgroundColor: '#660066',
    fontWeight: 'bold',
    color: 'white'
  },
  line08: {
    backgroundColor: '#000000',
    fontWeight: 'bold',
    color: 'white'
  },
  line09: {
    backgroundColor: '#0019a8',
    fontWeight: 'bold',
    color: 'white'
  },
  line10: {
    backgroundColor: '#0099CC',
    fontWeight: 'bold',
    color: 'white'
  },
  line11: {
    backgroundColor: '#66CCCC',
    fontWeight: 'bold',
    color: '#1A5A92'
  },
  line12: {
    backgroundColor: '#FF6600',
    fontWeight: 'bold',
    color: 'white'
  },
  line13: {
    backgroundColor: '#0019a8',
    fontWeight: 'bold',
    color: 'white'
  },
  line14: {
    backgroundColor: '#009999',
    fontWeight: 'bold',
    color: 'white'
  },
  line15: {
    backgroundColor: '#66CC00',
    fontWeight: 'bold',
    color: 'white'
  },
  rightColumn: {
    flex:1,
    paddingLeft: 5,
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
  rightColumnText: {
    fontSize: 18,
  },
  lineItem: {
    borderTopWidth: 0.5,
    borderTopColor: 'grey',
  },

});

