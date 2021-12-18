import React, { FC, useState } from "react";
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { Panel } from "./Panel";

interface Props {}

export const SwipeUp: FC<Props> = ({}) => {
  const [open, setOpen] = useState(false);
  const [panelButton, setPanelButton] = useState(true);
  const heightValue = new Animated.Value(0);
  const windowHeight = Dimensions.get("window").height;
  const position = { top: windowHeight / 3, bottom: windowHeight - 8 };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder() {
      return panelButton;
    },
    onPanResponderMove(_e, gestureState) {
      const { dy } = gestureState;
      heightValue.setValue(dy);
      setPanelButton(true);
    },
    onPanResponderEnd() {
      setOpen(!open);
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.panel,
          {
            height: windowHeight + 50,
            transform: [
              {
                translateY: Animated.add(
                  heightValue,
                  open ? position.top : position.bottom
                ),
              },
            ],
          },
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.75}
          onPressIn={() => {
            setPanelButton(true);
          }}
          onPress={() => {
            setOpen(!open);
          }}
        >
          <View style={styles.panelIcon}></View>
        </TouchableOpacity>
        <Panel panelButton={panelButton} setPanelButton={setPanelButton} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  panel: {
    backgroundColor: "#C1C1C1",
    width: "100%",
    borderRadius: 4,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: "absolute",
    shadowColor: "#000",
  },
  panelIcon: {
    width: 50,
    height: 5,
    backgroundColor: "grey",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 25,
  },
});
