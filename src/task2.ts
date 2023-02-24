type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

export type First<T extends Array<string | number>> = T[0];

export type head1 = First<arr1> // expected to be 'a'
export type head2 = First<arr2> // expected to be 3
