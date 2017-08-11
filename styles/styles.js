import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ea2d51',
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: 30,
    marginBottom: 10,
  },
  subTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 0.20,
    height: 50,
    justifyContent: 'center',
    borderRadius: 3,
    marginRight: 5
  },
  colorTwo: {
    color: '#ea2d51',
  },
  searchCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  searchInput: {
    borderRadius: 3,
    height: 50,
    flex: 0.70,
    backgroundColor: 'white',
    marginHorizontal: 5
  },
  recList: {
    margin: 5
  },
  scrollViewImg: {
    marginVertical: 10,
    height: 133,
    borderRadius: 3
  },
  recName: {
    color: 'white'
  }
});

export default styles;
