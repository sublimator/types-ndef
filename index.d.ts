declare module 'ndef' {
  const decodeMessage: (message: number[]) => INDEFRecord[]
  export const encodeMessage: (message: INDEFRecord[]) => number[]
  export const uriRecord: (uri: string) => INDEFRecord
  export const textRecord: (text: string) => INDEFRecord
  export interface INDEFRecord {
    tnf: number
    type: string
    id: number[]
    payload: number[]
    value: string
  }
}
