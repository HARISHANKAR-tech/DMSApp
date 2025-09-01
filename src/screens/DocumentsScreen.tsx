import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { mockDocuments } from '../services/mockDocs';

export default function DocumentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Documents</Text>
      <FlatList
        data={mockDocuments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.docCard}>
            <Text style={styles.docTitle}>📄 {item.title}</Text>
            <Text style={styles.docDesc}>{item.description}</Text>
            <Text style={styles.docDate}>📅 {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  docCard: {
    padding: 15,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#f1f5f9',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  docTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  docDesc: { fontSize: 14, color: '#555', marginBottom: 4 },
  docDate: { fontSize: 12, color: '#888' },
});
