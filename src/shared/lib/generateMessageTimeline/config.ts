interface ConfigMessage {
  words: string;
  time: number;
}

interface Speaker {
  name: string;
  phrases: ConfigMessage[];
}

type MessageType = 'message' | 'pause';

export interface Config {
  pause: number;
  speakers: Speaker[];
}

export interface TimelinedMessage {
  id: string;
  type: MessageType;
  startTime: number;
  endTime: number;
  name?: string;
  message?: string;
}

export type MessageMap = Record<string, number>;
