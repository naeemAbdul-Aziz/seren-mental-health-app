import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants/Colors';
import { MessageSquare, TrendingUp, Award, Brain } from 'lucide-react-native';

const quickActions = [
  {
    icon: MessageSquare,
    title: 'Talk to AI',
    color: '#4ADE80',
  },
  {
    icon: TrendingUp,
    title: 'Track Mood',
    color: '#FB923C',
  },
  {
    icon: Brain,
    title: 'Exercises',
    color: '#60A5FA',
  },
  {
    icon: Award,
    title: 'Progress',
    color: '#F472B6',
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[Colors.primary, Colors.secondary]}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.greeting}>Good morning</Text>
        <Text style={styles.name}>Friend</Text>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.moodSection}>
          <Text style={styles.sectionTitle}>Today's Mood</Text>
          <View style={styles.moodCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=1999&auto=format&fit=crop' }}
              style={styles.moodImage}
            />
            <Text style={styles.moodPrompt}>How are you feeling right now?</Text>
            <TouchableOpacity style={styles.checkInButton}>
              <Text style={styles.checkInText}>Quick Check-in</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.quickActions}>
          {quickActions.map((action) => (
            <TouchableOpacity
              key={action.title}
              style={styles.actionButton}
            >
              <View style={[styles.actionIcon, { backgroundColor: action.color }]}>
                <action.icon size={24} color="white" />
              </View>
              <Text style={styles.actionTitle}>{action.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.insightsSection}>
          <Text style={styles.sectionTitle}>Daily Insights</Text>
          <View style={styles.insightCard}>
            <Text style={styles.insightTitle}>Wellness Tip</Text>
            <Text style={styles.insightText}>
              Taking short breaks to practice mindful breathing can help reduce stress
              and improve focus throughout your day.
            </Text>
          </View>
        </View>
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
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  greeting: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.white,
    opacity: 0.9,
  },
  name: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: Colors.white,
    marginTop: 4,
  },
  content: {
    padding: 24,
  },
  moodSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Colors.text,
    marginBottom: 16,
  },
  moodCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: Colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  moodImage: {
    width: '100%',
    height: 150,
  },
  moodPrompt: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.text,
    padding: 16,
    textAlign: 'center',
  },
  checkInButton: {
    backgroundColor: Colors.primary,
    margin: 16,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkInText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Colors.white,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
    marginBottom: 24,
  },
  actionButton: {
    width: '50%',
    padding: 8,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.text,
  },
  insightsSection: {
    marginBottom: 24,
  },
  insightCard: {
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 16,
    shadowColor: Colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  insightTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Colors.text,
    marginBottom: 8,
  },
  insightText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[500],
    lineHeight: 22,
  },
});