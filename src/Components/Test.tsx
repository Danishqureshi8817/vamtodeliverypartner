// App.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale, moderateScaleVertical, textScale } from '../utils/responsiveSize';
import { BackNewIcon, DwonNewBlackIcon, DwonWhiteNewIcon, InfoNewIcon, MiniLeftNewIcon, MiniRightNewIcon, NotiNewIcon, PariIcon, UserNewIcon } from '../common/component/Icons';

// Moon Effect Component
const MoonWithEffect = () => {
  return (
    <View style={styles.moonContainer}>
      <Image
        source={require('../assets/img/moon.png')}
        style={styles.moonBase}
        resizeMode="cover"
      />
      <LinearGradient
        colors={['rgba(234, 234, 234, 0.3)', 'rgba(234, 234, 234, 1)']}
        style={styles.gradient}
        locations={[0.1, 0.6]}
      />
    </View>
  );
};

const LunarCalendar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={{ flex: 1 }} >
          <BackNewIcon />
        </TouchableOpacity>
        {/* <Image 
          source={require('./assets/goddess-icon.png')} 
          style={styles.logo}
        /> */}
        <PariIcon style={{ flex: 1 }} />

        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <View style={styles.headerRight}>
            <InfoNewIcon />

            <NotiNewIcon />

            <UserNewIcon />

          </View>
        </View>


      </View>

      {/* Date Selector */}
      <View style={styles.dateSelector}>
        <TouchableOpacity style={styles.calendarButton}>
          <Text style={{ color: '#727175', fontSize: textScale(14) }}>Calendario</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Text style={{ color: '#1C1C1C', fontSize: textScale(14) }}>01-07-2024</Text>
            <DwonNewBlackIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.langButton}>
          <Text style={styles.langText}>Lang</Text>
          <DwonWhiteNewIcon />
        </TouchableOpacity>
      </View>

      {/* Date Navigator */}
      <View style={styles.dateNavigator}>
        <TouchableOpacity>
          <MiniLeftNewIcon />
        </TouchableOpacity>
        <Text style={styles.dateNavText}>Miércoles 24 de marzo de 2024</Text>
        <TouchableOpacity>
          <MiniRightNewIcon />
        </TouchableOpacity>
      </View>

      {/* Moon Info Card */}
      <View style={styles.moonInfo}>
        <View style={styles.moonPhaseRow}>
          <Text style={styles.moonPhaseText}>Luna Llena en Aries 16:07</Text>
          <Text style={styles.moonDescription}>
            Me celebro y me regalo eso que he postergado
          </Text>
        </View>
        <View style={styles.whiteCircle} />

      </View>

      {/* Additional Info Row */}
      <View style={styles.infoRow}>
        <View style={styles.circleOutline} />
        <TouchableOpacity style={styles.lunationButton}>
          <Text style={{color:'#8F8F8F',fontSize:16}}>Ver 10° Lunacion</Text>
        </TouchableOpacity>
        <View style={{gap:moderateScale(10)}}>
        <View style={styles.seasonContainer}>
          <Text style={styles.seasonText}>Otono</Text>
          <Text style={styles.weekText}>Semana 41</Text>
        </View>
        <TouchableOpacity style={styles.heyButton}>
          <Text style={{}}>&lt; Hey</Text>
        </TouchableOpacity>
        </View>

      </View>

      {/* Moon Image */}
      <View style={styles.moonImageSection}>
        <MoonWithEffect />
        <Text style={styles.timeText}>LFS 17:00 - 24:00</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.notesButton}>
          <Text style={styles.notesText}>Notas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scheduleButton}>
          <Text style={styles.scheduleText}>Cronograma</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },
  header: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    marginBottom: moderateScaleVertical(15)
  },
  logo: {
    width: 32,
    height: 32,
    tintColor: '#799021',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#666',
    borderRadius: 10,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
  },
  dateSelector: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 20,
  },
  calendarButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'space-between'
  },
  langButton: {
    backgroundColor: '#799021',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  langText: {
    color: '#fff',
    fontWeight: '500',
  },
  dateNavigator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    height: moderateScale(50),
    marginHorizontal: moderateScale(15),
    borderRadius: moderateScale(25)
  },
  dateNavText: {
    fontSize: 16,
    fontWeight: '500',
  },
  moonInfo: {
    backgroundColor: '#799021',
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:5
  },
  moonPhaseRow: {
    gap: 8
  },
  moonPhaseText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  whiteCircle: {
    width: 25,
    height: 25,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#fff',
    alignSelf: 'flex-start'
  },
  moonDescription: {
    color: '#fff',
    fontSize: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
    gap: 12,
    justifyContent:'space-between'
  },
  circleOutline: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#8B9D5F',
    alignSelf:'flex-start'
  },
  lunationButton: {
    borderWidth: 1,
    borderColor: '#8F8F8F',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 8,
    alignSelf:'flex-start',

  },
  seasonContainer: {
    marginLeft: 'auto',
  },
  seasonText: {
    color: '#8B9D5F',
    fontWeight: '500',
  },
  weekText: {
    color: '#666',
    fontSize: 12,
  },
  heyButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  moonContainer: {
    width: 300,
    height: 300,
    position: 'relative',
  },
  moonBase: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  moonImageSection: {
    alignItems: 'center',
    // marginVertical: 20,
  },
  timeText: {
    fontSize: 16,
    color: '#333',
    marginTop: 16,
    position: 'absolute',
    fontWeight: '600',
    bottom: 0,
    marginBottom: moderateScaleVertical(60)
    // borderWidth:1
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    // marginTop: 'auto',
    marginTop:-40
  },
  notesButton: {
    flex: 1,
    backgroundColor: '#799021',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    height:moderateScale(60),
    justifyContent:'center'
  },
  scheduleButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#799021',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    height:moderateScale(60),
    justifyContent:'center'
  },
  notesText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  scheduleText: {
    color: '#799021',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default LunarCalendar;