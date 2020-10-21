# react-native-image-lightbox-zoom-pan

This gist makes us of `react-native-image-pan-zoom` && `react-native-lightbox` to create the perfect image viewer.

Click on image will open LightBox modal once open will allow zooming and panning and swipe down to close.

### Example

```
import Lightbox from 'react-native-image-lightbox-zoom-pan';

<LightboxView source={{uri: link}} width={screen_width - 40} />
```

### Available props

```
{
    navigator,
    source,
    width = Dimensions.get("window").width,
    height = 300,
    swipeDownThreshold = 20,
    enableSwipeDown = true,
    lightBoxProps = {}, // All available props from react-native-lightbox
    imageZoomProps = {}, // All available props from react-native-image-pan-zoom
}
```