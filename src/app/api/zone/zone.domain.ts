export interface Zone {
  id: string;
  created: string,
  updated: string,
  name: string,
  verified: boolean,
}

export enum RecordType {
  A = 'a',
  AAAA = 'aaaa',
  CNAME = 'cname',
  MX = 'mx',
  NS = 'ns',
  TXT = 'txt',
}

export type ZoneRecord<T> = {
  type: T,
  record: RecordInner,
  value: T extends RecordType.A
    ? RecordA : T extends RecordType.AAAA
      ? RecordAaaa : T extends RecordType.CNAME
        ? RecordCname : T extends RecordType.MX
          ? RecordMx : T extends RecordType.NS
            ? RecordNs : T extends RecordType.TXT
              ? RecordTxt : unknown
}

export interface RecordInner {
  id: string;
  crated: string;
  updated: string;
  name: string;
  zone_id: string;
  ttl: number;
}

export interface RecordA {
  id: string;
  address: string;
}

export interface RecordAaaa {
  id: string;
  address: string;
}

export interface RecordCname {
  id: string;
  target: string;
}

export interface RecordMx {
  id: string;
  preference: number;
  exchange: string;
}

export interface RecordNs {
  id: string;
  target: string;
}

export interface RecordTxt {
  id: string;
  content: string;
}
