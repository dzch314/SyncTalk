import { memo, useCallback, useEffect } from 'react';
import { View } from 'react-native';
import TrackPlayer, { State, usePlaybackState, useProgress } from 'react-native-track-player';

import RewindIcon from '@shared/assets/icons/rewind.svg';
import PauseIcon from '@shared/assets/icons/pause.svg';
import PlayIcon from '@shared/assets/icons/play.svg';
import ForwardIcon from '@shared/assets/icons/forward.svg';
import RepeatIcon from '@shared/assets/icons/repeat.svg';
import type { MessageMap, TimelinedMessage } from '@shared/lib/generateMessageTimeline';
import { Button } from '@shared/ui/Button';

import { styles } from './styles';

interface ControlsProps {
  messages: TimelinedMessage[];
  messageMap: MessageMap;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const restart = async () => {
  await TrackPlayer.pause();
  await TrackPlayer.seekTo(0);
};

export const Controls = memo(({ messages, messageMap, activeIndex, setActiveIndex }: ControlsProps) => {
  const { position } = useProgress(100);

  const { state } = usePlaybackState();

  useEffect(() => {
    if (state === State.Ended) {
      restart();
      setActiveIndex(-2);
    }
  }, [state, setActiveIndex]);

  useEffect(() => {
    if (activeIndex >= 0) {
      if (messageMap[position * 1000] !== undefined) {
        setActiveIndex(messageMap[position * 1000]);
      } else if (position * 1000 > messages[activeIndex + 1]?.startTime) {
        setActiveIndex(activeIndex + 1);
      }
    }
  }, [activeIndex, messageMap, messages, position, setActiveIndex]);

  const onPlay = useCallback(async () => {
    if (activeIndex === -2) {
      setActiveIndex(0);
      TrackPlayer.seekTo(0);
    }
    await TrackPlayer.play();
  }, [activeIndex, setActiveIndex]);

  const onPause = useCallback(async () => {
    await TrackPlayer.pause();
  }, []);

  const onRewind = useCallback(async () => {
    await TrackPlayer.pause();

    if (activeIndex < 0) return;

    const { position: pos } = await TrackPlayer.getProgress();
    const prevIndex =
      messages[activeIndex].startTime !== pos * 1000 ? activeIndex : activeIndex - 2 + (activeIndex % 2);

    await TrackPlayer.seekTo(messages[prevIndex < 0 ? 0 : prevIndex].startTime / 1000);

    if (prevIndex < 0) setActiveIndex(-2);
  }, [activeIndex, messages, setActiveIndex]);

  const onForward = useCallback(async () => {
    await TrackPlayer.pause();

    if (activeIndex < 0) return;

    const nextIndex = activeIndex < messages.length - 2 ? activeIndex + 2 - (activeIndex % 2) : 0;

    await TrackPlayer.seekTo(messages[nextIndex].startTime / 1000);

    if (!nextIndex) setActiveIndex(-2);
  }, [activeIndex, messages, setActiveIndex]);

  const onRepeat = async () => {
    await TrackPlayer.pause();

    const msgToRepeat = messages[activeIndex - (activeIndex % 2)];

    await TrackPlayer.seekTo(msgToRepeat.startTime / 1000);
    await TrackPlayer.setRate(0.75);
    await TrackPlayer.play();
    setTimeout(
      async () => {
        await TrackPlayer.pause();
        await TrackPlayer.setRate(1);
      },
      (msgToRepeat.endTime - msgToRepeat.startTime) / 0.75,
    );
  };

  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        <Button Icon={RewindIcon} onPress={onRewind} />
        {state === State.Playing ? (
          <Button Icon={PauseIcon} onPress={onPause} />
        ) : (
          <Button Icon={PlayIcon} onPress={onPlay} />
        )}
        <Button Icon={ForwardIcon} onPress={onForward} />
      </View>
      <Button Icon={RepeatIcon} onPress={onRepeat} />
    </View>
  );
});
