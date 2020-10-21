import React, { useState, useRef } from "react";
import { Image, Dimensions } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";
import Lightbox from "react-native-lightbox";

export default ({
  navigator,
  source,
  width = Dimensions.get("window").width,
  height = 300,
  swipeDownThreshold = 20,
  enableSwipeDown = true,
}) => {
  const [open, setOpen] = useState(false);
  const lightBox = useRef(null);
  const finalHeight = open ? Dimensions.get("window").height - 50 : height;
  return (
    <Lightbox
      overlayRef={lightBox}
      swipeToDismiss={false}
      navigator={navigator}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      <ImageZoom
        enableSwipeDown={enableSwipeDown}
        swipeDownThreshold={swipeDownThreshold}
        onSwipeDown={() => lightBox.current.close()}
        onStartShouldSetPanResponder={() => open}
        style={{ alignSelf: "center" }}
        cropWidth={width}
        cropHeight={finalHeight}
        imageWidth={width}
        imageHeight={finalHeight}
      >
        <Image
          resizeMode={open ? "contain" : undefined}
          style={{
            width,
            height: finalHeight,
          }}
          source={source}
        />
      </ImageZoom>
    </Lightbox>
  );
};
