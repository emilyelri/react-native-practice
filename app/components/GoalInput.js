import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };
    
    const addGoalHandler = () => {
    props.setCourseGoals([...(props.courseGoals), { id: Math.random().toString(), value: enteredGoal }]);
    }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" style={styles.addButton} onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  },
  addButton: {
    paddingHorizontal: 20,
    paddingVertical: 40
  }
});

export default GoalInput;