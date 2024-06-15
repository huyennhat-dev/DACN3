export interface SvgProps {
  setColor: string;
  setWidth: string;
  setHeight: string;
}

export interface userType {
  _id?: string;
  username?: string;
  fullName?: string;
  password?: string;
  photo?: string;
  balance?: number;
  follower?: number | userType[];
  following?: number | userType[];
  wallet_address?: string;
  description?: string;
}

export interface sound {
  _id?: string;
  name?: string;
  slug?: string;
  user?: userType | null;
  main_sound?: string;
  preview_sound?: string;
  photo?: string;
  lyric?: { data: string; startTime: number; endTime: number }[];
  price?: number;
  listens?: number;
  hashTag?: string[];
  createdAt?: string;
}

export interface history {
  type?: string;
  sound: sound;
}

export interface params {
  token?: string;
  page?: number;
  limit?: number;
  keyword?: string;
}

export enum propTypes {
  "sound",
  "playlist",
}

export interface uploadData {
  name: string;
  sound: string;
  lyric: string;
  photo: string | null;
  price: number;
  hashTag: string[];
}

export interface playlist {
  _id?: string;
  user?: userType;
  title?: string;
  photo?: string;
  sounds?: sound[];
  favourite?: number;
  status?: string;
  updatedAt?: string;
}

export interface processType {
  id?: string;
  name: string;
  photo: string;
  process: number;
  status: Process;
}

export enum Process {
  Success,
  Error,
  Pending,
}

export interface homeData {
  recentSounds: {
    title: string;
    items: sound[];
  };
  newSounds: {
    title: string;
    items: sound[];
  };
  hotPlaylist: {
    title: string;
    items: playlist[];
  };
}

export interface searchData {
  sounds: sound[];
  authors: userType[];
  playlist?: playlist[];
}

export interface comment {
  _id?: string;
  sound: string | sound;
  user: userType | string;
  content: string;
  parent?: string;
  timestamp: number;
  createdAt?: string;
  replies?: comment[];
}

export interface transaction {
  _id:string,
  transaction_hash: string;
  action: string;
  status: string;
  createdAt: string;
}
