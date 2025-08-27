import type { Config, TimelinedMessage, MessageMap } from './config';

export const generateMessageTimeline = ({ pause, speakers }: Config) => {
  const messages: TimelinedMessage[] = [];
  const messageMap: MessageMap = {};

  const maxPhrases = Math.max(...speakers.map((s) => s.phrases.length));
  let index = 0;

  for (let i = 0; i < maxPhrases; i += 1) {
    speakers.forEach((speaker) => {
      if (speaker.phrases[i]) {
        const lastPause = messages.at(-1);

        const messageStartTime = lastPause ? lastPause.endTime + 1 : 0;
        const messageEndTime = messageStartTime + speaker.phrases[i].time;

        messages.push({
          id: messageStartTime.toString(),
          type: 'message',
          name: speaker.name,
          message: speaker.phrases[i].words,
          startTime: messageStartTime,
          endTime: messageEndTime,
        });
        messageMap[messageStartTime.toString()] = index++;

        const pauseStartTime = messageEndTime + 1;
        const pauseEndTime = pauseStartTime + pause;

        messages.push({
          id: pauseStartTime.toString(),
          type: 'pause',
          startTime: pauseStartTime,
          endTime: pauseEndTime,
        });
        messageMap[pauseStartTime.toString()] = index++;
      }
    });
  }

  return { messages, messageMap };
};
