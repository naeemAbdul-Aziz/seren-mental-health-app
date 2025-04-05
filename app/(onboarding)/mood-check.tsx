import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import Animated, { FadeIn } from 'react-native-reanimated';
import { Colors } from '../constants/Colors';
import { SmilePlus, Meh, Frown, Brain } from 'lucide-react-native';

const moods = [
  { id: 'happy', icon: SmilePlus, label: 'Happy', color: '#4ADE80' },
  { id: 'neutral', icon: Meh, label: 'Neutral', color: '#FCD34D' },
  { id: 'sad', icon: Frown, label: 'Sad', color: '#FB923C' },
  { id: 'overwhelmed', icon: Brain, label: 'Overwhelmed', color: '#F87171' },
];

export default function MoodCheck() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>How are you feeling?</Text>
        <Text style={styles.subtitle}>Take a moment to check in with yourself</Text>
      </View>

      <View style={styles.moodGrid}>
        {moods.map((mood) => (
          <TouchableOpacity
            key={mood.id}
            style={[
              styles.moodItem,
              selectedMood === mood.id && styles.selectedMood,
            ]}
            onPress={() => setSelectedMood(mood.id)}
          >
            <mood.icon size={32} color={mood.color} />
            <Text style={styles.moodLabel}>{mood.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedMood && (
        <Animated.View entering={FadeIn} style={styles.question}>
          <Text style={styles.questionText}>
            Would you like to talk about what's making you feel this way?
          </Text>
        </Animated.View>
      )}

      <TouchableOpacity
        style={[styles.button, !selectedMood && styles.buttonDisabled]}
        disabled={!selectedMood}
        onPress={() => router.push('/(onboarding)/preferences')}
      >
        <Text style={[styles.buttonText, !selectedMood && styles.buttonTextDisabled]}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 24,
  },
  header: {
    marginTop: 60,
    marginBottom: 40,
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
  moodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  moodItem: {
    width: '48%',
    aspectRatio: 1,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  selectedMood: {
    backgroundColor: Colors.primary,
  },
  moodLabel: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Colors.text,
    marginTop: 12,
  },
  question: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 12,
    marginBottom: 32,
  },
  questionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.text,
    textAlign: 'center',
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