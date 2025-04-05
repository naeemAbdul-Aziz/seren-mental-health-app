import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Colors } from '../constants/Colors';
import { Users, Bot, BookOpen, Bell, Check } from 'lucide-react-native';

const supportTypes = [
  {
    id: 'peer',
    icon: Users,
    title: 'Peer Support',
    description: 'Connect with others who understand your journey',
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'AI Therapist',
    description: 'Get 24/7 support from our AI counseling system',
  },
  {
    id: 'self',
    icon: BookOpen,
    title: 'Self-Help',
    description: 'Access guided exercises and resources',
  },
];

const notificationPreferences = [
  'Daily check-ins',
  'Community updates',
  'Wellness reminders',
  'Achievement celebrations',
];

export default function Preferences() {
  const [selectedSupport, setSelectedSupport] = useState<string[]>([]);
  const [notifications, setNotifications] = useState<string[]>([]);

  const toggleSupport = (id: string) => {
    setSelectedSupport(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const toggleNotification = (pref: string) => {
    setNotifications(prev =>
      prev.includes(pref)
        ? prev.filter(item => item !== pref)
        : [...prev, pref]
    );
  };

  const canContinue = selectedSupport.length > 0;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Customize Your Experience</Text>
        <Text style={styles.subtitle}>Choose the support types that work best for you</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support Types</Text>
        {supportTypes.map((type, index) => (
          <Animated.View
            key={type.id}
            entering={FadeInDown.delay(index * 200)}
          >
            <TouchableOpacity
              style={[
                styles.optionCard,
                selectedSupport.includes(type.id) && styles.selectedCard,
              ]}
              onPress={() => toggleSupport(type.id)}
            >
              <type.icon
                size={32}
                color={selectedSupport.includes(type.id) ? Colors.white : Colors.primary}
              />
              <View style={styles.optionText}>
                <Text
                  style={[
                    styles.optionTitle,
                    selectedSupport.includes(type.id) && styles.selectedText,
                  ]}
                >
                  {type.title}
                </Text>
                <Text
                  style={[
                    styles.optionDescription,
                    selectedSupport.includes(type.id) && styles.selectedText,
                  ]}
                >
                  {type.description}
                </Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.notificationGrid}>
          {notificationPreferences.map((pref, index) => (
            <Animated.View
              key={pref}
              entering={FadeInDown.delay(300 + index * 100)}
              style={styles.notificationItem}
            >
              <TouchableOpacity
                style={[
                  styles.notificationButton,
                  notifications.includes(pref) && styles.selectedNotification,
                ]}
                onPress={() => toggleNotification(pref)}
              >
                <Bell
                  size={20}
                  color={notifications.includes(pref) ? Colors.white : Colors.primary}
                />
                <Text
                  style={[
                    styles.notificationText,
                    notifications.includes(pref) && styles.selectedText,
                  ]}
                >
                  {pref}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, !canContinue && styles.buttonDisabled]}
        disabled={!canContinue}
        onPress={() => router.push('/(onboarding)/agreement')}
      >
        <Text style={[styles.buttonText, !canContinue && styles.buttonTextDisabled]}>
          Continue
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 24,
  },
  header: {
    marginTop: 60,
    marginBottom: 32,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: Colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.gray[500],
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Colors.text,
    marginBottom: 16,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: Colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  selectedCard: {
    backgroundColor: Colors.primary,
  },
  optionText: {
    marginLeft: 16,
    flex: 1,
  },
  optionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Colors.text,
    marginBottom: 4,
  },
  optionDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[500],
  },
  selectedText: {
    color: Colors.white,
  },
  notificationGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -6,
  },
  notificationItem: {
    width: '50%',
    padding: 6,
  },
  notificationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 12,
    borderRadius: 12,
    shadowColor: Colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedNotification: {
    backgroundColor: Colors.primary,
  },
  notificationText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.text,
    marginLeft: 8,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonDisabled: {
    backgroundColor: Colors.gray[300],
  },
  buttonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Colors.white,
  },
  buttonTextDisabled: {
    color: Colors.gray[500],
  },
});