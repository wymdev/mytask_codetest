import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,

    backgroundColor: '#232323',
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
    color: 'white',
  },
  icon: {
    marginLeft: 20,
  },

  completedTaskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
  },
  completedTaskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  viewAllText: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 6,
  },

  cardBodyContainer: {
    padding: 8,
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    // borderRadius: 8,
    padding: 16,
    marginBottom: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  picture: {
    borderRadius: 30,
    width: 90,
    height: 90,
    position: 'relative',
    marginLeft: 10,
    marginTop: -25,
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
    backgroundColor: '#C3EDC0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    marginTop: 23,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderWidth: 1,
    borderColor: 'green',

    position: 'absolute',
    zIndex: 100,
    top: -5,
    left: 15,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
});

export default styles;
