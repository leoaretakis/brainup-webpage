import { auth } from '../firebase'

export default async (email, password) =>
  auth.signInWithEmailAndPassword(email, password)
