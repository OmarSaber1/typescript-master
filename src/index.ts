interface Person {
  name: string;
  age?: number;
  phone?: number;
}

type PersonOptional = Partial<Person>;
type PersonRequired = Required<Person>;
type PersonPick = Pick<Person, "name" | "age">;
