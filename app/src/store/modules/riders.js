import { refsConfig } from '../store'

const eRef = refsConfig.riders.source

export const addRider = (rider) => {
  eRef.push(rider)
}

export const deleteRider = (rider) => {
  eRef.child(rider['.key']).remove()
}

export const updateRider = (rider, attrs) => {
  eRef.child(rider['.key']).update(attrs)
}
