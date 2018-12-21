import { auth } from '../firebase'

export default async () => auth.signOut()
