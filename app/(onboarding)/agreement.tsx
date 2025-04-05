import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { Colors } from '../constants/Colors';
import { Shield, Lock, UserCheck, CircleAlert as AlertCircle } from 'lucide-react-native';

const guidelines = [
  {
    icon: Shield,
    title: 'Safe Space',
    description: 'We maintain a respectful, supportive environment for all users.',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Your data is encrypted and your identity remains anonymous.',
  },
  {
    icon: UserCheck,
    title: 'Mutual Respect',
    description: 'Treat others with kindness and understanding.',
  },
  {
    icon: AlertCircle,
    title: 'Crisis Support',
    description: 'Emergency services are available 24/7 if needed.',
  },
];

export default function Agreement() {
  const [agreed, setAgreed] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Animated.View entering={FadeIn} style={styles.header}>
        <Text style={styles.title}>Safe Space Agreement</Text>
        <Text style={styles.subtitle}>
          Help us maintain a supportive environment for everyone
        </Text>
      </Animated.View>

      <View style={styles.guidelines}>
        {guidelines.map((item, index) => (
          <Animated.View
            key={item.title}
            entering={FadeInDown.delay(index * 200)}
            style={styles.guidelineCard}
          >
            <item.icon size={32} color={Colors.primary} />
            <View style={styles.guidelineText}>
              <Text style={styles.guidelineTitle}>{item.title}</Text>
              <Text style={styles.guidelineDescription}>{item.description}</Text>
            </View>
          </Animated.View>
        ))}
      </View>

      <Animated.View
        entering={FadeInDown.delay(800)}
        style={styles.privacySection}
      >
        <Text style={styles.privacyTitle}>Data & Privacy</Text>
        <Text style={styles.privacyText}>
          We collect anonymous usage data to improve our services. Your personal information
          is never shared with third parties. You can request data deletion at any time.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(1000)} style={styles.consentSection}>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setAgreed(!agreed)}
        >
          <View style={[styles.checkbox, agreed && styles.checkboxChecked]}>
            {agreed && <View style={styles.checkmark} />}
          </View>
          <Text style={styles.checkboxLabel}>
            I agree to the community guidelines and privacy policy
          </Text>
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity
        style={[styles.button, !agreed && styles.buttonDisabled]}
        disabled={!agreed}
        onPress={() => router.push('/(tabs)')}
      >
        <Text style={[styles.buttonText, !agreed && styles.buttonTextDisabled]}>
          Join PsychTech
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
  guidelines: {
    marginBottom: 32,
  },
  guidelineCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: Colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  guidelineText: {
    marginLeft: 16,
    flex: 1,
  },
  guidelineTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Colors.text,
    marginBottom: 4,
  },
  guidelineDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[500],
  },
  privacySection: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 12,
    marginBottom: 32,
  },
  privacyTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Colors.text,
    marginBottom: 12,
  },
  privacyText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.gray[500],
  },
  consentSection: {
    marginBottom: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: Colors.primary,
  },
  checkmark: {
    width: 12,
    height: 12,
    backgroundColor: Colors.white,
    borderRadius: 2,
  },
  checkboxLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.text,
    flex: 1,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
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