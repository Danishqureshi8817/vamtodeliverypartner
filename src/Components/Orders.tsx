import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BagBlackIcon } from '../common/component/Icons';
import { moderateScale } from '../utils/responsiveSize';

export default function Orders() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* <Icon name="lock" size={24} color="#000" /> */}
        <BagBlackIcon/>
        <Text style={styles.headerTitle}>Orders</Text>
      </View>

      {/* Filter Section */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButtonActive}>
          <Text style={styles.filterButtonTextActive}>Meal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Store</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateButton}>
          <Text style={styles.dateText}>24/08/2023 g</Text>
          <Icon name="calendar" size={16} color="#FF6F61" />
        </TouchableOpacity>
      </View>

      {/* Order Cards */}
      <ScrollView contentContainerStyle={styles.orderContainer}>
        {[
          {
            center: 'Pickup Center-1',
            orders: [
              { id: 1109, meal: 'Breakfast', time: '09:30 PM', status: 'Pickup Pending' },
              { id: 1110, meal: 'Lunch', time: '12:30 PM', status: 'Pickup Failed' },
              { id: 1120, meal: 'Dinner', time: '07:30 PM', status: 'Pickup Rescheduled' },
            ],
          },
          {
            center: 'Pickup Center-2',
            orders: [
              { id: 1109, meal: 'Breakfast', time: '09:30 PM', status: 'Delivery Failed' },
              { id: 1110, meal: 'Lunch', time: '12:30 PM', status: 'Delivery Pending' },
              { id: 1120, meal: 'Dinner', time: '07:30 PM', status: 'Delivery Rescheduled' },
            ],
          },
        ].map((center, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.centerTitle}>{center.center}</Text>
            {center.orders.map((order, idx) => (
              <View key={idx} style={styles.orderRow}>
                <View style={styles.orderInfo}>
                  <Text style={styles.orderNumber}>Order No. #{order.id} j</Text>
                  <Text style={styles.orderDetails}>{order.meal} | {order.time}</Text>
                </View>
                <View style={styles.actionIcons}>
                  <Icon name="phone" size={20} color="#FF6F61" style={styles.icon} />
                  <Icon name="telegram" size={20} color="#FF6F61" style={styles.icon} />
                </View>
                <Text
                  style={[
                    styles.statusTag,
                    order.status === 'Pickup Pending' || order.status === 'Delivery Pending'
                      ? styles.statusPending
                      : order.status === 'Pickup Failed' || order.status === 'Delivery Failed'
                      ? styles.statusFailed
                      : styles.statusRescheduled,
                  ]}>
                  {order.status}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="cart-outline" size={24} color="#FF6F61" />
          <Text style={[styles.navText, { color: '#FF6F61' }]}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="account-circle-outline" size={24} color="#C4C4C4" />
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    elevation: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
    marginBottom: 8,
  },
  filterButtonActive: {
    backgroundColor: '#FF6F61',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  filterButton: {
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  filterButtonTextActive: {
    color: '#FFF',
    fontWeight: '600',
  },
  filterButtonText: {
    color: '#666',
    fontWeight: '600',
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF6F61',
  },
  dateText: {
    color: '#FF6F61',
    marginRight: 8,
  },
  orderContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    // height:moderateScale(60)
  },
  centerTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  orderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    height:moderateScale(60)
  },
  orderInfo: {
    flex: 1,
  },
  orderNumber: {
    fontSize: 14,
    fontWeight: '600',
  },
  orderDetails: {
    fontSize: 14,
    color: '#666',
  },
  actionIcons: {
    flexDirection: 'row',
    marginHorizontal: 8,
  },
  icon: {
    marginHorizontal: 6,
  },
  statusTag: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: '600',
  },
  statusPending: {
    backgroundColor: '#FFF0E6',
    color: '#FF6F61',
  },
  statusFailed: {
    backgroundColor: '#FFE6E6',
    color: '#FF3B3B',
  },
  statusRescheduled: {
    backgroundColor: '#E6F0FF',
    color: '#4A90E2',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#C4C4C4',
    marginTop: 4,
  },
});
