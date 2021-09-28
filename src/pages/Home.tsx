import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
} from "react-native";

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
  const [newSkill, setNewSkill] = useState();
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    setMySkills((oldState) => [...oldState, newSkill]);
  }

  useEffect(() => {
    const currentTime = new Date().getHours();
    
    if (currentTime >= 1 && currentTime < 12) {
      setGreeting('Good Morning');
    } else if (currentTime >= 12 && currentTime < 18) {
      setGreeting('Good Afternoon');
    } else if (currentTime >= 18) {
      setGreeting('Good Evening')
    }
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{greeting}, Antonio Carlos!</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        
      />
      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (<SkillCard skill={item} />)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: "#fff",
    padding: 30,
    fontWeight: "bold",
    fontSize: 18,
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: 15,
    borderRadius: 7,
    width: 350,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#a370f7",
    borderRadius: 7,
    width: 350,
    alignSelf: "center",
    padding: 15,
    alignItems: `center`,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
