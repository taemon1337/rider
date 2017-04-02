import { refsConfig } from '../store'

const eRef = refsConfig.entries.source

export const addEntry = (entry) => {
  eRef.push(entry)
}

export const deleteEntry = (entry) => {
  eRef.child(entry['.key']).remove()
}

export const updateEntry = (entry, attrs) => {
  eRef.child(entry['.key']).update(attrs)
}
