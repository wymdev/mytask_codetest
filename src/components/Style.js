import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,

    backgroundColor: '#232323'
  },
  profilePicture: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderRadius: 20,
  },
  nameText: {
    marginRight: wp(47),
  },
  text: {
    color: 'white'
  },
  icon: {
    marginLeft: 20,
  },

  cardBodyContainer: {
    padding: 8,
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    // borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  picture: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
  },
  completedBadge: {
    backgroundColor: 'green',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 8,
  },

});

export default styles;