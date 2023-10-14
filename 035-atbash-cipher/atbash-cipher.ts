// Instructions
// Create an implementation of the atbash cipher, an ancient encryption system created in the Middle East.

// The Atbash cipher is a simple substitution cipher that relies on transposing all the letters in the alphabet such that the resulting alphabet is backwards. The first letter is replaced with the last letter, the second with the second-last, and so on.

// An Atbash cipher for the Latin alphabet would be as follows:

// Plain:  abcdefghijklmnopqrstuvwxyz
// Cipher: zyxwvutsrqponmlkjihgfedcba
// It is a very weak cipher because it only has one possible key, and it is a simple mono-alphabetic substitution cipher. However, this may not have been an issue in the cipher's time.

// Ciphertext is written out in groups of fixed length, the traditional group size being 5 letters, leaving numbers unchanged, and punctuation is excluded. This is to make it harder to guess things based on word boundaries. All text will be encoded as lowercase letters.

// Examples
// Encoding test gives gvhg
// Encoding x123 yes gives c123b vh
// Decoding gvhg gives test
// Decoding gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt gives thequickbrownfoxjumpsoverthelazydog

export function encode(plainText: unknown): unknown {
  throw new Error('Remove this statement and implement this function')
}

export function decode(cipherText: unknown): unknown {
  throw new Error('Remove this statement and implement this function')
}
