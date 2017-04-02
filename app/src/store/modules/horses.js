import { refsConfig } from '../store'

const eRef = refsConfig.horses.source

export const addHorse = (horse) => {
  eRef.push(horse)
}

export const deleteHorse = (horse) => {
  eRef.child(horse['.key']).remove()
}

export const updateHorse = (horse, attrs) => {
  eRef.child(horse['.key']).update(attrs)
}
