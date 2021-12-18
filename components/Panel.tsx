import React, { FC } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";

interface Props {
  panelButton: boolean;
  setPanelButton: (value: boolean) => void;
}

export const Panel: FC<Props> = ({ panelButton, setPanelButton }) => {
  return (
    <View
      style={styles.panel}
      onTouchStart={() => panelButton && setPanelButton(false)}
    >
      <Text>Your Content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 25,
    width: "100%",
    height: "60%",
    position: "relative",
    zIndex: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    marginTop: 50,
    alignItems: "center",
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 5,
  },
});
