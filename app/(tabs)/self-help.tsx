import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../constants/Colors';
import { Wind, Brain, BookOpen, Music, Timer } from 'lucide-react-native';

const exercises = [
  {
    id: '1',
    title: 'Guided Breathing',
    description: 'Calm your mind with deep breathing exercises',
    icon: Wind,
    color: '#4ADE80',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2502&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Mindfulness',
    description: 'Practice being present in the moment',
    icon: Brain,
    color: '#FB923C',
    image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2488&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Journaling',
    description: 'Express your thoughts and feelings',
    icon: BookOpen,
    color: '#60A5FA',
  },
  {
    id: '4',
    title: 'Sound Therapy',
    description: 'Relax with calming sounds and music',
    icon: Music,
    color: '#F472B6',
  },
];

export default function SelfHelpScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Self-Help Tools</Text>
        <Text style={styles.subtitle}>Take care of your mental well-being</Text>
      </View>

      <View style={styles.timerCard}>
        <Timer size={32} color={Colors.primary} />
        <View style={styles.timerContent}>
          <Text style={styles.timerTitle}>Daily Practice</Text>
          <Text style={styles.timerText}>You've practiced mindfulness for 15 minutes today</Text>
        </View>
      </View>

      <View style={styles.exercises}>
        {exercises.map((exercise) => (
          <TouchableOpacity key={exercise.id} style={styles.exerciseCard}>
            {exercise.image ? (
              <Image
                source={{ uri: exercise.image }}
                style={styles.exerciseImage}
              />
            ) : (
              <View style={[styles.exerciseIcon, { backgroundColor: exercise.color }]}>
                <exercise.icon size={32} color="white" />
              </View>
            )}
            <View style={styles.exerciseContent}>
              <Text style={styles.exerciseTitle}>{exercise.title}</Text>
              <Text style={styles.exerciseDescription}>{exercise.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: Colors.white,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: Colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.gray[500],
  },
  timerCard: {
    margin: 16,
    padding: 16,
    backgroundColor: Colors.white,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: Colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  timerContent: {
    marginLeft: 16,
    flex: 1,
  },
  timerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Colors.text,
    marginBottom: 4,
  },
  timerText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[500],
  },
  exercises: {
    padding: 16,
  },
  exerciseCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: Colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  exerciseImage: {
    width: '100%',
    height: 160,
  },
  exerciseIcon: {
    width: '100%',
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exerciseContent: {
    padding: 16,
  },
  exerciseTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Colors.text,
    marginBottom: 4,
  },
  exerciseDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[500],
  },
});