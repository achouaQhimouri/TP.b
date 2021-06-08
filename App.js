import React , {useState , useEffect} from 'react';
import { StyleSheet, Text ,View, SafeAreaView , FlatList , ActivityIndicator } from 'react-native';


const movie = "https://reactnative.dev/movies.json";
const App = () => {
  const [isLoading , setLoading] = useState(true);
  const [data , setData] = useState([]);

  useEffect(() =>{
    fetch(movie)
      .then((Response) => Response.json())
      .then((json) => setData(json.movies))
      .catch((error) => alert(error))
      .then(setLoading(false));
  })

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator/> : 
      <FlatList
        data = {data}
        keyExtractor= {({id}) => id}
        renderItem= {({item}) => {
          return(
            <View style={{paddingTop:90}}>
              <Text style ={styles.input}>
                {item.title} , {item.releaseYear}
              </Text>
            </View>
          );
        }}
      />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
});

export default App;